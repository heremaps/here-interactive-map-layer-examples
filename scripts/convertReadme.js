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

const fs = require('fs');
const MarkdownIt = require('markdown-it');

try {
  const data = fs.readFileSync('./dist/README.md', 'utf8')

  md = new MarkdownIt();
  var result = md.render(data);

  fs.writeFileSync('./dist/index.html', '<html><body>'+ result +'</body></html>');
} catch (err) {
  console.error(err)
}
