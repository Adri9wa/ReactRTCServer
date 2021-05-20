import React, { Component } from 'react'
import * as io from 'socket.io-client'

const socket = io.connect('http://localhost:5000') //connect socket to server

export default class TestSocket extends Component{

    constructor(props){
        super(props);

        //state for test timer
        this.state = {
            timer: 0
        }
    }

    componentDidMount(){
        socket.on('connect_error', () => {
            console.log("Front failed to connect");
        });

        socket.on('message', (message) => {
            console.log('"Message" channel:', message);
          });

        socket.on('sendTimer', (timer) =>{
            console.log(timer)
            this.setState({timer: timer})
        })
        
    }

    componentDidUpdate(){
        
    }

    render(){  
        return(
            <div>
                Server uptime: {this.state.timer}
            </div>
        )
    }
}