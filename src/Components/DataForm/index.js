import React, { Component } from 'react'
import Styles from './styles.module.css'

export default class DataForm extends Component{
    render(){
    const {paramName} = this.props;
    const {paramDesc} = this.props;
        return(
            <div className={Styles.outer}>
                <div className={Styles.nameContainer}>
                    <p className={Styles.name}>{paramName}</p>
                </div>
                <div>
                    <p className={Styles.description}>{paramDesc}</p>
                </div>
            </div>
        )
    }
}