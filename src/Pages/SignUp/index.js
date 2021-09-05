// vendor
import React from 'react';
import {
    Box,
    Grid,
    Paper
} from '@material-ui/core';

// proj
import {
    TitleText,
    Text,
    Button,
    Input,
} from 'rtc-ui-library';

import Styles from './styles.module.css';

export default class SignUp extends React.Component {

    render() {
        return (
            <div className={ Styles.mainCont }>
                <TitleText className={Styles.title}>Registration page</TitleText>

                <Box className={Styles.registrationForm}>
                    <Grid container spacing={3}>
                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input label="Login"/>
                        </Grid>

                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input label="Password"/>
                        </Grid>

                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input label="First name"/>
                        </Grid>

                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input label="Last name"/>
                        </Grid>

                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input label="Nickname"/>
                        </Grid>                        
                    </Grid>
                </Box>

                <div className={Styles.signUpBtnCont}>
                    <Button>Sign up</Button>
                </div>
                <Text>You have to register yourself before you can access other pages.</Text>
                <Text>After registration you will have access to your profile.</Text>
            </div>
        );
    }
}