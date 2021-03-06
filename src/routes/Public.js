// vendor
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// proj
import {
    Home,
    SignUp,
    LogIn
} from 'Pages';

import book from './book';

/**
 * All those components will be available by users without authentication
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
                    render={ props => <SignUp { ...props } /> }
                    path={ book.signUp }
                />
                <Route
                    exact
                    render={ props => <LogIn { ...props } /> }
                    path={ book.logIn }
                />

                <Redirect to={ book.home } /> {/*Redirect to the default page*/}
            </Switch>
        );
    }
}
