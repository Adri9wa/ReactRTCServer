import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchDevices, selectDevices} from "./redux/duck";

const mapStateToProps = state => ({
    devices: selectDevices(state),
});

const mapDispatchToProps = {
    fetchDevices,
};


class Devices extends Component {
    componentDidMount() {
        this.props.fetchDevices();
    }
    
    render() {
        console.log('devices: ', this.props.devices)
        return (
            <div>
                {JSON.stringify(this.props.devices)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices);