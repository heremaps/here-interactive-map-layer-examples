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

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const rollupConfig = [{
    input: 'js/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'open-layers'
    },
    plugins: [
        resolve(),
        commonjs(),
        postcss(),
        copy({
            targets: [
                {src: 'index.html', dest: 'dist/'},
                {src: 'css/*.css', dest: 'dist/'},
                {src: '*.png', dest: 'dist/'}
            ]
        })
    ],
    onwarn: function(warning) {
        // should intercept ... but doesn't in some rollup versions
        if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    
        // console.warn everything else
        console.warn( warning.message );
    }
}];

export default rollupConfig;
