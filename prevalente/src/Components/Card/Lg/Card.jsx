import React from 'react'
import { useState } from 'react'
import stylesCardLg from './Card.module.css'
import stylesModal from '../../Modal/Modal.module.css'
import logotipoEmpresa from '../../../Image/cube.svg'
import ModalDoc from '../../Modal/ModalDoc'

import { VscLink, VscDesktopDownload, VscCheck, VscChromeClose, VscArrowLeft, VscArrowRight } from 'react-icons/vsc';

function Card() {
  //Ctr del estado del modal
  const [modalDoc, setmodalDoc] = useState(false);


  return (
    <>
      <div className={stylesCardLg.card__wrapper}>
        <div className={stylesCardLg.card}>
          <div className={stylesCardLg.card__content}>
            <div className={stylesCardLg.card__image}>
              <img className={stylesCardLg.image} src={logotipoEmpresa} alt="" srcset="" />
            </div>
            <div className={stylesCardLg.card__info}>
              <div className={stylesCardLg.info__colum}>
                <h1 className={stylesCardLg.info__title}>Nombre de la empresa</h1>
                <h6 className={stylesCardLg.info__description}>Subtitle</h6>
                <h1 className={stylesCardLg.info__title}>Razón Social</h1>
                <h6 className={stylesCardLg.info__description}>Subtitle</h6>
                <h1 className={stylesCardLg.info__title}>Tipo de identificación</h1>
                <h6 className={stylesCardLg.info__description}>Subtitle</h6>
              </div>
              <div className={stylesCardLg.info__colum}>
                <h1 className={stylesCardLg.info__title}>Identificación</h1>
                <h6 className={stylesCardLg.info__description}>Subtitle</h6>
                <h1 className={stylesCardLg.info__title}># de empleados</h1>
                <h6 className={stylesCardLg.info__description}>Subtitle</h6>
                <button className={stylesCardLg.card__button} onClick={() => setmodalDoc(!modalDoc)}><VscLink /> Ver archivos adjuntos</button>
                <ModalDoc stateModalDoc={modalDoc} changeModalDoc={setmodalDoc} >
                  <div className={stylesModal.head__content}>
                    <div className={stylesModal.content_box}>
                      <h1 className={stylesModal.head__title}>RUT PrevlalentWare</h1>
                      <h1 className={stylesModal.head__icon}><VscDesktopDownload /></h1>
                    </div>
                    <div className={stylesModal.content_box}>
                      <h1 className={stylesModal.head__title}>Logo PrevlalentWare</h1>
                      <h1 className={stylesModal.head__icon}><VscDesktopDownload /></h1>
                    </div>
                    <div className={stylesModal.content_box}>
                      <h1 className={stylesModal.head__title}>Acta de constitución PrevlalentWare</h1>
                      <h1 className={stylesModal.head__icon}><VscDesktopDownload /></h1>
                    </div>
                    <div className={stylesModal.content_box}>
                      <h1 className={stylesModal.head__title}>Cámara de Comercio Prevalentware</h1>
                      <h1 className={stylesModal.head__icon}><VscDesktopDownload /></h1>
                    </div>
                  </div>
                </ModalDoc>

              </div>
            </div>
          </div>

          <div className={stylesCardLg.card__content__button} >
            <button className={stylesCardLg.card__button}><VscChromeClose /> Rechazar</button>
            <button className={stylesCardLg.card__button}><VscCheck /> Aprobar</button>
          </div>
        </div>

        <div className={stylesCardLg.container__footer}>
          <div className={stylesCardLg.pagination}>
            <button className={stylesCardLg.pagination__button}><VscArrowLeft /></button>
              <p className={stylesCardLg.text}>Empresa 1 de 2 pendiente de aprovación</p>
            <button className={stylesCardLg.pagination__button}><VscArrowRight /></button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Card