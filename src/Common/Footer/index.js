import React, { Component } from 'react'
import Styles from './styles.module.css'
import RealDate from '../../Components/Date/Date'


/**
 * RTC page footer.
 */

export default class Footer extends Component {

    render() {
        return (
            <footer className={Styles.footer}>
                <h2 className={Styles.h2}>Date: <RealDate /></h2>
                <h2 className={Styles.h2}> &copy; Authors: Adri9wa & GTFTT </h2>
            </footer>
        )
    }
}