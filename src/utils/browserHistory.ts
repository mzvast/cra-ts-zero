import {createBrowserHistory} from 'history';

import pathConfig from 'config/pathConfig';

const b = createBrowserHistory<any>({basename: pathConfig.BASENAME});
export const browserHistory = {
    ...b,
    push: (path, ...args) => {
        console.log('browserHistory::push', path);
        return b.push(path, ...args);
    }
};
