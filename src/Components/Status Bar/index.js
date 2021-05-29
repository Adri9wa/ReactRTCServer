import React, { Component } from 'react'
import Styles from './styles.module.css'

export default class StatusBar extends Component{
    render(){
        const {percentage} = this.props;
        var outlineColor, labelColor;
        var col = 110-percentage;
        outlineColor = `conic-gradient(from 135deg at 50% 50%, #000000 -19.06deg, hsl(${col}, 60%, 50%) 326.84deg, #000000 340.94deg, hsl(${col}, 50%, 50%) 686.84deg)`
        var dynamicColor = `hsl(${col}, 60%, 50%)`
        
        return(
            <div className={Styles.inner} style={{background: outlineColor }}>
                <div className={Styles.conture}>
                    <p className={Styles.label} style={{color: dynamicColor}}> {percentage}% </p> 
                </div>
            </div>
        )
    }

}