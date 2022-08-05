import React from 'react'
import stylesNavegationBar from './NavegationBar.module.css'

import { FaBrain } from "react-icons/fa";
import { VscSearch,VscChromeClose,VscGear, VscFolderLibrary, VscOutput, VscAccount,VscMenu } from 'react-icons/vsc';


function NavegationBar() {
  return (
    <div className={stylesNavegationBar.container}>
      <div className={stylesNavegationBar.container__navbar}>
        <div className={stylesNavegationBar.brand}>
          <h1 className={stylesNavegationBar.brand__logotipo}><FaBrain /></h1>
          <h1 className={stylesNavegationBar.brand__logotipotext}>Gente PreValente</h1>
        </div>
        <div className={stylesNavegationBar.search}>
          <form className={stylesNavegationBar.search__frm}>
            <button type='submit' className={stylesNavegationBar.search__button}><VscSearch /></button>
            <input type="text" placeholder='Buscar..' className={stylesNavegationBar.search__input} />
          </form>
        </div>
        <nav className={stylesNavegationBar.nav}>
          <div className={stylesNavegationBar.btn_toggle__close}>
           <VscChromeClose />
          </div>
          <ul className={stylesNavegationBar.menu}>
            <li className={stylesNavegationBar.menu__item}><VscGear /> Administración</li>
            <li className={stylesNavegationBar.menu__item}><VscFolderLibrary /> Mi empleo</li>
            <li className={stylesNavegationBar.menu__item}><VscOutput /> Mi CV</li>
            <li className={stylesNavegationBar.menu__item}><VscAccount /> Usuario</li>
          </ul>
        </nav>
        <div className={stylesNavegationBar.btn_toggle__menu}>
          <VscMenu />
        </div>
      </div>
    </div>
  )
}

export default NavegationBar