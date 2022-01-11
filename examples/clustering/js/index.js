/*
 * Copyright (C) 2022 HERE Europe B.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 * License-Filename: LICENSE
 */

import 'ol/ol.css';
import {quantiles, calcFeaturePropertyStats, getColor} from './clustering.js';
import tour from "./tour.js";
import Map from 'ol/Map';
import View from 'ol/View';
import {MVT, GeoJSON} from 'ol/format';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import {Fill, Stroke, Style, Circle} from 'ol/style';
import {fromLonLat} from 'ol/proj';
import apikey from '.credentials.js';

const roadStyleCache = {};
const roadColor = {
  'major_road': '#5B5B5B',
  'minor_road': '#3E3E3E',
  'highway': '#5B5B5B',
};
var chain = 'All';
const buildingStyle = new Style({
  fill: new Fill({
    color: '#ccc'
  }),
  stroke: new Stroke({
    color: '#444',
    width: 1,
  }),
});
const waterStyle = new Style({
  fill: new Fill({
    color: '#1F1F1F',
  }),
});
const roadStyle = function (feature) {
  const kind = feature.get('kind');
  const sort_key = feature.get('sort_key');
  const styleKey = kind + '/' + sort_key;
  let style = roadStyleCache[styleKey];
  if (!style) {
    let color, width;
    if(roadColor[kind]){
      color = roadColor[kind];
      width = 1;
    } 
    style = new Style({
      stroke: new Stroke({
        color: color,
        width: width,
      }),
      zIndex: sort_key,
    });
    roadStyleCache[styleKey] = style;
  }
  return style;
};
var clusteringStyleCache = {};
const clusteringStyle = function(feature){
    const count = clustering == 'quadbin' ? feature.get('count') : feature.get('aggregation').qty;
    const grade = count + "-" + featureStatistics.min + "-" + featureStatistics.max;

    if(!clusteringStyleCache[grade]){
        clusteringStyleCache[grade] = new Style({
            fill: new Fill({
                color: getColor(count, featureStatistics)
            }),
            stroke: new Stroke({
                color: '#444',
                width: 1,
            })
        });
    }
    return clusteringStyleCache[grade];
}

const retailStyle = new Style({
  image: new Circle({
    radius: 1,
    fill: new Fill({color: 'rgba(228, 198, 61, 0.2)'})
  })
});

const baseMapSource = new VectorTileSource({
    attributions: '<a href="https://here.com">HERE</a>',
    format: new MVT(),
    maxZoom: 15,
    minZoom: 1,
    url: `https://vector.hereapi.com/v2/vectortiles/base/mc/{z}/{x}/{y}/omv?apiKey=${apikey}`
});

var clustering = 'hexbin';
var resolution = 0;
var clusterUrl = (ralRes, clustering, chain) => { return `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-retails/layers/retail/tile/web/{z}_{x}_{y}?apiKey=${apikey}${chain=='All'?'':'&p.retailer='+chain}&clustering=${clustering}&clustering.relativeResolution=${ralRes}`};
var retailUrl = (chain) => { return `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-retails/layers/retail/tile/web/{z}_{x}_{y}?apiKey=${apikey}${chain=='All'?'':'&p.retailer='+chain}&mode=viz`};

var clusterSource = new VectorTileSource({
    attributions: '<a href="https://here.com">HERE</a>',
    format: new GeoJSON(),
    maxZoom: 15,
    minZoom: 1,
    url: clusterUrl(resolution, clustering, chain)
});

var retailSource = new VectorTileSource({
  attributions: '<a href="https://here.com">HERE</a>',
  format: new GeoJSON(),
  maxZoom: 15,
  minZoom: 1,
  url: retailUrl(chain)
});

var view = new View({
  center: fromLonLat([-1.0064, 53.7142]),
  maxZoom: 13,
  minZoom: 1,
  zoom: 6,
});
var baseVectorTileLayer = new VectorTileLayer({
  source: baseMapSource,
  style: function (feature, resolution) {
    
    switch (feature.get('layer')) {
      case 'water':
        return waterStyle;
      case 'roads':
        return roadStyle(feature);
      case 'buildings':
        return resolution < 10 ? buildingStyle : null;
      default:
        return null;
    }
  },
});

var clusterVectorTileLayer = new VectorTileLayer({
  source: clusterSource,
  style: function (feature) {
    return clusteringStyle(feature);
  }
});

var retailVectorTileLayer = new VectorTileLayer({
  source: retailSource,
  style: retailStyle
}); 

var map = new Map({
  layers: [
    baseVectorTileLayer,
    clusterVectorTileLayer
  ],
  target: 'map',
  view: view
});

var featureStatistics = {};
var quantile = [];

