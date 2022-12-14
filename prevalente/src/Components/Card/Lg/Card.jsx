import React, { Fragment } from 'react'
import { useState } from 'react'
import stylesCardLg from './Card.module.css'
import stylesModal from '../../Modal/Modal.module.css'
import logotipoEmpresa from '../../../Image/cube.svg'
import ModalDoc from '../../Modal/ModalDoc'

import { VscLink, VscDesktopDownload, VscCheck, VscChromeClose, VscArrowLeft, VscArrowRight } from 'react-icons/vsc';

//Importacion de multimedia
import cube from '../../../Image/cube.svg'
import circle from '../../../Image/circle.svg'
import shape_triangle from '../../../Image/shape-triangle.svg'


function Card() {
  //Ctr del estado del modal
  const [modalDoc, setmodalDoc] = useState(false);

  const datosInfo = [
    {
      id: 1,
      logo: "cube",
      nombre: "Prevalent",
      rSocial: "Prevalentware",
      tipoIdentificacion: "NIT",
      tipoIdentificacion__descripcion: "1231234",
      empleados: 10
    }
  ]

  return (
    <Fragment>
      <div className={stylesCardLg.card__wrapper}>
        <div className={stylesCardLg.card}>
          <div className={stylesCardLg.card__content}>
            <div className={stylesCardLg.card__image}>
              <img className={stylesCardLg.image} src={logotipoEmpresa} alt="" srcset="" />
            </div>
            <div className={stylesCardLg.card__info}>
              <div className={stylesCardLg.info__colum}>
                <div className={stylesCardLg.info__box}>
                  <h1 className={stylesCardLg.info__title}>Nombre de la empresa</h1>
                  <h6 className={stylesCardLg.info__description}>nombre </h6>
                </div>

                <div className={stylesCardLg.info__box}>
                  <h1 className={stylesCardLg.info__title}>Razon social</h1>
                  <h6 className={stylesCardLg.info__description}>rSocial</h6>
                </div>

                <div className={stylesCardLg.info__box}>
                  <h1 className={stylesCardLg.info__title}>Tipo de identidad</h1>
                  <h6 className={stylesCardLg.info__description}>tipoIdentificacion</h6>
                </div>
              </div>

              <div className={stylesCardLg.info__colum}>
                <div className={stylesCardLg.info__box}>
                  <h1 className={stylesCardLg.info__title}>Identificaci??n</h1>
                  <h6 className={stylesCardLg.info__description}>tipoIdentificacion__descripcion</h6>
                </div>
                <div className={stylesCardLg.info__box}>
                  <h1 className={stylesCardLg.info__title}># de empleados</h1>
                  <h6 className={stylesCardLg.info__description}>empleados</h6>
                </div>
                <div className={stylesCardLg.info__box__modal}>
                  {/** Implementacion de modal en un boton */}
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
                        <h1 className={stylesModal.head__title}>Acta de constituci??n PrevlalentWare</h1>
                        <h1 className={stylesModal.head__icon}><VscDesktopDownload /></h1>
                      </div>
                      <div className={stylesModal.content_box}>
                        <h1 className={stylesModal.head__title}>C??mara de Comercio Prevalentware</h1>
                        <h1 className={stylesModal.head__icon}><VscDesktopDownload /></h1>
                      </div>
                    </div>
                  </ModalDoc>
                </div>
              </div>
            </div>
          </div>
          {/**Botones de accion */}
          <div className={stylesCardLg.card__content__button} >
            <button className={stylesCardLg.card__button}><VscChromeClose /> Rechazar</button>
            <button className={stylesCardLg.card__button}><VscCheck /> Aprobar</button>
          </div>
        </div>
      </div>
      {/**Pie de pagina -->Paginacion */}
      <div className={stylesCardLg.container__footer}>
        <div className={stylesCardLg.pagination}>
          <button className={stylesCardLg.pagination__button}><VscArrowLeft /></button>
          <p className={stylesCardLg.pagination__text}>Empresa 1 de 2 pendiente de aprovaci??n</p>
          <button className={stylesCardLg.pagination__button}><VscArrowRight /></button>
        </div>
      </div>
    </Fragment>

  )
}

export default Card