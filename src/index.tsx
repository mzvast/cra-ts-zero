/**
 * @file [index]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 16:54:08
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/rem';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {StyleSheetManager, ThemeProvider} from 'galaco';
import ThemeLoader from './theme/ThemeLoader';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/GlobalStyle';
import getPx2vw from 'utils/getPx2vw';

const theme = ThemeLoader.getThemeConfig('green');
const cssPlugin = [getPx2vw(1280)];
const render = (Component) => {
    ReactDOM.render(
        <StyleSheetManager stylisPlugins={cssPlugin}>
            <>
                <GlobalStyle />
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Component />
                    </ThemeProvider>
                </Provider>
            </>
        </StyleSheetManager>,
        document.getElementById('root')
    );
};

render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
