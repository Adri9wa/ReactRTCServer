import React, { Component } from 'react'
import Styles from './styles.module.css'
import { TitleText, Text, Switcher } from 'rtc-ui-library';

export const COLORS = {
    success: '#28C438',
    error: '#F12F2F',
    disabled: '#6B6B6B',
    neutral: '#28C4C4',
};


export default class SmartPlugControl extends Component{
    constructor(props){
        super(props);

        this.state = {
            onOff: false, //On Off value of the lamp
        }
    }

    handleOnOff = (newValue) => {
        this.setState({onOff: newValue, selectedMode: undefined})
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
        return(
            <div className={Styles.mainCont}>
                <div className={Styles.title}>
                    <TitleText>smart plug control</TitleText>
                </div>
                <div>
                    <Text>
                        Control every non-smart device and make it kind a smart with a plug.
                        Only 99.99$ and it will be yours!
                    </Text>
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