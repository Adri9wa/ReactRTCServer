import React from 'react';

import {
    Box,
    TitleText,
    Text,
    StatusBar,
} from 'rtc-ui-library';


export default class SignUp extends React.Component {

    render() {
        return (
            <div>
                <Box>
                    <TitleText>My title</TitleText>
                </Box>
                <Text>Hello</Text>
                <StatusBar percentage={80}/>
            </div>
        );
    }
}