import React from 'react'
import stylesModal from './Modal.module.css'
import { VscChromeClose } from 'react-icons/vsc';

function Modal() {
  return (
    <div>
        <div className={stylesModal.overlay}>
            <div className={stylesModal.overlay__container}>
                <div className={stylesModal.container__header}>
                    <div className={stylesModal.container__info}>subtitulo</div>
                    <div className={stylesModal.button__cerrar}>
                        <button className={stylesModal.button__icon}><VscChromeClose /></button>
                    </div>
                </div>
                <div className={stylesModal.container__body}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal