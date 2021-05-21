import React, { Component } from 'react'
import StatusBar from '../../Components/Status Bar/index'
import Switcher from '../../Components/Switcher'

export default class UIexample extends Component{
    render(){
        return(
            <>
            <StatusBar color="blue"/>
            <StatusBar color="yellow"/>
            <StatusBar color="red"/>
            <Switcher color="green"/>
            <Switcher color="blue"/>
            <Switcher color="red"/>
            <Switcher color="gray"/>
            </>
        )
    }
}