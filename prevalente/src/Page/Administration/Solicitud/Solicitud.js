import React from 'react'
import stylesSolicitud from './Solicitud.module.css'
import Card from '../../../Components/Card/Lg/Card';


function Solicitud() {
  return (
    <div className={stylesSolicitud.container}>
      <div className={stylesSolicitud.container.header}>
        {/** Aqui va el Breandcrumb */}
        Aqui va el Breandcrumb
      </div>
      <div className={stylesSolicitud.container__body}>
        {/** Aqui va la tarjeta */}
        <Card />
      </div>
    </div>
  )
}

export default Solicitud