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
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        cancelIcon: {
          enabled: true
        },
        exitOnEsc: true,
        classes: 'shepherd-theme-custom'
    });

    tour.addStep({
      title: " <h3>HERE Interactive Map Layer: Spatial and Property Search</h3>",
      text: "<p>Features stored in Interactive Map Layers can be retrieved by spatial and/or property search queries. The spatial search query could be used to retrieve features that intersect a given point, line or area. This is provided to the API as a GeoJSON geometry. Additionally, a radius parameter defined in meters could be specified.</p>"
          + "<p>The property search query could be used to retrieve features that have a property value that matches a given value. It is possible to search for numeric ranges, to query multiple property values, and to combine the queries using logical operators. Property search can be combined with requests for tile, bounding box and spatial search.</p>"
          + "<p>This example includes a map to explore sport facilities in the city of Amsterdam. Amsterdam manages 26 sports parks, 19 sports centres, 10 swimming pools and over 100 smaller sports facilities in various neighbourhoods.</p>"
          + "<p>Property search is used to filter the features by the type of sport. The locations of the facilities are combined as a multipoint geometry. This geometry then used as an input for the spatial search query to find the administrative areas that contain the facilities of that type.</p>",
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
                  localStorage.setItem('guided-tour-sf', 'yes');
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
      title: "Select an administrative area level.",
      text:
          "<p>The administrative level is stored as a property in the feature. A spatial search request with the locations of the selected sport facilities is used as an input for the spatial search query.</p>"+
          "<p>This is combined with a property search to return only the administrative areas with the selected level.</p>",
      attachTo: {
        element: '#overlay-areas',
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
    if(!localStorage.getItem('guided-tour-sf')) {
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