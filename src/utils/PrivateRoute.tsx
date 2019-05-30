/**
 * @file [PrivateRouteDev]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-03-13 16:40:17
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Config from 'config';
import AuthGuard from 'api/AuthGuard';
// https://tylermcginnis.com/react-router-protected-routes-authentication/
const PrivateRoute = ({component: Component, ...rest}) => {
    if (!AuthGuard.isAuthenticated) {
        window.history.back();
    }
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
