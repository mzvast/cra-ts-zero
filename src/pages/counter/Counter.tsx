/**
 * @file [Counter]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-05-30 19:31:31
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React, {Component} from 'react';
import {Link, Route, withRouter, Switch} from 'react-router-dom';
import styled, {css, keyframes} from 'styled-components';
import {Box, palette, Flex} from 'galaco';

interface Props {
    count: number;
    increment: () => void;
}
interface State {}

class Counter extends Component<Props, State> {
    state: State;
    static defaultProps = {};
    render() {
        return (
            <div>
                <Box>count:{this.props.count}</Box>
                <button onClick={this.props.increment}>increment</button>
            </div>
        );
    }
}

export default Counter;
