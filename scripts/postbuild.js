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

const fs = require('fs-extra')

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
const fileObjs = fs.readdirSync('examples', {withFileTypes: true});
fileObjs.forEach(file => {
  fs.copySync('examples/' + file.name + '/dist', 'dist/examples/' + file.name);
})


fs.writeFileSync('dist/README.md',
    fs.readFileSync('./README.md', 'utf8')
    .replace(/https:\/\/heremaps.github.io\/here-interactive-map-layer-examples\//g, '')
    .replace(/\[Source Code\]\(examples\//g, '[Source Code](https://github.com/heremaps/here-interactive-map-layer-examples/blob/main/examples/')
);