map.on("rendercomplete", function(evt) {
  var result = getStatistics();
  let tempqutantile = result.quantile;

  if(!checkSame(tempqutantile, quantile)) {
    quantile = result.quantile;
    featureStatistics = result.featureStatistics;

    setTimeout(function(){clusterVectorTileLayer.setStyle(clusterVectorTileLayer.getStyle())}, 100);
  }
});

function checkSame(tempqutantile, quantile){
  if(tempqutantile.length != quantile.length)
    return false;
  else {
    var same = true;
    for(let i in tempqutantile){
      if(tempqutantile[i].from != quantile[i].from || tempqutantile[i].to != quantile[i].to || tempqutantile[i].count != quantile[i].count) {
        same = false;
        break;
      }
    }
    return same;
  } 
}

const qtstable = document.querySelector('#quantiles table');

function getStatistics() {
  var featureStatistics = {};
  var quantile = [];

  var extent = map.getView().calculateExtent(map.getSize());
  var polygons = clusterSource.getFeaturesInExtent(extent);
  var properties = polygons.map(f=>f.getProperties());

  if(properties.length) {
    var quantileMap = {};
    properties = properties.filter(p=>{
      const key = p.centroid ? p.centroid[0] + p.centroid[1] : p.qk;
      if(quantileMap[key]) return false;
      else{
        quantileMap[key] = true;
        return true;
      }
    })

    featureStatistics = calcFeaturePropertyStats(properties, clustering);
    const numQuantiles = 7;
    const range = featureStatistics.max + 1 - featureStatistics.min;
    const step = range/numQuantiles;

    quantile = quantiles({
      numQuantiles: numQuantiles,
      minFilter: featureStatistics.min,
      range: range,
      step: step,
      valueCounts: featureStatistics.sortedValueCounts, 
      valueColorFunction: (value) => {
        return getColor(value, featureStatistics);
      }
    });
    qtstable.innerHTML = getQuantilesTable(quantile, step)
  }
  
  return {quantile, featureStatistics};
}

function formatNumber(value, step) {
  if (Math.floor(value) === value) {
    return value.toFixed(0); // show integers as integers
  }

  // adapt the number of digits displayed to the data resolution
  const digits = Math.max(0, Math.ceil(Math.log10(1/step)))
  return value.toFixed(digits);
}
function getQuantilesTable(quantiles, step) {
  var qt = [];
  for(const quantile of quantiles) {
    qt.push(`<tr>`+
      `<td style="width: 12%;"><span style="width:100%;display:inline-block;text-align:right;">${quantile.count}x</span></td>`+
      `<td style="width: 55%"><div style="width: ${quantile.percent}%; height: 15px; background: ${((quantile.fromColor && quantile.toColor) ? (`linear-gradient(90deg, ${quantile.fromColor}, ${quantile.toColor}`) : 'lightblue') }">&nbsp;</div></td>`+
      `<td style="width: 33%"><span>${formatNumber(quantile.from, step)}</span><span class="to"> ⇢ </span><span>${formatNumber(quantile.to, step)}</span></td>`+
      `</tr>`);
  }
  return qt.join('');
}



const resInput = document.querySelector("#range input");
const resSpan = document.querySelector("#range span");
resInput.addEventListener("pointerup", function(e){
    resolution = e.target.value * 1;
    resSpan.innerHTML = 'Clustering resolution: ' + resolution;
    if(clustering == 'quadbin')
      resolution += 2;
    clusterSource.setUrl(clusterUrl(resolution, clustering, chain));
})

const retailChains = document.querySelectorAll("#retails input");
retailChains.forEach(s=>{
  s.onclick=(e)=>{
    chain = e.target.value;
    clusterSource.setUrl(clusterUrl(resolution, clustering, chain));
    retailSource.setUrl(retailUrl(chain));
  }
})


const clusteringSwitch = document.querySelectorAll('.btn-group button');
clusteringSwitch.forEach(button => {
  button.addEventListener('click', (e)=>{
    clusteringSwitch.forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');

    clustering = e.target.getAttribute('value');
    resolution  = resInput.value * 1;
    resSpan.innerHTML = 'Relative clustering resolution: ' + resolution;
    if(clustering == 'quadbin'){
      resolution += 2;
    }

    clusterSource.setUrl(clusterUrl(resolution, clustering, chain));
  })
})

const retailLayerSwitch = document.querySelectorAll('.retail-btn-group button');
var retailLayer = 'off';
retailLayerSwitch.forEach(button => {
  button.addEventListener('click', (e)=>{
    retailLayerSwitch.forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');

    var tempRetailLayer = e.target.getAttribute('value');
    
    if(retailLayer != tempRetailLayer) {
      retailSource.setUrl(retailUrl(chain));
      if(tempRetailLayer == 'off') {
        map.removeLayer(retailVectorTileLayer);
      } else if(tempRetailLayer == 'on'){
        map.addLayer(retailVectorTileLayer);
      }
    } 
    retailLayer = tempRetailLayer;
  })
})

tour();