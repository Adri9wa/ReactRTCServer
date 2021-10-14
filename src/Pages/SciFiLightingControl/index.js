import React, { Component } from 'react'
import Styles from './styles.module.css'
import { TitleText, Text, Button, Switcher } from 'rtc-ui-library';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { fetchAPI } from 'utils';

export const COLORS = {
    success: '#28C438',
    error: '#F12F2F',
    disabled: '#6B6B6B',
    neutral: '#28C4C4',
};


export default class SciFiLightingControl extends Component{
    constructor(props){
        super(props);

        this.state = {
            onOff: false, //On Off value of the lamp
            selectedMode: undefined,
        }
    }

    handleOnOff = (newValue) => {
        this.setState({onOff: newValue, selectedMode: newValue? "16738455": undefined}, () => {
            fetchAPI(
                'PUT',
                '/updater',
                null, 
                {
            
                    "deviceCode": "z8bf0qhB",
                    "cmd": "TRANSFER",
                    "transferToDevice": "LuHfclCg",
                    "deviceState": {
                        "variables": {
                            "code": this.state.onOff? "16738455": "16761405" //Just light or off
                        }
                    }
                }
            )
        });
    }

    handleIncreaseDecrease = (type) => {
        console.log("Type: ", type);
        fetchAPI(
            'PUT',
            '/updater',
            null, 
            {
        
                "deviceCode": "z8bf0qhB",
                "cmd": "TRANSFER",
                "transferToDevice": "LuHfclCg",
                "deviceState": {
                    "variables": {
                        "code": (type === "INCREASE")? "16754775": "16769055" //Increase or decrease
                    }
                }
            }
        )
    }

    handleModeSelection = (key) => {
        console.log("key: ", key);
        this.setState({selectedMode: key}, () => {
            fetchAPI(
                'PUT',
                '/updater',
                null, 
                {
            
                    "deviceCode": "z8bf0qhB",
                    "cmd": "TRANSFER",
                    "transferToDevice": "LuHfclCg",
                    "deviceState": {
                        "variables": {
                            "code": key
                        }
                    }
                }
            )
        });
    }

    renderLabeledComponent = (label, content) => {
        return (
            <div className={Styles.labeledComponent}>
                <div className={Styles.label}><Text>{label}</Text></div>
                <div className={Styles.content}>{content}</div>
            </div>
        );
    }
        
    render(){
        return(
            <div className={Styles.mainCont}>
                <div className={Styles.title}>
                    <TitleText>Sci Fi Backlight control</TitleText>
                </div>
                <div>
                    <Text>
                        Control your personal backlight system to make your life brighter!
                        Select desired mode and perform operations.
                        <br />
                        Some modes are disabled!
                    </Text>
                </div>

                <br />

                <div className={Styles.title}>
                    <TitleText>General</TitleText>
                </div>
                
                {this.renderLabeledComponent(
                    "On/Off",
                    (<Switcher onClick={() => this.handleOnOff(!this.state.onOff)} type='rectangular' color={this.state.onOff ? COLORS.neutral: COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Brightness",
                    (
                        <div className={Styles.buttonsCont}>
                            <Button onClick={() => this.handleIncreaseDecrease("DECREASE")}><RemoveIcon /></Button>
                            <Button onClick={() => this.handleIncreaseDecrease("INCREASE")}><AddIcon /></Button>
                        </div>
                    )
                )}

                <br />

                {/* ---------------------------- */}

                <div className={Styles.title}>
                    <TitleText>Modes</TitleText>
                </div>
                {this.renderLabeledComponent(
                    "Just light",
                    (<Switcher onClick={() => this.handleModeSelection("16738455")} color={this.state.selectedMode === "16738455"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Twinkle fox",
                    (<Switcher onClick={() => this.handleModeSelection("16724175")} color={this.state.selectedMode === "16724175"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Pacifica",
                    (<Switcher onClick={() => this.handleModeSelection("16718055")} color={this.state.selectedMode === "16718055"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Pride2015",
                    (<Switcher onClick={() => this.handleModeSelection("16743045")} color={this.state.selectedMode === "16743045"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "First light",
                    (<Switcher onClick={() => this.handleModeSelection("16716015")} color={this.state.selectedMode === "16716015"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Blink",
                    (<Switcher onClick={() => this.handleModeSelection("16726215")} color={this.state.selectedMode === "16726215"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Color temperature",
                    (<Switcher onClick={() => this.handleModeSelection("16734885")} color={this.state.selectedMode === "16734885"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Demo reel 100",
                    (<Switcher onClick={() => this.handleModeSelection("16728765")} color={this.state.selectedMode === "16728765"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Just blue",
                    (<Switcher onClick={() => this.handleModeSelection("16730805")} color={this.state.selectedMode === "16730805"? COLORS.success:COLORS.disabled} />)
                )}
                {this.renderLabeledComponent(
                    "Just green",
                    (<Switcher onClick={() => this.handleModeSelection("16732845")} color={this.state.selectedMode === "16732845"? COLORS.success:COLORS.disabled} />)
                )}
            </div>
        )
    }
}