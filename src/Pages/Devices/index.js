import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchDevices, selectDevices} from "./redux/duck";
import Styles from './styles.module.css';

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
    
    renderDevice(device) {
        return <div className={Styles.deviceContainer} key={device.id}>
            <span className={Styles.deviceID}>ID: {device.id}</span>
            <span className={Styles.deviceCode}>Code: {device.deviceCode}</span>
            <span>{device.name}</span>
        </div>
    }
    
    render() {
        console.log('devices: ', this.props.devices)
        return (
            <div className={Styles.container}>
                {this.props.devices.map(device => {
                    return this.renderDevice(device);
                })}
                {/*{JSON.stringify(this.props.devices)}*/}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices);