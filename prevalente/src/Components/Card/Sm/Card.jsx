import React from 'react'
import stylesCard from './Card.module.css'
import { VscInfo } from 'react-icons/vsc';


function Card({ iconSource, title, cantidadSolicit,url }) {
  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.box__header}>
        <img className={stylesCard.header__icon} src={iconSource} alt="Icon" srcset="" />
      </div>
      <div className={stylesCard.box__body}>
        <h1 className={stylesCard.body__title}>{title}</h1>
      </div>
      <hr />
      <div className={stylesCard.box__footer}>
        <h6 className={stylesCard.footer__link}><VscInfo />{cantidadSolicit} {url}</h6>
      </div>
    </div>
  )
}

export default Card