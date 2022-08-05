import React from 'react'
import stylesSolicitud from './Solicitud.module.css'

function Solicitud() {
  return (
    <div className={stylesSolicitud.container}>
      <div className={stylesSolicitud.container.header}>
        <h3 className={stylesSolicitud.container__subtitle}>Administracion</h3>
        <h1 className={stylesSolicitud.container__title}>Solicitudes de empresas</h1>
      </div>
      <div className={stylesSolicitud.container__body}>
        <div className={stylesSolicitud.body__slider}>
        </div>
        <div className={stylesSolicitud.container__footer}>
          <div className={stylesSolicitud.pagination}>
            AQUI VA LA PAGINACION
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solicitud