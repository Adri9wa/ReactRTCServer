// vendor
import React, { Component } from "react";
import { hot } from "react-hot-loader";

// proj

// own
import Public from "./Public";

/**
 * Central route handler, it will decide which routes is currently available
 */
class Routes extends Component {
    render() {
        return (
            <Public />
        );
    }
}

export default hot(module)(Routes)