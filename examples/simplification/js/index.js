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
import tour from "./tour.js";
import L from "leaflet"
import Tangram from "tangram"

import 'leaflet/dist/leaflet.css'
import '../css/speedometer.css'
import apikey from '.credentials.js';

function main(lat, lon, zoom) {
    const tangrammvt = Tangram.leafletLayer({
        scene: {
            import: 'scene.yaml',
            global: { APIKey: apikey }
        }
    });

    window.mapmvt = L.map('mapmvt', {
        center: [53.505146, 18.8472487],
        zoom: 6,
        layers: [tangrammvt],
        zoomControl: false,
        maxZoom: 18
    });

    tangrammvt.addTo(mapmvt);

    mapmvt.attributionControl.addAttribution('<a href="https://github.com/tangrams/tangram">Tangram</a> | <a href="https://here.com">HERE</a>');
    mapmvt.setView({lat, lon}, zoom);

    var points = [{
        "type": "Point",
        "coordinates": [-95.364078, 29.762047]
    }, {
        "type": "Point",
        "coordinates": [-77.03364, 38.89871]
    }, {
        "type": "Point",
        "coordinates": [2.350231, 48.858493]
    }, {
        "type": "Point",
        "coordinates": [37.623837, 55.752623]
    }];

    L.geoJSON(points, {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 6,
				fillColor: "#ff7800",
				color: "#000",
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			});
		}
    }).addTo(mapmvt);


    mapmvt.on('zoom',function(e){
        var currZoom = mapmvt.getZoom();
        setScaleValue(currZoom);
    })

    const routinga = document.querySelector('#routa');
    const routingb = document.querySelector('#routb');
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const adescp = document.querySelectorAll('#a b');
    const bdescp = document.querySelectorAll('#b b');
    const pointsCounts = document.querySelectorAll('.pointscnt');
    const scalezlevel = document.querySelectorAll('.zlevel');
    const graduations = document.querySelectorAll('.graduation');
    const scales = document.querySelectorAll('.scale');
    const scaleIdx = document.querySelector("#index");
    const indicator = document.querySelector(".indicator");
    const info1 = document.querySelector(".info1");
    const info2 = document.querySelector(".info2");
    const info3 = document.querySelector(".info3");
    
    const hw = {lat: 34.9627714503939, lon: -85.89217208325863};
    const pm = {lat: 53.380462781774725, lon: 20.643368152374855};
    const pointnumbers = {
        "hw": [350, 701, 1394, 2704, 5112, 9087, 14301, 18988, 21346, 22206, 22408],
        "pm": [581, 1165, 2292, 4361, 7967, 13637, 20754, 26856, 30230, 31396, 31600]
    };
    const simplificationRate = {
        "hw": [1, 3, 6, 12, 22, 40, 63, 84, 95, 99, 100],
        "pm": [1, 3, 7, 13, 25, 43, 65, 84, 95, 99, 100]
    };
    routinga.addEventListener('click', function(){
        mapmvt.flyTo(hw, 6);
        a.classList.remove("hidden");
        b.classList.add("hidden");

        setScale("hw");
    })

    routingb.addEventListener('click', function(){
        mapmvt.flyTo(pm, 5);
        b.classList.remove("hidden");
        a.classList.add("hidden");

        setScale("pm");
    })

    function setScale(route){
        pointsCounts.forEach((pc, idx)=>{
            pc.innerHTML = /*"─ "*/ "- " + pointnumbers[route][idx] /*+ (idx%2==0 ? " ("+Math.floor((pointnumbers[route][idx]/pointnumbers[route][10])*100) + "%)&nbsp;" : "&nbsp;")*/;
        })
        scales.forEach((s, idx)=>{
            s.innerHTML = simplificationRate[route][idx];
        })
    }
    
    setScale("hw");

    var crtzl = 0
    function setScaleValue(zoomlevel){
        var pn = a.classList.contains("hidden") ? 'pm' : 'hw';
        let effectivez = Math.max(1, Math.min(zoomlevel,11));
        scalezlevel[crtzl].style['font-weight'] = 400;
        pointsCounts[crtzl].style['font-weight'] = 400;
        scales[crtzl].style['font-weight'] = 400;
        graduations[10-crtzl].style['background'] = "#6d6178";
        crtzl = Math.floor(effectivez)-1;
  
        scalezlevel[crtzl].style['font-weight'] = 600;
        pointsCounts[crtzl].style['font-weight'] = 600;
        scales[crtzl].style['font-weight'] = 600;
        graduations[10-crtzl].style['background'] = "#ef5100";

        adescp[1].innerHTML = pointnumbers[pn][Math.floor(effectivez)-1];
        adescp[2].innerHTML = Math.floor(Math.max(1, zoomlevel)*10)/10;

        bdescp[1].innerHTML = pointnumbers[pn][Math.floor(effectivez)-1];
        bdescp[2].innerHTML = Math.floor(Math.max(1, zoomlevel)*10)/10;

        // let z = Math.round(198 - (effectivez-1)*19);
        // scaleIdx.innerHTML = 
        // '<line x1="0" y1="9.5" x2="208" y2="9.5" style="stroke:#6d6178;stroke-width:2;" shape-rendering="crispEdges"></line>'+
        // '<line x1="0" y1="9.5" x2="'+z+'" y2="9.5" style="stroke:#ef2110;stroke-width:6" shape-rendering="crispEdges"></line>';

        const position = -22.5 + ((11-effectivez)/10) * 225;
        indicator.style.transform = "rotate(" + position + "deg)";
        info1.innerHTML = Math.floor((pointnumbers[pn][crtzl]/pointnumbers[pn][10])*100) + "%";
        info2.innerHTML = "Zoomlevel: " + Math.floor(Math.max(1, zoomlevel)*10)/10;
        info3.innerHTML = "Geometry size: " + pointnumbers[pn][crtzl] + " of " + pointnumbers[pn][10];
    }

    setScaleValue(4);

    tour(mapmvt);
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

main(53.505146, 18.8472487, 4);
