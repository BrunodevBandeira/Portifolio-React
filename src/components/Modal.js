import React from 'react';
import styles from "./Modal.module.scss";

const Modal = ({ id="modal", onClose = () => {}, children }) => {

    const clicarDentro = (e) => {
        if(e.target.id === id) {
            onClose();
        };
    };


    return(
        <div id={id} className={styles.modal} onClick={clicarDentro}>
            <div className={styles.containerModal}>
                <button className={styles.close} onClick={onClose}> Close </button> 
                <div className={styles.content}> {children} </div>
            </div>
        </div>
    );
};

export default Modal