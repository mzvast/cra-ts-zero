/**
 * @file [Login]
 * @author []
 * @email []
 * @create date 2021/12/9
 */
import React from 'react';
import {styled, css, keyframes, Box, palette, Flex} from 'galaco';

import useLogin from './hooks';
interface Props {}
const Login: React.FC<Props> = () => {
    const {isLoggedIn, loginAsVisitor, loginAsDeveloper} = useLogin();
    return (
        <div>
            <button onClick={loginAsVisitor}>login as Visitor</button>

            <button onClick={loginAsDeveloper}>login as Developer</button>
        </div>
    );
};
export default Login;
