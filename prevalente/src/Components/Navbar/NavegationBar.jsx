import React from 'react'
import { useState } from 'react';
import stylesNaveagtionBar from './NavegationBar.module.css'
import { Link } from "react-router-dom";

//Importación de multimedia - Icons
import { FaBrain } from "react-icons/fa";
import { VscSearch, VscGear, VscFolderLibrary, VscOutput, VscAccount,VscMenu,VscChromeClose } from 'react-icons/vsc';

function NavegationBar() {

  const [click, setClick] = useState(false);
  const handleClick = () =>setClick(!click);


  return (
    <div className={stylesNaveagtionBar.navbar}>
      <div className={stylesNaveagtionBar.navbar__brand}>
        <h1 className={stylesNaveagtionBar.brand__logotipo}><FaBrain /></h1>
        <Link to="Administration" className={stylesNaveagtionBar.brand__text}>Gente PreValente</Link>
      </div>

      <div className={stylesNaveagtionBar.search}>
        <form className={stylesNaveagtionBar.search__frm}>
          <button type='submit' className={stylesNaveagtionBar.search__button}><VscSearch /></button>
          <input type="text" placeholder='Buscar..' className={stylesNaveagtionBar.search__input} />
        </form>
      </div>

      <ul className={stylesNaveagtionBar.menu}>
        <li className={stylesNaveagtionBar.menu__item} >
          <Link to="Administration" className={stylesNaveagtionBar.menu__link}><VscGear /> Administración</Link>
        </li>
        <li className={stylesNaveagtionBar.menu__item} >
          <Link to="Solicitud" className={stylesNaveagtionBar.menu__link}><VscFolderLibrary /> Mi empleo</Link>
        </li>
        <li className={stylesNaveagtionBar.menu__item} >
          <Link to="Cv" className={stylesNaveagtionBar.menu__link}><VscOutput /> Mi CV</Link>
        </li>
        <li className={stylesNaveagtionBar.menu__item} >
          <Link to="Usuario" className={stylesNaveagtionBar.menu__link}><VscAccount /> Usuario</Link>
        </li>
      </ul>
      <div className={stylesNaveagtionBar.toogle} onClick={handleClick}>
        {click ? <VscChromeClose /> : <VscMenu />}
      </div>
    </div>

  )
}

export default NavegationBar