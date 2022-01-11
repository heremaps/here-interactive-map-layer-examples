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
const mapStyle = {
  backgroundColor: '#e8e5d8',

  styleGroups: {
      'landuse': [{zIndex: 0, type: 'Polygon', fill: '#eae0d0'}],
      'pier': [{zIndex: 1, type: 'Polygon', fill: '#e8e5d8', stroke: '#e8e5d8', strokeWidth: 2}],
      'park': [{zIndex: 1, type: 'Polygon', fill: '#D3DCC0'}],
      'nature_reserve': [{zIndex: 1, type: 'Polygon', fill: '#c0d897'}],
      'hospital': [{zIndex: 1, type: 'Polygon', fill: '#f3d3d3'}],
      'water': [{zIndex: 2, type: 'Polygon', fill: '#94c1e1'}],
      'path': [{zIndex: 3, type: 'Line', stroke: 'rgb(247, 247, 247)', strokeWidth: {4: 0.5, 20: '1m'}, strokeDasharray: [1, 1]}],
      'tunnel': [{zIndex: 3, type: 'Line', stroke: 'rgba(255, 255, 255, 0.7)', strokeWidth: {15: 4, 20: 16}, strokeDasharray: [2, 2]}],
      'ferry': [{zIndex: 4, type: 'Line', stroke: '#164ac8', strokeWidth: 1}],
      'highway': [{zIndex: 5, type: 'Line', stroke: '#ffffff', repeat: 128, strokeWidth: {10: 1.5, 15: 4, 16: '12m'}}],
      'boundaries': [{zIndex: 6, type: 'Line', stroke: 'rgb(153, 153, 153)', strokeWidth: {22: 1, 3: 0.5}}],
      'buildings': [{
          zIndex: 7, type: 'Polygon', fill: 'rgba(222, 211, 190, 1)'},
          {zIndex: 7, type: 'Polygon', stroke: {15: 'rgba(212, 177, 146, 0)', 16: 'rgba(212, 177, 146, 0.5)'}, strokeWidth: 1
      }],
      'roads': [{zIndex: 4, type: 'Line', stroke: 'rgb(247, 247, 247)', strokeWidth: {15: 1, 16: '5m'}}, {
          zIndex: 6, type: 'Text', fill: '#000000',
          font: '12px Noto Sans Regular',
          strokeWidth: 4,
          stroke: 'white', text: (f, z) => z>13?f.properties.name:'',
          // Minimum distance in pixel between repeated text labels on line geometries.
          // Applies per tile only. Default is 256 pixel.
          repeat: 128,
          // Alignment for Text. "map" aligns to the plane of the map.
          alignment: 'map',
          // Text with a higher priority (lower value) will be drawn before lower priorities (higher value)
          // make sure "road labels" are drawn after "place labels".
          priority: 2
      }],
      'places': [{
          zIndex: 8,
          type: 'Text',
          text: (f) => f.properties.name,
          stroke: 'rgba(255,255,255,0.75)',
          fill: '#666',
          font: '18px Noto Sans Regular',
          strokeWidth: 4,
          // set collide property to false to enable label collision detection [default]
          collide: false,
          // Alignment for Text. "viewport" aligns to the plane of the viewport/screen.
          alignment: 'viewport',
          // Text with a higher priority (lower value) will be drawn before lower priorities (higher value)
          // In case of "place label" and "road label" are colliding "place label" will be draw
          // because priority 1 is smaller than priority 2
          priority: 1
      }]
  },

  assign: (feature, zoom) => {
      let props = feature.properties;
      let kind = props.kind;
      let layer = props.layer;
      let geom = feature.geometry.type;

      if (layer == 'landuse') {
          switch (kind) {
          case 'pier':
              return 'pier';
          case 'nature_reserve':
              return 'nature_reserve';
          case 'park':
          case 'garden':
          case 'pedestrian':
          case 'forrest':
              return 'park';
          case 'hospital':
              return 'hospital';
          default:
              return 'landuse';
          }
      }

      if (layer == 'water') {
          if (geom == 'LineString' || geom == 'MultiLineString') {
              return;
          }
      } else if (layer == 'roads') {
          if (kind == 'rail' || kind == 'ferry') {
              return;
          }
          if (props.is_tunnel && zoom > 13) {
              return 'tunnel';
          }
          if (kind == 'highway' || kind == 'path') {
              return kind;
          }
      }

      return layer;
  }
};

export default mapStyle;