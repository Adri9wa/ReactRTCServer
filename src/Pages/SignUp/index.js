// vendor
import React from 'react';
import {
    Box
} from '@material-ui/core';

// proj
import {
    TitleText,
    Text,
    StatusBar,
    Button,
    Switcher,
} from 'rtc-ui-library';

import Styles from './styles.module.css';

export default class SignUp extends React.Component {

    render() {
        return (
            <div className={ Styles.mainCont }>
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