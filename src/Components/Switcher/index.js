import React, { Component } from 'react'
import Styles from './styles.module.css'

export default class Switcher extends Component{
    render(){
        const {color} = this.props;
        var ledColor;
        switch(color){
            case "green": {
                ledColor = "#28C438";
                break;
            }
            case "blue": {
                ledColor = "#28C4C4";
                break;
            }
            case "gray": {
                ledColor = "#6B6B6B";
                break;
            }
            case "red": {
                ledColor = "#F12F2F";
                break;
            }
            default: {
                ledColor = "#6B6B6B";
                break;
            }
        }
        return(
            <div className={Styles.conture}>
            <div className={Styles.ledBorder}>
                <div className={Styles.led} style={{backgroundColor: ledColor}}>
                </div>
            </div>
            </div>
        )
    }
}