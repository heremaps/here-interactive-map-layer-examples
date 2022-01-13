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
    
    const infoIcons = document.querySelectorAll(".infoicon");
    infoIcons.forEach(function(e){
      e.addEventListener('pointerup', function(i){
        const value = this.getAttribute("value");
        tour.start();
        tour.show(value*1, true)
      })
    })

    tour.addStep({
      title: "<h3>Data Sampling with Interactive Map Layers</h3>",
      text:
          "<p>One of the features offered by Interactive Map Layers is data sampling. Data sampling enables clients to efficiently render an excerpt of a very large data set for visual reference and analysis, without the need to retrieve all the data.</p>"+
          "<p>This example includes a cadastral map to explore the trees in maintenance of the city of Amsterdam. Each of the <b>259,431</b> trees is stored as an individual map feature.</p>"+
          "<p>By including the parameter <i>mode=viz</i> the Interactive API is instructed to return the data optimized for visualization. On map zoom levels, where there are too many features, the tiles returned by Interactive API include only a sample with a geographically accurate representation of the data.</p>",
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
                  localStorage.setItem('guided-tour-vs', 'yes');
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
      title: `Filter by tree species.`,
      text: "The species of the tree is stored as a property in each feature. Interactive Map Layer offers the capability to query selected features using property search. The property search could be combined with spatial requests.",
      attachTo: {
        element: '#overlay-trees',
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
      title: "The visualization mode uses by default 'medium' sampling strength.",
      text: "It is possible to reduce or increase the sampling strength. This affects the number of features returned in each tile, if sampling was required.",
      attachTo: {
        element: '#switch',
        on: 'auto'
      },
      classes: "last-step",
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
    if(!localStorage.getItem('guided-tour-vs')) {
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