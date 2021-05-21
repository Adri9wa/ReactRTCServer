import React, { Component } from 'react'
import Styles from './styles.module.css'

export default class StatusBar extends Component{
    render(){
        const {color} = this.props;
        var outlineColor, labelColor;
        switch(color){
            case "blue": {
                outlineColor = "conic-gradient(from 135deg at 50% 50%, #000000 -19.06deg, #00E0FF 326.84deg, #000000 340.94deg, #00E0FF 686.84deg)"
                labelColor = "#00AA07";
                break;
            }

            case "yellow": {
                outlineColor = "conic-gradient(from 135deg at 50% 50%, #3D2F00 -19.06deg, #FFC700 326.84deg, #3D2F00 340.94deg, #FFC700 686.84deg)"
                labelColor = "#FFF500";
                break;
            }
            case "red": {
                outlineColor = "conic-gradient(from 135deg at 50% 50%, #361313 -19.06deg, #9e2626 326.84deg, #C40000 340.94deg, #FF0000 686.84deg)"
                labelColor = "#AA0000";
                break;
            }
        }
        return(
            <div className={Styles.inner} style={{background: outlineColor}}>
                <div className={Styles.conture}>
                    <p className={Styles.label} style={{color: labelColor}}> 0% </p> 
                </div>
            </div>
        )
    }

}