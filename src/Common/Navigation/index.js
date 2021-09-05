import React, { Component } from 'react'
import Button from '../../Components/Button'
import Styles from './styles.module.css'

/**
 * Main navigation menu.
 */
export default class Navigation extends Component {
    render() {
        return (
            <div className={Styles.navMenu}>
                <Button label="Home" />
                <Button label="General info" />
                <Button label="Control Room" />
                <Button label ="UI example" />
                <Button label ="SignUp" />
            </div>
        )
    }
}