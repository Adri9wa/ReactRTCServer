import React, { Component } from 'react'
import Header from '../Header'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Styles from './styles.module.css'

/**
 * RTC web page layout.
 */

export default class Layout extends Component{
    render(){
        return (
            <div className = {Styles.layout}>
            <Header />
            <Navigation />
            <Footer />
            </div>
        )
    }
}