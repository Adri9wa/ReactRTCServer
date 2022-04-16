import React, { Component } from 'react'
import Styles from './styles.module.css'
import {TitleText, Text, Switcher, Button} from 'rtc-ui-library';
import { withRouter } from "react-router";
import {selectSmartPlug, fetchSmartPlug, selectParameters, selectParametersStats} from './redux/duck';
import {connect} from "react-redux";

import { fetchAPI } from 'utils';
import Block from "../../Components/Block";
import SpanBlock from "../../Components/SpanBlock";
import Modal from "../../Components/Modal";
import DeviceParameterModal from "../../Modals/DeviceParameterModal/DeviceParameterModal";

export const COLORS = {
    success: '#28C438',
    error: '#F12F2F',
    disabled: '#6B6B6B',
    neutral: '#28C4C4',
};

const mapStateToProps = state => ({
    smartPlug: selectSmartPlug(state),
    parameters: selectParameters(state),
    parametersStats: selectParametersStats(state),
});

const mapDispatchToProps = {
    fetchSmartPlug,
};


class SmartPlugControl extends Component{
    constructor(props){
        super(props);

        this.state = {
            onOff: false, //On Off value of the lamp
            visible: false,
            currentDeviceID: this.props.match.params.id
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
    
    renderParameter = (parameter) => {
        return <div key={parameter.id} className={Styles.parameterContainer}>
            <div className={Styles.parameterDataContainer}>
                <Block>
                    <SpanBlock className={Styles.parameterID}>{parameter.id}</SpanBlock>
                    <SpanBlock className={Styles.parameterKey}>{parameter.key}</SpanBlock>
                    {
                        parameter.value
                            ? <SpanBlock className={Styles.parameterValue}>{parameter.value}</SpanBlock>
                            : "NO_VALUE"
                    }
                    <SpanBlock className={Styles.parameterType}>{parameter.type}</SpanBlock>
                </Block>
            </div>
            
            <DeviceParameterModal
                buttonText={'EDIT'}
                parameterID={parameter.id}
                onUpdate={() => {
                    const currentDeviceID = this.props.match.params.id;
                    this.props.fetchSmartPlug(currentDeviceID);
                }}
            />
            <Button
                onClick={() => {
                    // Hardcoded
                    // eslint-disable-next-line no-restricted-globals
                    const result = confirm('Are you sure you want ot delete?')
                    if(result) {
                        fetchAPI('DELETE', '/deleteDeviceParameter/'+parameter.id)
                            .then(async () => {
                                this.props.fetchSmartPlug(this.state.currentDeviceID);
                            })
                            .catch((e) => {
                                console.error(e)
                            });
                    }
                }}
            >
                DEL
            </Button>
        </div>
    }
        
    render(){
        const plug = this.props.smartPlug;
        console.log('ID from params: ', this.props.match.params.id);
        console.log('Plug data: ', this.props.smartPlug);
        console.log('Plug data: ', this.props.parameters, this.props.parametersStats);
        return(
            <div className={Styles.mainCont}>
                <div className={Styles.title}>
                    <TitleText>smart plug control</TitleText>
                </div>
                <Block>
                    <div>
                        <SpanBlock>ID: {plug.id}</SpanBlock>
                        <SpanBlock className={Styles.deviceCode}>Code: {plug.code}</SpanBlock>
                        <span>{plug.name}</span>
                    </div>
                    <div className={Styles.deviceDescription}>
                        <Text>
                            {plug.description}
                        </Text>
                    </div>
                </Block>

                <br />
    
                {
                    this.props.parameters.map((parameter => {
                        return this.renderParameter(parameter);
                    }))
                }
                <DeviceParameterModal
                    buttonText={'CREATE'}
                    mode={"CREATE"}
                    deviceID={this.state.currentDeviceID}
                    onCreate={() => {
                        this.props.fetchSmartPlug(this.state.currentDeviceID);
                    }}
                />
                {this.renderLabeledComponent(
                    "On/Off",
                    (<Switcher onClick={() => this.handleOnOff(!this.state.onOff)} type='rectangular' color={this.state.onOff ? COLORS.neutral: COLORS.disabled} />)
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SmartPlugControl));