import React from 'react'
import stylesError404 from '../404/Err404.module.css'
import imagenError404 from '../../Image/error404.svg'

function Err404() {
  return (
    <div className={stylesError404.container}>
      <div className={stylesError404.content}>
        <img src={imagenError404} className={stylesError404.content__image} alt="" srcset="" />
        <h1 className={stylesError404.content__title}>Error 404</h1>
        <h4 className={stylesError404.content__subtitle}>Página no encontrada</h4>
      </div>
    </div>
  )
}

export default Err404