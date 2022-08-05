import React from 'react'
import stylesFooter from './Footer.module.css'
import { VscGithubInverted } from 'react-icons/vsc';


function Footer() {
    return (
        <div className={stylesFooter.container__footer}>
            <h3 className={stylesFooter.footer__copyright}>Copyright 2022 Jeveloper ©  Todos los derechos reservados. | Prueba técnica  | <a href="https://github.com/Jevelopers/PreValenteApp"><VscGithubInverted /> Jeveloper</a>  </h3>
        </div>
    )
}

export default Footer