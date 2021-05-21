import React, { Component } from 'react'
import Header from '../Header'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Styles from './styles.module.css'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import GeneralInfo from '../../Pages/General info'
import TestSocket from '../../Pages/Test Socket'
import UIexample from '../../Pages/UI example'

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
                            <Route exact path="/Test Socket" component={TestSocket} />
                            <Route exact path="/UI example" component={UIexample} />
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}