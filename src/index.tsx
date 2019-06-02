/**
 * @file [index]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 16:54:08
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'utils/rem';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import {ThemeProvider} from '@baidu/rubik-ui';
import ThemeLoader from './theme/ThemeLoader';

const theme = ThemeLoader.getThemeConfig('green');
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Component />
            </ThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

if (module['hot']) {
    module['hot'].accept('./App', () => {
        render(App);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
