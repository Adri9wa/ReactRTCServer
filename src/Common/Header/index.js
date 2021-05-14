import React, { Component } from 'react'
import { HeaderColor } from '../../Constants/Colors'
import Styles from './styles.module.css';

/**
 * RTC page header.
 */

export default class Header extends Component {
    render() {
        return (
            <header className={Styles.header}>
                <h1 className={Styles.h1}> RTC </h1>
            </header>
        )
    }
}
