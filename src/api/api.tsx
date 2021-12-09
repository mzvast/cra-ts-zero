/**
 * @file [Api]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-01-26 13:13:39
 */

import {get} from 'utils/request';

import requestUrl from './requestUrl';

export default {
    getABC() {
        const url = requestUrl.getABC;
        return get(url);
    }
};
