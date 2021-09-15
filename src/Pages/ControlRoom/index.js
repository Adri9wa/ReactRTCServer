import React, { Component } from "react";
import * as io from "socket.io-client";
import StatusBar from "../../Components/Status Bar";
import Styles from "./styles.module.css";
import { Switcher } from "rtc-ui-library";

const socket = io.connect("http://localhost:8000"); //connect socket to server

export default class ControlRoom extends Component {
  constructor(props) {
    super(props);

    //state for test timer
    this.state = {
      timer: 0,
      storage: { pl: 0, pr: 0 },
    };
  }

  componentDidMount() {
    socket.once("connect_error", () => {
      console.log("Front failed to connect");
    });

    socket.on("message", (message) => {
      console.log('"Message" channel:', message);
    });

    socket.on("sendTimer", (timer) => {
      this.setState({ timer: timer });
    });

    socket.on("testData", (storage) => {
      this.setState({ storage: storage });
    });
  }

  componentDidUpdate() {}

  handleMove = (test) => {
    var x = test.x * 1.666;
    var y = test.y * 1.666;
    var powerL = y,
      powerR = y;
    powerL += x;
    powerR -= x;
    if (powerL >= 100) powerL = 100;
    if (powerR >= 100) powerR = 100;
    if (powerL <= -100) powerL = -100;
    if (powerR <= -100) powerR = -100;
    socket.emit("MoveJoystick", Math.round(powerR), Math.round(powerL));
  };

  handleStop = () => {
    console.log("stopped");
    socket.emit("MoveJoystick", 0, 0);
  };

  render() {
    return (
      <div className={Styles.controlRoomWrap}>
        <h1> GENERAL </h1>
        <div className={Styles.column}>
          <p> Turn ON/OFF </p> <Switcher color="#28C4C4" />
        </div>
        <div className={Styles.column}>
          <p> Brightness </p> <StatusBar percentage={this.state.storage.pl} />
        </div>
        <h1> MODES </h1>
        <div className={Styles.column}>
          <p> Blue sky imitation </p> <Switcher color="#28C438" />
        </div>
        <div className={Styles.column}>
          <p> Fire sky imitation </p> <Switcher color="#28C4C4" />
        </div>
        <div className={Styles.column}>
          <p> Another imitation </p> <Switcher color="#6B6B6B" />
        </div>
      </div>
    );
  }
}
