/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/**
 * @file [App]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 17:23:07
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import {Suspense} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import NotFound from 'pages/not-found';
import {browserHistory} from 'utils/browserHistory';

import {routes} from './routes';
const App = () => (
    <Router history={browserHistory}>
        <Suspense fallback={null}>
            <Switch>
                {routes.map((route, idx) => {
                    // console.log('ddt::route', route);
                    if (route.redirect && route.to) {
                        return (
                            // @ts-ignore
                            <Redirect key={route.path + '_' + idx} {...route} />
                        );
                    }
                    const FinalRoute = route.private ? PrivateRoute : Route;
                    const Comp = route.component;
                    return (
                        // @ts-ignore
                        <FinalRoute
                            key={route.path + '_' + idx}
                            {...route}
                            component={Comp}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    </Router>
);
export default App;
