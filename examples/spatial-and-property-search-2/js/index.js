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
import {MVTLayer, TileLayer, LocalProvider, IMLProvider} from '@here/xyz-maps-core';
import {Map} from '@here/xyz-maps-display';
import mapStyle from "./style.js";
import tour from "./tour.js";
import {buffer, multiPoint, point} from "@turf/turf";
import apiKey from '.credentials.js';

var stationBuffer;
var searchGeometry;
var selectedLines = [];
var selectedStations = [];

var sportFacilityStyle = {
  styleGroups: {
    Skategrey: [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    Tennisgrey: [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    Basketbalgrey: [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    Voetbalgrey: [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    "Jeu de boulesgrey": [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    "Fitness \/ Bootcampgrey": [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    "Tafeltennisgrey": [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    "Beachvolleygrey": [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
    "Overiggrey": [
      {zIndex: 0, type: 'Circle', stroke: 'grey', fill: 'grey', opacity: 0.8, radius: 4}
    ],
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
    if(feature.properties.grey) return feature.properties.Sportvoorziening + 'grey';
    else return feature.properties.Sportvoorziening;
  }
};

function main(lat, lon, zoom) {

  var sport = "Skate";
  var searchRadius = 500;


  var sportFacilitiesBaseLayer = new TileLayer({
    min: 2,
    max: 20,
    name: 'sportFacilitiesBaseLayer',
    provider: new IMLProvider({
      name: 'playground-provider',
      level: 10,
      layer: 'public-playground',
      catalog: 'hrn:here:data::olp-here:dh-showcase-amsterdam-areas',
      credentials: {apiKey},
      preProcessor: (input) => {
        var features = input.data;
        for (var i = 0; i < features.length; i++) {
          features[i].properties.grey = searchGeometry ? true : false;
        }
        return features;
    }
    }),
    style: sportFacilityStyle
  });
  var sportFacilitiesLayer;
  var radiusLayer;
  var tramMetroLayer;
  var stationsLayer;
  
  let id = generateRequestId();
  let value = (new Date).getTime();
  appendInfo(`<div class='instruct ${id}' value='${value}'>- API Request: Filter for property 'Sportvoorziening' equals to <b>${sport}</b> in Sport Facility Layer in Tile:</div>`, id, value);
  id = generateRequestId();
  appendInfo(`<div class="request ${id}" value='${value}'>&nbsp;&nbsp;&nbsp;<i>GET /tile/quadkey'{QUADKEY}'?p.Sportvoorziening=${sport}</i></div>`, id, value);


  sportFacilitiesBaseLayer.getProvider().setPropertySearch('p.Sportvoorziening', '=', sport);

  // setup the Map Display
  window.display = new Map(document.getElementById('map'), {
      zoomLevel: 12,
      center: {longitude: lon, latitude: lat},
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
          tramMetroLayer = new TileLayer({
            min: 2,
            max: 20,
            name: 'tramMetroLayer',
            provider: new IMLProvider({
              name: 'trammetro-provider',
              level: 10,
              layer: 'tram_metro_updated',
              catalog: 'hrn:here:data::olp-here:dh-showcase-amsterdam-areas',
              credentials: {apiKey}
            }),
            style: {
              styleGroups: {
                "Metro": [
                  {zIndex: 0, zLayer: 2, type: "Line", opacity: 1, stroke: "#0052FF", strokeWidth: 3}
                ], 
                "Tram": [
                  {zIndex: 0, zLayer: 3, type: "Line", opacity: 1, stroke: "#FF0000", strokeWidth: 2}
                ]
              },
              assign: function(feature, zoomlevel){
                if(feature.properties.Lijn != '_')
                  return feature.properties.Modaliteit;
              }
             }
          }),
          stationsLayer = new TileLayer({
            min: 2,
            max: 20,
            name: 'stationsLayer',
            provider: new IMLProvider({
              name: 'trammetro-provider',
              level: 10,
              layer: 'tram_metro_stations_updated',
              catalog: 'hrn:here:data::olp-here:dh-showcase-amsterdam-areas',
              credentials: {apiKey}
            }),
            style: {
              styleGroups: {
                "Metro": [
                  {zIndex: 0, zLayer: 2,  type: "Circle", opacity: 1, fill: "#0052FF", radius: 6}
                ], 
                "Tram": [
                  {zIndex: 0, zLayer: 3, type: "Circle", opacity: 1, fill: "#FF0000", radius: 4}
                ]
              },
              assign: function(feature, zoomlevel){
                if(feature.properties.Lijn != '_'){
                  return feature.properties.Modaliteit;
                }
              }
             }
          }),
          sportFacilitiesBaseLayer,
          sportFacilitiesLayer = new TileLayer({
              min: 2,
              max: 20,
              name: 'sportFacilitiesLayer',
              provider: new LocalProvider({
                name: 'sport-provider'
              }),
              style: sportFacilityStyle
          }),
          radiusLayer = new TileLayer({
            min: 2,
            max: 20,
            name: 'radiusLayer',
            provider: new LocalProvider({
              name: 'radius-provider'
            }),
            style: {
                styleGroups: {
                  radius: [
                    {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#BFBFBF'},
                    {zIndex: 6, type: 'Polygon', opacity: 0.7, strokeWidth: 1, stroke: '#000'}
                  ],
                },
                assign: function (feature, level) {
                    return 'radius';
                }
            }
          })
      ]
  });


  display.addEventListener('pointerenter', function(e){
    if(e.target && e.target.properties.Modaliteit){
      document.body.style.cursor = "pointer";
    }
  })
  display.addEventListener('pointerleave', function(e){
    document.body.style.cursor = "default";
  })
  

  display.addEventListener('pointerup', async function(e){
    clearSelection();

    if(e.target && e.target.properties.Modaliteit){
      let value = (new Date).getTime();
      searchGeometry = [];

      if(e.target.geometry.type == "LineString") {
        const {Line, Lijn, Modaliteit} = e.target.properties;

        await selectLines(Line, Modaliteit, value);


        if(Modaliteit == "Tram") {
          trams.forEach(s=>{
            if(Line.indexOf(s.getAttribute('value')) >= 0)
              s.selected = true;
          });
        } else {
          metro.forEach(s=>{
            if(Line.indexOf(s.getAttribute('value')) >= 0)
              s.selected = true;
          });
        }

        indiTrams.innerHTML = Modaliteit == "Tram" ? Lijn : '--';
        indiMetro.innerHTML = Modaliteit != "Tram" ? Lijn : '--';
      } else {
        selectedStations = [e.target];
        stationsLayer.setStyleGroup(selectedStations[0], [
          {zIndex: 1, zLayer: 3,  type: "Circle", opacity: 1, fill: "#000", radius: e.target.properties.Modaliteit=="Tram"?4:6}
        ]);

        searchGeometry = point(e.target.geometry.coordinates);
        indiLine.innerHTML = "station";
        indiTrams.innerHTML = '--';
        indiMetro.innerHTML = '--';

        let id = generateRequestId();
        appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- Construct Point with clicked station</div>`, id, value);
      }

      showSelections(value);

    } else {
      const sfs = sportFacilitiesBaseLayer.getProvider().all();
      sfs.forEach((f)=>{
        f.properties.grey = false;
        sportFacilitiesBaseLayer.setStyleGroup(f);
      })

      // processInfo.innerHTML = "";
      // processInfo.style.transform = null;
      // processInfo.style['max-height'] = 0;
      clearInfo();
    }
  })

  function clearSelection(skipMultiSelectionTrams, skipMultiSelectionMetro){
    if(!skipMultiSelectionTrams) {
      trams.forEach(s=>{s.selected = false});
    }
    if(!skipMultiSelectionMetro){
      metro.forEach(s=>{s.selected = false});
    }
    indiTrams.innerHTML = '--';
    indiMetro.innerHTML = '--';

    if(stationBuffer) {
      radiusLayer.removeFeature(stationBuffer);
      stationBuffer = null;
    }
    searchGeometry = null;

    
    if(selectedLines.length) {
      selectedLines.forEach(l=>{
        tramMetroLayer.setStyleGroup(l);
      });
      selectedLines = [];
    }
    if(selectedStations.length) {
      selectedStations.forEach(s=>{
        stationsLayer.setStyleGroup(s);
      });
      selectedStations = [];
    }
  }

  function showSelections(value){
    stationBuffer = buffer(searchGeometry, searchRadius/1000);

    radiusLayer.addFeature(stationBuffer);

    const sfs = sportFacilitiesBaseLayer.getProvider().all();
    sfs.forEach((f)=>{
      f.properties.grey = true;
      sportFacilitiesBaseLayer.setStyleGroup(f);
    });
    

    getSportFacilities(sport, sportFacilitiesLayer, searchRadius, value);
  }
  
  async function selectLines(lines, lineType, value) {
    let id = generateRequestId();
    
    appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Property search for 'Line' contains: <b>${lines}</b> in Line Layer:</div>`, id, value);
    
    var lineids = [];
    lines.forEach((l, id)=>{
      lineids[id] = generateRequestId();
      appendInfo(`<div class="request ${lineids[id]} transparent" value='${value}'>&nbsp;&nbsp;&nbsp;<i>GET /search?p.Line@>'${l}'</i></div>`, lineids[id], value);
    })
    
    getLines(lines).then(res=>{
      res.forEach(fs=>{
        fs.features.forEach(f=>{
          let p = tramMetroLayer.getProvider().getFeature(f.id);
          selectedLines.push(p);
          tramMetroLayer.setStyleGroup(p, [
            {zIndex: 10, zLayer: 3, type: "Line", opacity: 1, stroke: "#000", strokeWidth: lineType=="Tram"?2:3}
          ]);
        })
      })

      updateInfo(lineids);

    });

    var stationids = [];
    id = generateRequestId();
    appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Property search for 'Line' contains: <b>${lines}</b> in Station Layer:</div>`, id, value);
    lines.forEach((l, id)=>{
      stationids[id] = generateRequestId();
      appendInfo(`<div class="request ${stationids[id]} transparent" value='${value}'>&nbsp;&nbsp;&nbsp;<i>GET /search?p.Line@>'${l}'</i></div>`, stationids[id], value);
    })

    const res = await getStations(lines);
    res.forEach(fs=>{
      fs.features.forEach(f=>{
        let p = stationsLayer.getProvider().getFeature(f.id);

        searchGeometry.push(p.geometry.coordinates);
        selectedStations.push(p);
        stationsLayer.setStyleGroup(p, [
          {zIndex: 10, zLayer: 3,  type: "Circle", opacity: 1, fill: "#000", radius: lineType=="Tram"?4:6}
        ]);
      })
    })
    
    searchGeometry = multiPoint(searchGeometry);

    indiLine.innerHTML = "lines";


    updateInfo(stationids);
    id = generateRequestId();
    appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- Construct Multipoint with all stations</div>`, id, value);
  }
  // getSportFacilities(sport, sportFacilitiesLayer);

  const sports = document.querySelectorAll("#overlay-sport input");  
  const trams = document.querySelectorAll("#trams option");  
  const metro = document.querySelectorAll("#metro option");  
  const radius = document.querySelector("#overlay-radius input");
  const indiSport = document.querySelectorAll("#overlay-radius span b")[0];
  const indiLine = document.querySelectorAll("#overlay-radius span b")[1];
  const indiRadius = document.querySelectorAll("#overlay-radius span")[3];
  const indiTrams = document.querySelector("#trams-lines span");
  const indiMetro = document.querySelector("#metro-lines span");

  sports.forEach(s=>{
    s.onclick=(e)=>{
      sport = e.target.value;
      indiSport.innerHTML = sport;

      sportFacilitiesLayer.getProvider().clear();

      let id = generateRequestId();
      let value = (new Date).getTime();
      appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Filter for property 'Sportvoorziening' equals to <b>${sport}</b> in Sport Facility Layer in Tile:</div>`, id, value);
      id = generateRequestId();
      appendInfo(`<div class="request transparent ${id}" value='${value}'>&nbsp;&nbsp;&nbsp;<i>GET /tile/quadkey'{QUADKEY}'?p.Sportvoorziening=${sport}</i></div>`, id, value);


      if(searchGeometry)
        getSportFacilities(sport, sportFacilitiesLayer, searchRadius, value);
      sportFacilitiesBaseLayer.getProvider().setPropertySearch('p.Sportvoorziening', '=', sport);
    }
  })
  metro.forEach(s=>{
    s.onclick=async (e)=>{
      var line = e.target.value;

      clearSelection(false, true)
      searchGeometry = [];
      let value = (new Date()).getTime();
      await selectLines([line], 'Metro', value);
      showSelections(value);

      indiTrams.innerHTML = '--';
      indiMetro.innerHTML = line;
    }
  })
  trams.forEach(s=>{
    s.onclick=async (e)=>{
      var line = e.target.value;

      clearSelection(true, false)
      searchGeometry = [];
      let value = (new Date()).getTime();
      await selectLines([line], 'Tram', value);
      showSelections(value);

      indiTrams.innerHTML = line;
      indiMetro.innerHTML = '--';
    }
  })
  radius.addEventListener('input', function(e) {
    // Value indicator
    const range = e.target.value;
    searchRadius = range;
    indiRadius.innerHTML = ` <b>${range}</b> meters`;
  });
  radius.addEventListener('pointerup', async function(e) {
    if(searchGeometry) {

      stationBuffer = buffer(searchGeometry, searchRadius/1000);

      radiusLayer.getProvider().clear();
      radiusLayer.addFeature(stationBuffer);

      getSportFacilities(sport, sportFacilitiesLayer, searchRadius, (new Date()).getTime());
    }
  });

  window.onresize = ()=>{
    display.resize();
  }


  tour();
}

const lineUrl = (line) => `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-amsterdam-areas/layers/tram_metro_updated/search?apiKey=${apiKey}&p.Line=cs=${"\'"+line+"\'"}`;

var lineController;
function getLines(lines){
  if (lineController) {
    lineController.abort();
  }
  lineController = new AbortController();
  const { signal } = lineController;

  var opts = {
    method: 'GET',
    headers: {
       'Content-Type': 'application/geo+json'
    },
    signal: signal
  };
  var reqs = [];
  lines.forEach(line=>{
    reqs.push(fetch(lineUrl(line), opts));
  })

  return Promise.all(reqs)
    .then(res => {
      return Promise.all(res.map(r=>r.json()))
    })
}

const stationsUrl = (line) => `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-amsterdam-areas/layers/tram_metro_stations_updated/search?apiKey=${apiKey}&p.Line=cs=${"\'"+line+"\'"}`;

var stationsController;
async function getStations(lines){
  if (stationsController) {
    stationsController.abort();
  }
  stationsController = new AbortController();
  const { signal } = stationsController;

  var opts = {
    method: 'GET',
    headers: {
       'Content-Type': 'application/geo+json'
    },
    signal: signal
  };
  var reqs = [];
  lines.forEach(line=>{
    reqs.push(fetch(stationsUrl(line), opts));
  })

  return Promise.all(reqs)
    .then(res => {
      return Promise.all(res.map(r=>r.json()))
    })
}

//492 fitness
const sportUrl = (searchGeometry, sport, radius) => `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-amsterdam-areas/layers/public-playground/${searchGeometry?'spatial':'search'}?apiKey=${apiKey}${sport?'&p.Sportvoorziening='+sport:''}${radius?'&radius='+radius:''}`;

const processInfo = document.querySelector("#request-info");
const requestsPanel = document.querySelector("#requests");

var sportController;
function getSportFacilities(sport, sportFacilitiesLayer, radius, value){
  if (sportController) {
    sportController.abort();
  }
  sportController = new AbortController();
  const { signal } = sportController;
  
  let id = generateRequestId();
  appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Spatial search for property 'Sportvoorziening' equals to <b>${sport}</b> in Sport Facility Layer:</div>`, id, value);
  const requestInfoId = generateRequestId();
  appendInfo(`<div class="request ${requestInfoId} transparent" value='${value}'>&nbsp;&nbsp;&nbsp;<i>POST /spatial?p.Sportvoorziening=${sport}&radius=${radius} -- Payload: ${searchGeometry.geometry.type}</i></div>`, requestInfoId, value);


  var opts = searchGeometry ? {
    method: 'POST',
    headers: {
       'Content-Type': 'application/geo+json'
    },
    body: JSON.stringify(searchGeometry.geometry),
    signal: signal
  } : { signal };

  fetch(sportUrl(searchGeometry, sport, radius), opts)
    .then(res => res.json())
    .then(res => {
      sportFacilitiesLayer.getProvider().clear();
      sportFacilitiesLayer.addFeature(res);

      updateInfo([requestInfoId]);
    })
}

function generateRequestId(){
  return 'request-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
}
var blockCount=0;
function appendInfo(info, className, value) {
  var height = 19;
  if(info.indexOf("GET")>0 || info.indexOf("POST")>0)
    height = 13;
  const block = processInfo.querySelector('.block-' + value);
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


main(52.348604, 4.897757, 2);
