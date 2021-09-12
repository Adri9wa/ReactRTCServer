import React, { Component } from 'react'
import Header from '../Header'
import Navigation from '../NavigationOld'
import Footer from '../Footer'
import Styles from './styles.module.css'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import GeneralInfo from '../../Pages/General info'
import ControlRoom from 'Pages/ControlRoom'
import UIexample from '../../Pages/UI example'
import SignUp from '../../Pages/SignUp'

/**
 * RTC web page layout.
 */

export default class Layout extends Component {
    render() {
        return (
            <Router>
                <div className={Styles.layout}>
                    <Header />
                    <Redirect from="/ReactRTCServer" to="/Home" />
                    <div className={Styles.pageContent}>
                        <Navigation />
                            <Route exact path="/Home" component={Home} />
                            <Route exact path="/General info" component={GeneralInfo} />
                            <Route exact path="/Control Room" component={ControlRoom} />
                            <Route exact path="/UI example" component={UIexample} />
                            <Route exact path="/SignUp" component={SignUp} />
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}