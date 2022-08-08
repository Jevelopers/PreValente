import React from 'react'
import stylesSolicitud from './Solicitud.module.css'

import Modal from '../../../Components/Modal/Modal'


function Solicitud() {
  return (
    <div className={stylesSolicitud.container}>
      <div className={stylesSolicitud.container.header}>
      </div>
      <div className={stylesSolicitud.container__body}>
        <div className={stylesSolicitud.body__slider}>
          <Modal />
        </div>
        <div className={stylesSolicitud.container__footer}>
          <div className={stylesSolicitud.pagination}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solicitud