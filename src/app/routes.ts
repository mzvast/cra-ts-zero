import React from 'react';

import pathConfig from 'config/pathConfig';
import {Role} from 'components/zion-auth/types';

const Landing = React.lazy(() => import('pages/landing'));
const Login = React.lazy(() => import('pages/login'));
const Counter = React.lazy(() => import('pages/counter'));

export const routes: RouteConfig[] = [
    {
        path: pathConfig.root,
        component: Landing,
        exact: true
    },
    {
        path: pathConfig.login,
        component: Login,
        exact: true
    },
    {
        path: pathConfig.counter,
        component: Counter,
        private: true,
        role: Role.Developer, // 只有非开发者可以访问
        exact: true
    }
];
