// vendor
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

// proj

// own
import Public from "./Public";
import Private from "./Private";


// proj
import {
    selectAuthToken,
} from 'Common/redux/duck';

const mapStateToProps = state => ({
    token: selectAuthToken(state),
});

/**
 * Central route handler, it will decide which routes is currently available
 */
class Routes extends Component {
    render() {
        const { token } = this.props;
        
        //Return private pages if token already exists else show public content only
        return token
            ? <Private />
            : <Public />
    }
}

export default hot(module)(
    connect(mapStateToProps)(Routes)
)