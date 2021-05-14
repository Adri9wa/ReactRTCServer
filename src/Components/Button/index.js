import React, { Component } from 'react'
import Styles from './styles.module.css'
import { Link } from 'react-router-dom'
/**
 * Main button used in navigation.
 * @param props.label Label text inside button.
 */

export default class Button extends Component {
    render() {
        const { label } = this.props
        return (
            <Link to={`/${label}`}>
                <button className={Styles.button}> <p>{label}</p> </button>
            </Link>
        )
    }

}