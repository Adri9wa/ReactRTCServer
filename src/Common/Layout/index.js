import React, { Component } from 'react'
import Header from '../Header'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Styles from './styles.module.css'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Home from '../../Pages/Home/index'
import GeneralInfo from '../../Pages/General info/index'

/**
 * RTC web page layout.
 */

export default class Layout extends Component{
    render(){
        return (
            <Router>
            <div className = {Styles.layout}>
            <Header />
            <Redirect from="/" to="/Home" />
            <div className = {Styles.pageContent}>
            <Navigation />
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/General info" component={GeneralInfo}/>
            </div>
            <Footer />
            </div>
            </Router>
        )
    }
}