import React, { Component } from 'react'
import DataForm from '../../Components/DataForm'
import StatusBar from '../../Components/Status Bar/index'
import Switcher from '../../Components/Switcher'

export default class UIexample extends Component{
    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex'}}>
                    <StatusBar percentage={0}/>
                    <StatusBar percentage={40}/>
                    <StatusBar percentage={80}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Switcher color="green"/>
                    <Switcher color="blue"/>
                    <Switcher color="red"/>
                    <Switcher color="gray"/>
                </div>
                <div style={{display: 'flex'}}>
                    <DataForm paramName="Example" paramDesc="120"/>
                </div>
            </div>
        )
    }
}