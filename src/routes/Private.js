// vendor
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// proj
import {
    Home,
    ControlRoom,
    SciFiLightingControl,
    SmartPlugControl,
} from 'Pages';

import book from './book';
import Devices from "../Pages/Devices";

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
                <Route
                    exact
                    component={ SmartPlugControl }
                    path={ book.smartPlug }
                />
                <Route
                    exact
                    component={ Devices }
                    path={ book.devices }
                />

                <Redirect to={ book.home } /> {/*Redirect to the default page*/}
            </Switch>
        );
    }
}
