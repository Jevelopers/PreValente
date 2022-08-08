import React from 'react'
import stylesCard from './Card.module.css'
import { VscInfo } from 'react-icons/vsc';
import { Link } from "react-router-dom";


function Card({icon, title, cantidadSolicit}) {
  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.box__header}>
        <img className={stylesCard.header__icon} src= {icon} alt="Icon" srcset="" />
      </div>
      <div className={stylesCard.box__body}>
        <Link to="Solicitar" className={stylesCard.body__title}>{title}</Link>
      </div>
      <hr />
      <div className={stylesCard.box__footer}>
        <h6 className={stylesCard.footer__link}><VscInfo />{cantidadSolicit} Notificaciones sin tratar</h6>
      </div>
    </div>
  )
}

export default Card