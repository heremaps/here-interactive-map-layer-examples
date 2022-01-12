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
        title: "<h3>Clustering with HERE Interactive Map Layers</h3>",
        text:
            "<p>Interactive Map Layers offer the capability to retrieve statistical information for the data stored in the layer. This could include information about the values of a property or simply the count of features in the cluster. Interactive Map Layer supports hexagonal and square grid clustering.</p>"+
            "<p>The example shows how Interactive Map Layer is used to demonstrate the density of supermarket coverage in the UK. The supermarket retail points are stored in an Interactive Map Layer. The layer is then queried to retrieve the individual points, the density of all supermarkets, and the density of each supermarket chain.</p>"+
            "<p>To represent the density, the supermarket data is requested as hexagonal and square grid clusters from the Interactive Map Layer. The returned features represent the cluster cells and include the count of the features inside. The map client displays the cells in a color that represents the density of the supermarkets in it. Brighter cells indicate a bigger number of supermarkets and respectively higher density.</p>",
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
                    localStorage.setItem('guided-tour-ol', 'yes');
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
      title: "Filter by supermarket retail chain.",
      text: "The name of the chain is stored as a property in each feature. Interactive Map Layer offers the capability to query selected features using property search. The property search could be combined with spatial and clustering requests.",
      cancelIcon: {
          enabled: true
      },
      attachTo: {
        element: '#retails',
        on: 'auto'
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
      title: "Show the original supermarket retail points stored in the layer.",
      attachTo: {
        element: '#retails-layer',
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
      title: "Legend with statistical information about the retrieved data.",
      attachTo: {
        element: '#quantiles',
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
      title: "Interactive Map Layer will automatically select a suitable resolution of the clustering grid based on the current zoom level.",
      text: "Set the parameter <i>relativeResolution</i> for the clustering request to increase or decrease the automatically selected resolution.",
      attachTo: {
        element: '#slider',
        on: 'auto'
      },
      cancelIcon: {
          enabled: true
      },
      classes: "last-step",
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
        title: "Select the grid type for the clustering algorithm.",
        attachTo: {
          element: '#clustering-switch',
          on: 'auto'
        },
        cancelIcon: {
            enabled: true
        },
        classes: "last-step",
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
    if(!localStorage.getItem('guided-tour-ol')) {
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