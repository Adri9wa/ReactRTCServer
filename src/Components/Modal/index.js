import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Styles from "./styles.module.css";

/**
 * Added this modal, but it is not finished, and it doesn't work completely
 * @param props.onClose
 * @param props.visible
 * @param props.title
 * @param props.children - children node
 * @return {}
 * @constructor
 */
export class Modal extends React.Component {
    // const closeOnEscapeKeyDown = e => {
    //     if ((e.charCode || e.keyCode) === 27) {
    //         props.onClose();
    //     }
    // };
    //
    // useEffect(() => {
    //     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    //     return function cleanup() {
    //         document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    //     };
    //
    //     setTimeout(() => {
    //         console.log('Auto close')
    //         if(props.onClose) props.onClose();
    //     }, 2000)
    // }, []);
    //
    
    render() {
        return <div className={this.props.visible? Styles.modal: Styles.modalInvisible} onClick={this.props.onClose}>
            <div className={Styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={Styles.modalHeader}>
                    <h4 className={Styles.modalTitle}>{this.props.title}</h4>
                </div>
                <div className={Styles.modalBody}>{this.props.children}</div>
                <div className={Styles.modalFooter}>
                    <button onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>;
    }
    
};

export default Modal;
