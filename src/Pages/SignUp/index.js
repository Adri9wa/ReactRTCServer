// vendor
import React from 'react';
import { connect } from "react-redux";
import {
    Box,
    Grid,
} from '@material-ui/core';

// proj
import {
    setLogin,
    selectLogin,
} from './redux/duck';
import {
    TitleText,
    Text,
    Button,
    Input,
} from 'rtc-ui-library';

import Styles from './styles.module.css';

const mapStateToProps = state => ({
    login: selectLogin(state),
});

const mapDispatchToProps = {
    setLogin,
};


class SignUp extends React.Component {

    render() {
        const {
            login,

            setLogin,
        } = this.props;

        return (
            <div className={ Styles.mainCont }>
                <TitleText className={Styles.title}>Registration page</TitleText>

                <Box className={Styles.registrationForm}>
                    <Grid container spacing={3}>
                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input
                                label="Login"
                                value={login}
                                onChange={console.log}
                            />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);