/**
 * @file [index]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 16:54:08
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'utils/rem';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {ThemeProvider} from 'galaco';
import ThemeLoader from './theme/ThemeLoader';
import reportWebVitals from './reportWebVitals';

const theme = ThemeLoader.getThemeConfig('green');
const render = (Component) => {
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

// if (module.hot) {
//     module.hot.accept('./App', () => {
//         render(App);
//     });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
