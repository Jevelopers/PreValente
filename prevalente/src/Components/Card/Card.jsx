import React from 'react'
import stylesCard from './Card.module.css'
import { VscInfo } from 'react-icons/vsc';


function Card({title, iconSource}) {
  return (
    <div className={stylesCard.card}>
        <div className={stylesCard.box__header}>
          <img className={stylesCard.header__icon} src={iconSource} alt="" srcset="" />
        </div>
        <div className={stylesCard.box__body}>
          <a href="#rr" className={stylesCard.body__title}>{title}</a>
        </div>
        <hr />
        <div className={stylesCard.box__footer}>
          <a href="#rr" className={stylesCard.footer__link}><VscInfo />Solicitudes sin tratar</a>
        </div>
      </div>
  )
}

export default Card