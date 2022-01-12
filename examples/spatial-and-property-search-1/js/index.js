/*
 * Copyright (C) 2021 HERE Europe B.V.
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
import {} from '@here/xyz-maps-common';
import {MVTLayer, TileLayer, LocalProvider} from '@here/xyz-maps-core';
import {Map} from '@here/xyz-maps-display';
import mapStyle from "./style.js";
import tour from "./tour.js";
import apiKey from '.credentials.js';


function main(lat, lon, zoom) {
  var areasLayer;
  var sportFacilitiesLayer;
  // setup the Map Display
  window.display = new Map(document.getElementById('map'), {
      zoomLevel: 12,
      center: {longitude: 4.897070, latitude: 52.377956},
      // add layers to display
      layers: [
          new MVTLayer({
              name: 'mvt-world-layer',
              remote: {
                url: `https://vector.hereapi.com/v2/vectortiles/base/mc/{z}/{x}/{y}/omv?apiKey=${apiKey}`
              },
              min: 1,
              max: 20,
              style: mapStyle
          }),
          sportFacilitiesLayer = new TileLayer({
              min: 2,
              max: 20,
              name: 'sportFacilitiesLayer',
              provider: new LocalProvider({
                name: 'sport-provider'
              }),
              style: {
                  styleGroups: {
                    Skate: [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#55b6fc', radius: 8}
                    ],
                    Tennis: [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#fc8c54', radius: 8}
                    ],
                    Basketbal: [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#9c56fb', radius: 8}
                    ],
                    Voetbal: [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#7FFC54', radius: 8}
                    ],
                    "Jeu de boules": [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#919191', radius: 8}
                    ],
                    "Fitness \/ Bootcamp": [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#BA0003', radius: 8}
                    ],
                    "Tafeltennis": [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#035DBA', radius: 8}
                    ],
                    "Beachvolley": [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#00B086', radius: 8}
                    ],
                    "Overig": [
                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#FEFF00', radius: 8}
                    ]
                  },
                  assign: function (feature, level) {
                      return feature.properties.Sportvoorziening;
                  }
              }
          }),
          areasLayer = new TileLayer({
              min: 2,
              max: 20,
              name: 'statesLayer',
              provider: new LocalProvider({
                name: 'states-provider'
              }),
              style: {
                  styleGroups: {
                      'Buurt': [
                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#BFBFBF'},
                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
                        {zIndex: 6, type: 'Text', textRef: 'properties.Buurt', fill: '#3D272B', strokeWidth: 5, font:"normal 9px Arial"}                  
                      ],
                      'Buurtcombinatie': [
                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#AFAFAF'},
                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
                        {zIndex: 6, type: 'Text', textRef: 'properties.Buurtcombinatie', fill: '#3D272B', strokeWidth: 5, font:"normal 10px Arial"}                     
                      ],
                      'Gebied': [
                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#9F9F9F'},
                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
                        {zIndex: 6, type: 'Text', textRef: 'properties.Gebied', fill: '#3D272B', stroke: 'white', strokeWidth: 5, font:"normal 12px Arial"}                 
                      ],
                      'Stadsdeel': [
                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#8F8F8F'},
                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
                        {zIndex: 6, type: 'Text', textRef: 'properties.Stadsdeel', fill: '#3D272B', stroke: 'white', strokeWidth: 5, font:"normal 14px Arial"}              
                      ]
                  },
                  assign: function (feature, level) {
                      if(feature.properties.Buurt)
                        return "Buurt";
                      else if(feature.properties.Buurtcombinatie)
                        return "Buurtcombinatie";
                      else if(feature.properties.Gebied)
                        return "Gebied";
                      else if(feature.properties.Stadsdeel)
                        return "Stadsdeel";
                  }
              }
          })
      ]
  });
  
  display.addEventListener('pointerup', function(e){
    clearInfo();
  });

  var sport = "Skate";
  var arealevel = "neighbourhoods";

  getSportFacilities(sport, arealevel, sportFacilitiesLayer, areasLayer);

  const sports = document.querySelectorAll("#overlay-sport input");  
  const areas = document.querySelectorAll("#overlay-areas input");
  sports.forEach(s=>{
    s.onclick=(e)=>{
      sport = e.target.value;
      getSportFacilities(sport, arealevel, sportFacilitiesLayer, areasLayer);
    }
  })
  areas.forEach(s=>{
    s.onclick=(e)=>{
      arealevel = e.target.value;
      getArea(arealevel, areasLayer, (new Date).getTime());
    }
  })

  window.onresize = ()=>{
    display.resize();
  }

  tour();
}

//492 fitness
const sportUrl = (sport) => `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-amsterdam-areas/layers/public-playground/search?apiKey=${apiKey}&p.Sportvoorziening=${sport}`;
const areaUrl = (areas) => `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-amsterdam-areas/layers/${areas}/spatial?apiKey=${apiKey}`;

const processInfo = document.querySelector("#request-info");
const requestsPanel = document.querySelector("#requests");

var multiPoint;
var sportController;
var areaController;
function getSportFacilities(sport, areas, sportFacilitiesLayer, areasLayer){
  if (sportController) {
    sportController.abort();
  }
  sportController = new AbortController();
  const { signal } = sportController;

  let id = generateRequestId();
  let value = (new Date).getTime();
  appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Property search for 'Sportvoorziening' equals to <b>${sport}</b> in Sport Facility Layer:</div>`, id, value);
  id = generateRequestId();
  appendInfo(`<div class="request transparent ${id}" value='${value}'>&nbsp;&nbsp;&nbsp;<i>GET /search?p.Sportvoorziening='${sport}'</i></div>`, id, value);

  fetch(sportUrl(sport), {
      signal: signal
    })
    .then(res => res.json())
    .then(res => {
      updateInfo([id]);

      sportFacilitiesLayer.getProvider().clear();
      sportFacilitiesLayer.addFeature(res);
      
      let idn = generateRequestId();
      appendInfo(`<div class='instruct transparent ${idn}' value='${value}'>- Construct Multipoint with all locations of <b>${sport}</b></div>`, idn, value);

      multiPoint = [];
      res.features.forEach(p=>{
        multiPoint.push(p.geometry.coordinates);
      })
      getArea(areas, areasLayer, value);
    })
}

function getArea(areas, areasLayer, value){
  if (areaController) {
    areaController.abort();
  }
  areaController = new AbortController();
  const { signal } = areaController;

  let id = generateRequestId();
  appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Spatial search using Multipoint in <b>${areas}</b> Layer:</div>`, id, value);
  const requestInfoId = generateRequestId();
  appendInfo(`<div class="request ${requestInfoId} transparent" value='${value}'>&nbsp;&nbsp;&nbsp;<i>POST /spatial -- Payload: MultiPoint</i></div>`, requestInfoId, value);


  fetch(areaUrl(areas), {
      method: 'POST',
      headers: {
          'Content-Type': 'application/geo+json'
      },
      body: JSON.stringify({
        coordinates: multiPoint,
        type: "MultiPoint"
      }),
      signal: signal
    })
    .then(res => res.json())
    .then(res => {
      updateInfo([requestInfoId]);

      areasLayer.getProvider().clear();
      areasLayer.addFeature(res);
    })
}


function generateRequestId(){
  return 'request-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
}
var firstBlockCount = 5;
var blockCount=0;
function appendInfo(info, className, value) {
  var height = 19;
  if(info.indexOf("GET")>0 || info.indexOf("POST")>0)
    height = 13;
  const block = processInfo.querySelector('.block-' + value);
  if(firstBlockCount-- > 0)
    info = info.replace(' transparent', '');
  if(block){
    block.innerHTML += info;
  } else {
    currentHeight += 6;
    requestsPanel.innerHTML += `<div class='block block-${value}${blockCount++%2==0?'':' blueb'}' style='bottom:0px;' value='${value}'>${info}</div>`;
  }
  expandSection(processInfo, className, height, block, value);
}

function updateInfo(idxs, info) {
  idxs.forEach(id=>{
    const req = processInfo.querySelector(`.${id}`);
    req.innerHTML = req.innerHTML.replace('</i>', '</i>&nbsp;<b>Done!</b>');
  })
}

function clearInfo(idx) {
    let infos = processInfo.querySelectorAll('.block');
    let latest = infos[infos.length-1].getAttribute('value');
    processInfo.style['overflow-y'] = null;
    if(idx != undefined) {
      infos[idx].parentNode.removeChild(infos[idx]);
    } else 
      for(const [index, info] of infos.entries()) {
        let value = info.getAttribute('value');
        if(value != latest) {
          info.parentNode.removeChild(info);
        }
      }
    processInfo.style['height'] = infos[infos.length-1].scrollHeight + 'px';
    
    requestsPanel.style.height = processInfo.style['height'];
    currentHeight = infos[infos.length-1].scrollHeight;
}
var currentHeight = 0;
function expandSection(element, className, height, latestBlock, value) {
  currentHeight += height;
  requestsPanel.style.height = currentHeight + "px";
  
  let blocks = processInfo.querySelectorAll('.block');
  blocks.forEach(block=>{
    if(block.getAttribute('value') != value) {
      let currentBottom = block.style.bottom.replace('px', '')*1;
      
      block.style.bottom = (latestBlock?currentBottom:currentBottom+6) + height + 'px';
    }
  })


  element.style['height'] = currentHeight>150?150:currentHeight + 'px';

  element.scrollTop = currentHeight;
  element.style['overflow-y'] = 'hidden';

  if(blocks[0]){
    blocks[0].addEventListener('transitionend', function cb(e) {
      blocks[0].removeEventListener('transitionend', cb);

      const req = element.querySelector('.' + className);
      if(req) {
        req.classList.remove("transparent");
        if(req.parentElement.classList.contains("blueb")) 
          req.parentElement.classList.add("blue");
      }
    });
  }
}

const info = document.querySelector("#info");
const infoResize = document.querySelector(".resizeicon");
const resizeText = document.querySelector("#resizetext");
const infoContent = document.querySelector("#content");

function resizeOnClick(e){
  e.stopPropagation();
  if(info.classList.contains("collapsed")){
    info.classList.remove("collapsed");
    info.classList.add("expanded");
    infoResize.classList.remove("expand");
    infoResize.classList.add("collapse");
  } else {
    if(this.id == "info") return;
    info.classList.remove("expanded");
    info.classList.add("collapsed");
    infoResize.classList.remove("collapse");
    infoResize.classList.add("expand");
  }
  resizeText.classList.toggle("hidden");
  infoContent.classList.toggle("hidden");
  
}
info.addEventListener("pointerup", resizeOnClick);
infoResize.addEventListener("pointerup", resizeOnClick);

main(0, 0, 2);


