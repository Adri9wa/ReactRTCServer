import React, { Component } from 'react'
import * as io from 'socket.io-client'
import { Joystick } from 'react-joystick-component'
import StatusBar from '../../Components/Status Bar'
import Styles from './styles.module.css'
import DataForm from '../../Components/DataForm'

const socket = io.connect('http://localhost:8000') //connect socket to server

export default class ControlRoom extends Component{

    constructor(props){
        super(props);

        //state for test timer
        this.state = {
            timer: 0,
            storage: {pl: 0, pr: 0}
        }
    }

    componentDidMount(){
        socket.once('connect_error', () => {
            console.log("Front failed to connect");
        });

        socket.on('message', (message) => {
            console.log('"Message" channel:', message);
          });

        socket.on('sendTimer', (timer) =>{
            this.setState({timer: timer})
        })

        socket.on('testData', (storage) =>{
            this.setState({storage: storage})
        })
        
    }

    componentDidUpdate(){
        
    }

    handleMove = (test) =>{
        var x = test.x*1.666;
        var y = test.y*1.666;
        var powerL = y, powerR = y;
        powerL += x;
        powerR -= x;
        if(powerL >= 100) powerL = 100;
        if(powerR >= 100) powerR = 100;
        if(powerL <= -100) powerL = -100;
        if(powerR <= -100) powerR = -100;
        socket.emit('MoveJoystick', Math.round(powerR), Math.round(powerL))
    }

    handleStop = () =>{
        console.log("stopped")
        socket.emit('MoveJoystick', 0, 0)

    }
        
    render(){

        var myJSON = JSON.stringify(this.state.storage); //Create string from object

        return(
            <div>
                    Server uptime: {this.state.timer}
                <br />
                    From robot message: {this.state.storage.test2}
                <br />
                
                <div className={Styles.engines}>
                    <StatusBar percentage = {this.state.storage.pl}/>
                    <div style={{boxShadow: "10px 5px 12px black", borderRadius: "50%", width: "120px", height: "120px", margin:"20px", transform: "rotate(0deg)"}}>
                    <Joystick size={120} baseColor="#363636" stickColor="#5071a1" throttle={20} move={this.handleMove} stop={this.handleStop}></Joystick>
                </div>
                    <StatusBar percentage = {this.state.storage.pr}/>
                </div>
                <DataForm paramName="Msg from RTC" paramDesc={myJSON} />
            </div>
        )
    }
}