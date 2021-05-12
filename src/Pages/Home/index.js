import React, {Component} from 'react'
import cat from '../../img/cat.jpg'
import Styles from './styles.module.css'

export default class Home extends Component{
    render(){
        return (
            <img src={cat} className = {Styles.img}></img>
        )
    }
}