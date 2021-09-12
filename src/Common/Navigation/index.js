//vendor
import React from 'react';
import _ from 'lodash';
import logo from "./logo.svg";
import { Button } from 'rtc-ui-library';

//proj

//own
import Styles from "./styles.module.css";
import navigationConfiguration from './config';
import NavigationButton from './components/NavigationButton';


import { connect } from "react-redux";

// proj
import {
    selectAuthToken,
    logOut,
} from 'Common/redux/duck';

const mapStateToProps = state => ({
    token: selectAuthToken(state),
});

const mapDispatchToProps = ({
    logOut,
});

/**
 * Central navigation file, contains controls and commonly used stuff.
 * To configure available nav buttons visit config.js file.
 */
class Navigation extends React.Component {
    render() {
        const { children, logOut, token } = this.props;
        let key = 0;
        const navigationConfig = navigationConfiguration({token});

        return (
            <div className={Styles.mainCont}>
                <div className={Styles.navigationAndHeaderPanel}>
                    <header className={Styles.header}>
                        <img src={logo} className={Styles.logo} alt="logo" />
                        <div className={Styles.title}> RTC </div>
                        <div className={Styles.logOutCont}>
                            <Button onClick={() => logOut()}>LOG OUT</Button>
                        </div>
                    </header>
                    <div className={Styles.sideMenu}>
                        <div className={Styles.sideMenuContent}>
                            {navigationConfig && _.map(navigationConfig, ({title, path, visible}) => {
                                if(visible === false) return null;

                                return (
                                    <NavigationButton
                                        label={title}
                                        path={path}
                                        key={key++}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                
                <div className={Styles.children}>
                    {children}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);