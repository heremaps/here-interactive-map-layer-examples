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

function tour() {
    var a1 = display.geoToPixel({longitude: 4.829611, latitude: 52.349546});
    var ap1 = document.querySelector("#ancher-point1");
  
    ap1.style.top = Math.round(a1.y) + "px";
    ap1.style.left = Math.round(a1.x) + "px";
  
    var a2 = display.geoToPixel({longitude: 4.830122462492966, latitude: 52.34398990509996});
    var ap2 = document.querySelector("#ancher-point2");
  
    ap2.style.top = Math.round(a2.y) + "px";
    ap2.style.left = Math.round(a2.x) + "px";
  

    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        cancelIcon: {
          enabled: true
        },
        exitOnEsc: true,
        classes: 'shepherd-theme-custom'
    });

    tour.addStep({
        title: "<h3>HERE Interactive Map Layer: Spatial and Property Search</h3>",
        text: "<p>Features stored in Interactive Map Layers can be retrieved by spatial and/or property search queries. The spatial search query could be used to retrieve features that intersect a given point, line or area. This can be provided to the API as a GeoJSON geometry. Additionally, a radius parameter defined in meters could be specified.</p>\n"
  + "  <p>The property search query could be used to retrieve features that have a property value that matches a given value. It is possible to search for numeric ranges, to query multiple property values, and to combine the queries using logical operators. Property search can be combined with requests for tile, bounding box and spatial search.</p>\n"
  + "  <p>This example includes a map to explore sport facilities, public transport lines and stations in the city of Amsterdam. Amsterdam manages 26 sports parks, 19 sports centres, 10 swimming pools and over 100 smaller sports facilities in various neighbourhoods.</p>\n"
  + "  <p>Selecting a line or station on the map or in the menu on the left side, will construct a geometry of all stations along the line as a Multipoint. Alternatively, a single station can be selected. The Point or Multipoint geometry is used as an input for the spatial search to filter the facilitues within a radius. This is combined with property search to return only the features with the selected sport type.</p>",
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
                    localStorage.setItem('guided-tour-sfpt', 'yes');
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
        title: `Shows a list of the requests that are triggered by each user interaction.\
      For each request is displayed information about the search endpoint, the search parameter and the request payload for POST requests.`,
        attachTo: {
          element: '#request-info',
          on: 'auto'
        },
        classes: "requests-panel",
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
              return this.next();
            },
            text: 'Next'
          }
        ]
      });

    tour.addStep({
      title: `Select the type of sport facility.\
      The type of sport is stored as a property in each feature. Interactive Map Layer offers the capability to query selected features using property search. The property search could be combined with spatial requests.`,
      attachTo: {
        element: '#overlay-sport',
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
            return this.next();
          },
          text: 'Next'
        }
      ]
    });
    
    tour.addStep({
      title: `Select a tram line\. Search for sport facilities of the selected type that are reachable with this line using spatial search with a Polygon input.`,
      attachTo: {
        element: '#trams-lines',
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
            return this.next();
          },
          text: 'Next'
        }
      ]
    });
    
    tour.addStep({
        title: `Select a metro line\. Search for sport facilities of the selected type that are reachable with this line using spatial search with a Polygon input.`,
        attachTo: {
          element: '#metro-lines',
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
              return this.next();
            },
            text: 'Next'
          }
        ]
    });

    tour.addStep({
        title: `Set radius for the spatial search. Select a station or line to show search area and its result.`,
        attachTo: {
          element: '#overlay-radius',
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
              return this.next();
            },
            text: 'Next'
          }
        ]
    });

    tour.addStep({
        title: `You can click on point to search for sport facilities that are reachable from the station.`,
        attachTo: {
          element: '#ancher-point1',
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
              return this.next();
            },
            text: 'Next'
          }
        ]
    });

    tour.addStep({
        title: `Clicking on a line will trigger a query request to search for sport facilities reachable from stations of this line.`,
        attachTo: {
          element: '#ancher-point2',
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
              return this.next();
            },
            text: 'Done'
          }
        ]
    });

    // Initiate the tour
    if(!localStorage.getItem('guided-tour-sfpt')) {
      tour.start();
    //   localStorage.setItem('guided-tour', 'yes');
    }

    document.addEventListener("keydown", event => {
        if (event.key === 'g') {
          tour.cancel();
          tour.start();
        }
      });
}

export default tour;