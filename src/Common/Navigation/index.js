//vendor
import React from 'react';
import _ from 'lodash';
import logo from "./logo.svg";

//proj

//own
import Styles from "./styles.module.css";
import navigationConfig from './config';
import NavigationButton from './components/NavigationButton';

/**
 * Central navigation file, contains controls and commonly used stuff.
 * To configure available nav buttons visit config.js file.
 */
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.navigationConfig = navigationConfig();
    }

    render() {
        const { children } = this.props;
        let key = 0;

        return (
            <div className={Styles.mainCont}>
                <div className={Styles.navigationAndHeaderPanel}>
                    <header className={Styles.header}>
                        <img src={logo} className={Styles.logo} alt="logo" />
                        <div className={Styles.title}>
                            RTC
                        </div>
                    </header>
                    <div className={Styles.sideMenu}>
                        <div className={Styles.sideMenuContent}>
                            {this.navigationConfig && _.map(this.navigationConfig, ({title, path}) => {
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