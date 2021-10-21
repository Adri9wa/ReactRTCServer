// vendor
import React from 'react';
import { connect } from "react-redux";
import {
    Box,
    Grid,
} from '@material-ui/core';

// proj
import {
    selectLogin,
    selectPassword,

    setLogin,
    setPassword,

    logIn,
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
    password: selectPassword(state),
});

const mapDispatchToProps = {
    setPassword,
    setLogin,
    logIn,
};


class SignUp extends React.Component {

    render() {
        const {
            login,
            password,

            setLogin,
            setPassword,

            logIn,
        } = this.props;

        return (
            <div className={ Styles.mainCont }>
                <TitleText className={Styles.title}>Log in page</TitleText>

                <Box className={Styles.registrationForm}>
                    <Grid container spacing={3}>
                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input
                                label="Login"
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                            />
                        </Grid>

                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input
                                label="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>                      
                    </Grid>
                </Box>

                <div className={Styles.signUpBtnCont}>
                    <Button onClick={() => logIn()}>Log in</Button>
                </div>
                <Text>Enter your login information.</Text>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);