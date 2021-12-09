// /**
//  * @file [PrivateRouteDev]
//  * @author [mzvast]
//  * @email [mzvast@gmail.com]
//  * @create date 2019-03-13 16:40:17
//  */
// /* eslint-disable max-len,operator-linebreak,space-before-function-paren */

import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import AuthGuard from 'utils/AuthGuard';
import pathConfig from 'config/pathConfig';
// import config from 'config';
// // import AuthGuard from 'api/AuthGuard';
// https://tylermcginnis.com/react-router-protected-routes-authentication/
const PrivateRoute = ({component: Component, role, ...rest}) => {
    function renderFn(props: any) {
        // console.log('renderFn::rest.path', rest.path);
        // console.log('ddt::component', Component);
        // console.log(
        //     'ddt::component',
        //     AuthGuard.isAuthenticated,
        //     AuthGuard._role
        // );
        return AuthGuard.isAuthenticated ? (
            AuthGuard.hasRole(role) ? (
                <Route component={Component} {...rest} />
            ) : (
                <Redirect
                    to={{
                        pathname: pathConfig.root
                    }}
                />
            )
        ) : (
            <Redirect
                to={{
                    pathname: pathConfig.login,
                    state: {from: props.location}
                }}
            />
        );
    }

    return <Route {...rest} render={renderFn} />;
};
export default PrivateRoute;
