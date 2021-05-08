import React, { Component } from 'react'
import Button from '../../Components/Button'
import Styles from './styles.module.css'
import Home from '../../Pages/Home'

/**
 * Main navigation menu.
 */
export default class Navigation extends Component{
    render(){
        return (
            <div className = {Styles.navMenu}>
                <Button label = "Home" Component={Home} />
                <Button label = "General info"/>
                <Button label = "Testttt"/>
            </div>
        )
    }
}