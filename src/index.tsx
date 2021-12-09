import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/rem';
import {Provider} from 'react-redux';
import {StyleSheetManager, ThemeProvider} from 'galaco';

import getPx2vw from 'utils/getPx2vw';

import App from './app/App';
import {store} from './store';
import ThemeLoader from './theme/ThemeLoader';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/GlobalStyle';

const theme = ThemeLoader.getThemeConfig('green');
const cssPlugin = [getPx2vw(1280)];
const render = Component => {
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
