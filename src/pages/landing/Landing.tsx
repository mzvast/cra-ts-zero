/**
 * @file [Landing]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 17:34:40
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React, {Component} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Box, palette, Flex} from 'galaco';
import {
    withRouter,
    RouteComponentProps,
    Redirect,
    Link
} from 'react-router-dom';

import AuthGuard from 'utils/AuthGuard';
import pathConfig from 'config/pathConfig';
import {browserHistory} from 'utils/browserHistory';

type Props = {} & RouteComponentProps;
interface State {
    redirectToReferrer: boolean;
}
class Landing extends Component<Props, State> {
    state: State = {
        redirectToReferrer: false
    };

    static defaultProps = {};

    render() {
        //@ts-ignore
        const {from} = this.props.location.state || {
            from: {pathname: pathConfig.counter}
        };
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        return (
            <div className="bg-pink-400">
                LandingPage
                {AuthGuard.isAuthenticated ? (
                    <button onClick={this.logout}>logout</button>
                ) : (
                    <button onClick={this.login}>go login page</button>
                )}
                <li>
                    <Link to={pathConfig.counter}>CounterPrivate</Link>
                </li>
            </div>
        );
    }

    login = () => {
        browserHistory.push(pathConfig.login);
    };
    logout = () => {
        AuthGuard.signout();
    };
}
export default Landing;
