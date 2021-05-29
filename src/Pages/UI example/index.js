import React, { Component } from 'react'
import DataForm from '../../Components/DataForm'
import StatusBar from '../../Components/Status Bar/index'
import Switcher from '../../Components/Switcher'

export default class UIexample extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: 0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            if(this.state.loading<100)
            this.setState({loading: this.state.loading+1})
            else this.setState({loading: 0})
        }, 100)
    }
    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex'}}>
                    <StatusBar percentage={0}/>
                    <StatusBar percentage={40}/>
                    <StatusBar percentage={80}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <StatusBar percentage={this.state.loading}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Switcher color="green"/>
                    <Switcher color="blue"/>
                    <Switcher color="red"/>
                    <Switcher color="gray"/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <DataForm paramName="Example" paramDesc="Something is valued 120"/>
                </div>
            </div>
        )
    }
}