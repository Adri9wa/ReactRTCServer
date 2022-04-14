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
const Modal = props => {
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };
    
    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);
    
    if(props.visible) {
        return <div className={Styles.modal} onClick={props.onClose}>
            <div className={Styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={Styles.modalHeader}>
                    <h4 className={Styles.modalTitle}>{props.title}</h4>
                </div>
                <div className={Styles.modalBody}>{props.children}</div>
                <div className={Styles.modalFooter}>
                    <button onClick={props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    } else {
        return <div></div>;
    }
    
    // return ReactDOM.createPortal(
    //     <CSSTransition
    //         in={props.visible}
    //         unmountOnExit
    //         timeout={{ enter: 0, exit: 300 }}
    //     >
    //
    //     </CSSTransition>,
    //     document.getElementById("root")
    // );
};

export default Modal;
