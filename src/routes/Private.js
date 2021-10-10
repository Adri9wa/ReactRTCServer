// vendor
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// proj
import {
    Home,
    ControlRoom,
    SciFiLightingControl,
} from 'Pages';

import book from './book';

/**
 * All those components will be available by authenticated users only
 */
export default class Public extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    component={ Home }
                    path={ book.home }
                />
                <Route
                    exact
                    component={ ControlRoom }
                    path={ book.controlRoom }
                />
                <Route
                    exact
                    component={ SciFiLightingControl }
                    path={ book.sciFiBacklight }
                />

                <Redirect to={ book.home } /> {/*Redirect to the default page*/}
            </Switch>
        );
    }
}
