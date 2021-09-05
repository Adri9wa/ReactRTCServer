import React from 'react';

import {
    Box,
    TitleText,
    Text,
    StatusBar,
    Button,
    Switcher,
} from 'rtc-ui-library';


export default class SignUp extends React.Component {

    render() {
        return (
            <div>
                <Box>
                    <TitleText styles={{backgroundColor: 'red'}}>My title</TitleText>
                </Box>
                <Text>Hello</Text>
                <StatusBar percentage={80}/>
                <Button>Press me</Button>
                <Switcher />
            </div>
        );
    }
}