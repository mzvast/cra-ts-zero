/* eslint-disable react/jsx-no-bind */
/**
 * @file [PrivateRouteDev]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-03-13 16:40:17
 */

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Config from 'config';
import AuthGuard from 'api/AuthGuard';
// import FallbackErrorPage from '../routes/error-page/FallbackErrorPage';
// https://tylermcginnis.com/react-router-protected-routes-authentication/
const PrivateRoute = ({component: Component, ...rest}) => {
    // if (!window.navigator.onLine) {
    //     return <FallbackErrorPage />;
    // }
    return (
        <Route
            {...rest}
            render={(props: any) =>
                AuthGuard.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: Config.path.root,
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
};
export default PrivateRoute;
