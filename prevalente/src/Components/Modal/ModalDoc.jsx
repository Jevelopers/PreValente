import React from 'react'
import stylesModal from './Modal.module.css'
import { VscChromeClose } from 'react-icons/vsc';

function Modal({ children, stateModalDoc, changeModalDoc }) {
    return (
        <>
            {stateModalDoc &&
                <div className={stylesModal.overlay}>
                    <div className={stylesModal.overlay__container}>
                        <div className={stylesModal.container__header}>
                            <div className={stylesModal.bar}>
                                <button className={stylesModal.bar__button} onClick = { () => changeModalDoc(false)}><VscChromeClose /></button>
                            </div>
                        </div>
                        <div className={stylesModal.container__body}>
                            <div className={stylesModal.body__head}>
                                <h1 className={stylesModal.body__title}>Documentos cargados </h1>
                            </div>
                            <div className={stylesModal.head__content}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Modal