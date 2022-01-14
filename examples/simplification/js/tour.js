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

import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import '../css/index.css'

function tour(map) {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        cancelIcon: {
          enabled: true
        },
        exitOnEsc: true,
        classes: 'shepherd-theme-custom'
    });
    
    const infoIcons = document.querySelectorAll(".infoicon");
    infoIcons.forEach(function(e){
      e.addEventListener('pointerup', function(i){
        const value = this.getAttribute("value");
        tour.start();
        tour.show(value*1, true)
      })
    })

    tour.addStep({
      title: "<h3>Geometry simplification with interactive map layers</h3>",
      text: "<p>Map features stored in interactive map layers can be retrieved as tiles. interactive map layers offer the ability to simplify the geometry of the features in the tiles by simply including the parameter <i>mode=viz</i>. This can be useful for reducing the amount of data that needs to be transferred to the client and helps the client to render the data faster.</p>"+
        "<p>In this example two very long routes, containing <b>31,600</b> and <b>22,408</b> coordinates respectively, were created using the HERE Routing API. The tiles returned by Interactive API, contain a simplified version of the route geometry optimized for the zoom level of the map. There is no visual difference between the original and the simplified geometry at the requested zoom level. However, the simplified geometry contains a significantly reduced number of coordinates.</p>",
      // attachTo: {
      //   element: ''
      //   on: 'auto'
      // },
      arrow: true,
      classes: "first-step",
      cancelIcon: {
          enabled: true
      },
      buttons: [
          {
              action() {
                  localStorage.setItem('guided-tour-simplification', 'yes');
                  return this.cancel();
              },
              text: 'Don\'t show again'
          },
          {
              action() {
              return this.next();
              },
              text: 'Next'
          }
      ]
    });
    
    tour.addStep({
      title: `Click to show one of the precalculated routes stored in an interactive map layer.`,
      attachTo: {
        element: '#firstpart',
        on: 'auto'

      },
      cancelIcon: {
          enabled: true
      },
      arrow: true,
      buttons: [
        {
          action() {
            return this.back();
          },
          text: 'Back'
        },
        {
          action() {
            // map.flyTo({lat: 30.305305123909204, lng: -89.73973651198324}, 16, {
            //   animate: true,
            //   duration: 1 // in seconds
            // })
            return this.next();
          },
          text: 'Next'
        }
      ]
    });
    
    tour.addStep({
      title: "Shows the route geometry simplification information at the current zoom level.",
      text:  "Interactive map layers simplify the geometry of the route optimized for the requested zoom level. There is no visual difference between the original and the simplified geometry at the requested zoom level. However, the simplified geometry contains a significantly reduced number of coordinates.",
      attachTo: {
        element: '#secondpart',
        on: 'right'
      },
      cancelIcon: {
          enabled: true
      },
      arrow: true,
      buttons: [
        {
          action() {
            return this.back();
          },
          text: 'Back'
        },
        {
          action() {
            map.flyTo({lat: 50.92473637543149, lng: 6.845631054311526}, 16, {
              animate: true,
              duration: 1 // in seconds
            })
            return this.next();
          },
          text: 'Next'
        }
      ]
    });

    tour.addStep({
      title: "The detailed route geometry is returned at high zoom levels.",
      attachTo: {
        element: '#anchorpoint',
        on: 'right'
      },
      cancelIcon: {
          enabled: true
      },
      arrow: true,
      buttons: [
        {
          action() {
            map.flyTo({lat:53.505146, lon: 18.8472487}, 4, {
              animate: true,
              duration: 1 // in seconds
            });
            return this.back();
          },
          text: 'Back'
        },
        {
          action() {
            map.flyTo({lat:53.505146, lon: 18.8472487}, 4, {
              animate: true,
              duration: 1 // in seconds
            });
            return this.next();
          },
          text: 'Done'
        }
      ]
    });

    // Initiate the tour
    if(!localStorage.getItem('guided-tour-simplification')) {
      tour.start();
      // localStorage.setItem('guided-tour', 'yes');
    }

    document.addEventListener("keydown", event => {
      if (event.key === 'g') {
        tour.cancel();
        tour.start();
      }
    });
}

export default tour;