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
import H from '@here/maps-api-for-javascript';
import tour from "./tour.js";
import apikey from '.credentials.js';

function addIml(map, platform, options, treecolor, treecolorM, treecolorH) {
    const catalogHrn = 'hrn:here:data::olp-here:dh-showcase-amsterdam';
    const layerId = 'trees';
    const service = platform.getIMLService();
    const imlProvider = new H.service.iml.Provider(service, catalogHrn, layerId, options);

    const style = imlProvider.getStyle();
    const styleConfig = style.extractConfig(['iml']);

    // low zoom level
    styleConfig.layers.iml.points.draw.points.size = [[1,'1px'], [16,'3px'], [17,'10px'], [18,'20px'], [20,'50px']];
    styleConfig.layers.iml.points.draw.points.color = treecolor;
    styleConfig.layers.iml.filter = { $zoom: { min: 0, max: 16} };

    styleConfig.layers.imlm = {
        data: {source: 'iml', layer: 'hrn:here:data::olp-here:dh-showcase-amsterdam:trees'},
        filter: { $zoom: { min: 16, max: 18} },
        points: {
            filter: {$geometry: 'point'},
            draw: {
                points: {
                    collide: false, 
                    order: 200, 
                    texture: 'icons/tree.png',
                    color: treecolorM, 
                    size: [[1,'1px'], [16,'3px'], [17,'10px'], [18,'20px'], [20,'50px']]
                }
            }
        }
    }

    // high zoom level
    styleConfig.layers.imlH = {
        data: {source: 'iml', layer: 'hrn:here:data::olp-here:dh-showcase-amsterdam:trees'},
        filter: { $zoom: { min: 18} },
        points: {
            filter: {$geometry: 'point'},
            draw: {
                points: {
                    collide: false, 
                    order: 200, 
                    color: treecolorH, 
                    texture: 'icons/tree.png',
                    size: [[1,'1px'], [16,'3px'], [17,'10px'], [18,'20px'], [20,'50px']]
                }
            }
        }
    }

    style.mergeConfig(styleConfig);

    return new H.map.layer.TileLayer(imlProvider);
}

const platform = new H.service.Platform({
    apikey: apikey
});
const defaultLayers = platform.createDefaultLayers();

window.map = new H.Map(
    document.getElementById('map'),
    defaultLayers.vector.normal.map,
    {
        center: new H.geo.Point(52.376839, 4.90864377),
        zoom: 13
    }
);
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var species = "All";
var sampling = "high";
var color = "rgba(200, 254, 182, 0.1)";
var colorM = "rgba(200, 254, 182, 0.3)";
var colorH = "rgba(200, 254, 182, 0.6)";
var imlLayer = addIml(map, platform, {parameters: {
    mode: "viz",
    vizSampling: "high"
}}, color, colorM, colorH);
map.addLayer(imlLayer);


var pageWidth;
var pageHeight;
window.addEventListener('resize', () => {
    map.getViewPort().resize();

    pageWidth = document.documentElement.offsetWidth;
    pageHeight = document.documentElement.offsetHeight;
});

const clusteringSwitch = document.querySelectorAll('.btn-group button');
const header = document.querySelector('.page-header p');
clusteringSwitch.forEach(button => {
  button.addEventListener('click', (e)=>{
    clusteringSwitch.forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');


    if(e.target.value == sampling) return;

    sampling = e.target.getAttribute('value');

    map.removeLayer(imlLayer);
    var params =  {parameters: {
        mode: "viz",
        vizSampling: sampling
    }};
    if(species != "All") {
        params.parameters['p.Categorie'] = species;
    }

    imlLayer = addIml(map, platform, params, color, colorM, colorH);
    map.addLayer(imlLayer);
  })
})

function setStyle(map){
    // get the vector provider from the base layer
    var provider = map.getBaseLayer().getProvider();
    var style = new H.map.Style('dark.yml', document.URL.substr(0,document.URL.lastIndexOf('/')) +  '/');
    // set the style on the existing layer
    provider.setStyle(style);
}

const trees = document.querySelectorAll("#overlay-trees input");  
trees.forEach(s=>{
  s.onclick=(e)=>{
    if(e.target.value == species) return;

    species = e.target.value;
    var rgb = e.target.parentElement.querySelector('.line').style.background;
    var opacity = 0.1;
    var opacityM = 0.3;
    var opacityH = 0.4;
    map.removeLayer(imlLayer);
    var params =  {parameters: {
        mode: "viz",
        vizSampling: sampling
    }};
    if(species != "All") {
        params.parameters['p.Categorie'] = species;
        opacity = 0.3;
        opacityM = 0.5;
        opacityH = 0.6;
    }
    color = rgb.replace('rgb', 'rgba').replace(')', ', ' + opacity + ')');
    colorM = rgb.replace('rgb', 'rgba').replace(')', ', ' + opacityM + ')');
    colorH = rgb.replace('rgb', 'rgba').replace(')', ', ' + opacityH + ')');

    imlLayer = addIml(map, platform, params, color, colorM, colorH);
    map.addLayer(imlLayer);
  }
})

setStyle(map);

tour();
