import React, { Component } from 'react'
import Styles from './styles.module.css'
import { TitleText, Text, Switcher } from 'rtc-ui-library';
import { withRouter } from "react-router";
import { selectSmartPlug, fetchSmartPlug } from './redux/duck';
import {connect} from "react-redux";

import { fetchAPI } from 'utils';

export const COLORS = {
    success: '#28C438',
    error: '#F12F2F',
    disabled: '#6B6B6B',
    neutral: '#28C4C4',
};

const mapStateToProps = state => ({
    smartPlug: selectSmartPlug(state),
});

const mapDispatchToProps = {
    fetchSmartPlug,
};


class SmartPlugControl extends Component{
    constructor(props){
        super(props);

        this.state = {
            onOff: false, //On Off value of the lamp
        }
    }
    
    componentDidMount() {
        const currentDeviceID = this.props.match.params.id;
        this.props.fetchSmartPlug(currentDeviceID);
    }
    
    handleOnOff = (newValue) => {
        this.setState({onOff: newValue}, () => {
            fetchAPI(
                'PUT',
                '/updater',
                null, 
                {
            
                    "deviceCode": "z8bf0qhB",
                    "cmd": "TRANSFER",
                    "transferToDevice": "HbJ7VX6m",
                    "deviceState": {
                        "variables": {
                            "status": this.state.onOff,
                        }
                    }
                }
            )
        });
    }

    renderLabeledComponent = (label, content) => {
        return (
            <div className={Styles.labeledComponent}>
                <div className={Styles.label}><Text>{label}</Text></div>
                <div className={Styles.content}>{content}</div>
            </div>
        );
    }
        
    render(){
        const plug = this.props.smartPlug;
        console.log('ID from params: ', this.props.match.params.id);
        console.log('Plug data: ', this.props.smartPlug);
        return(
            <div className={Styles.mainCont}>
                <div className={Styles.title}>
                    <TitleText>smart plug control</TitleText>
                </div>
                <div className={Styles.deviceContainer} key={plug.id}>
                    <div>
                        <span className={Styles.deviceID}>ID: {plug.id}</span>
                        <span className={Styles.deviceCode}>Code: {plug.code}</span>
                        <span>{plug.name}</span>
                    </div>
                    <div className={Styles.deviceDescription}>
                        <Text>
                            {plug.description}
                        </Text>
                    </div>
                </div>

                <br />

                {this.renderLabeledComponent(
                    "On/Off",
                    (<Switcher onClick={() => this.handleOnOff(!this.state.onOff)} type='rectangular' color={this.state.onOff ? COLORS.neutral: COLORS.disabled} />)
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SmartPlugControl));