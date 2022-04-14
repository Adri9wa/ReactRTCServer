import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchDevices, selectDevices} from "./redux/duck";
import Styles from './styles.module.css';
import history from 'store/history';
import Block from "../../Components/Block";
import SpanBlock from "../../Components/SpanBlock";

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
        return <Block key={device.id}>
            <SpanBlock>ID: {device.id}</SpanBlock>
            <SpanBlock className={Styles.deviceCode}>Code: {device.deviceCode}</SpanBlock>
            <span>{device.name}</span>
        </Block>
    }
    
    render() {
        console.log('devices: ', this.props.devices)
        return (
            <div className={Styles.container}>
                <button
                    onClick={() => {
                        const id = 3;
                        // TODO: This path is hardcoded
                        history.push(`/smartPlug/${id}`);
                    }}
                >Open plug with id 3</button>
                {this.props.devices.map(device => {
                    return this.renderDevice(device);
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices);