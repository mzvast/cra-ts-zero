/**
 * @file [index]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 17:13:24
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */

import {init} from '@rematch/core';
import * as models from './models';
declare const window: any;
export default init({
    models,
    redux: {
        reducers: {},
        devtoolOptions:
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    }
});
