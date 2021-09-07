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
    selectNickname,

    setLogin,
    setPassword,
    setNickname,

    registerUser,
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
    nickname: selectNickname(state),
});

const mapDispatchToProps = {
    setPassword,
    setNickname,
    setLogin,
    registerUser,
};


class SignUp extends React.Component {

    render() {
        const {
            login,
            password,
            nickname,

            setLogin,
            setPassword,
            setNickname,

            registerUser,
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

                        <Grid className={Styles.inputCont} item xs={6}>
                            <Input
                                label="Nickname"
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                            />
                        </Grid>                        
                    </Grid>
                </Box>

                <div className={Styles.signUpBtnCont}>
                    <Button onClick={() => registerUser()}>Sign up</Button>
                </div>
                <div className={Styles.signUpBtnCont}>
                    <Button onClick={async () => {
                        const response = await fetch('http://127.0.0.1:8000/users', {
                            method: 'POST',
                            // headers: {
                            //     'content-type':                   'application/json',
                            //     'Cache-Control':                  'no-cache',
                            //     'Access-Control-Request-Headers': '*',
                            //     'Access-Control-Allow-Origin':    '*',
                            //     'mode':                           'no-cors',
                            // },
                            body: JSON.stringify({}),
                        });
                        console.log('response: ', response);
                    }}>Hardcoded sign up</Button>
                </div>
                <Text>You have to register yourself before you can access other pages.</Text>
                <Text>After registration you will have access to your profile.</Text>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);