import React, { Component } from 'react'
import * as io from 'socket.io-client'
import { Joystick } from 'react-joystick-component'
import StatusBar from '../../Components/Status Bar'
import Styles from './styles.module.css'
import { TitleText, Text } from 'rtc-ui-library';

const socket = io.connect(process.env.REACT_APP_HOST_API) //connect socket to server

export default class ControlRoom extends Component{
    constructor(props){
        super(props);

        this.state = {
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
    }

    emitMessageForRobot(powerL, powerR) {
        socket.emit('MoveJoystick', {
            deviceCode: "z8bf0qhB",
            cmd: "TRANSFER",
            transferToDevice: "xstWsRSC",
            variables: {
                deviceCode: "xstWsRSC",
                powerR,
                powerL
            },
        });
        console.log(powerL, powerR);

        this.setState({storage: {pl: powerL, pr: powerR}});
    }

    handleMove = (test) => {
        var x = test.x*1.666;
        var y = test.y*1.666;
        var powerL = y, powerR = y;
        powerL += x;
        powerR -= x;
        if(powerL >= 100) powerL = 100;
        if(powerR >= 100) powerR = 100;
        if(powerL <= -100) powerL = -100;
        if(powerR <= -100) powerR = -100;
        this.emitMessageForRobot(Math.round(powerL), Math.round(powerR));
    }

    handleStop = () =>{
        console.log("stopped")
        this.emitMessageForRobot(0, 0);
    }
        
    render(){
        return(
            <div className={Styles.mainCont}>
                <div className={Styles.title}>
                    <TitleText>Robot control</TitleText>
                </div>
                <div>
                    <Text>
                    Use joystick to control the robot. Any operations will be sent to the Hub which is
                    connected to the robot. If nothing changes then connection was not set properly.
                    </Text>
                </div>
                <div className={Styles.engines}>
                    <StatusBar percentage = {this.state.storage.pl}/>
                    <div style={{boxShadow: "10px 5px 12px black", borderRadius: "50%", width: "120px", height: "120px", margin:"20px"}}>
                        <Joystick size={120} baseColor="#363636" stickColor="#5071a1" throttle={20} move={this.handleMove} stop={this.handleStop}></Joystick>
                    </div>
                    <StatusBar percentage = {this.state.storage.pr}/>
                </div>
            </div>
        )
    }
}