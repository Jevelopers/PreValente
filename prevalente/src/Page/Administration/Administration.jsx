import React from 'react'
import stylesAdministration from './Administration.module.css'
import Card from '../../Components/Card/Sm/Card'


//Importacion de multimedia
import iconFactory from '../../Image/factory.svg'
import iconLine from '../../Image/line.svg'
import iconuser from '../../Image/user.svg'
import iconconfig from '../../Image/config.svg'

//Arreglo de Objetos CARD
const datoCards = [
    {
        id: 1,
        icon: iconFactory,
        title: "Solicitudes de creación de empresa",
        url: "solicitud sin tratar",
        cantidadSolicit: 5
    },
    {
        id: 2,
        icon: iconLine,
        title: "Indicadores",
        url: "Indicador sin tratar",
        cantidadSolicit: 2
    },
    {
        id: 3,
        icon: iconuser,
        title: "Inscripción de empleados en empresas",
        url: "Inscripción sin tratar",
        cantidadSolicit: 3
    },
    {
        id: 4,
        icon: iconconfig,
        title: "Gestión de usuarios",
        url: "Gestión sin tratar",
        cantidadSolicit: 1
    }

]

function Inicio() {
    return (
        <div className={stylesAdministration.container}>
            <div className={stylesAdministration.container__header}>
                <h3 className={stylesAdministration.container__subtitle}>Dashboard</h3>
                <h1 className={stylesAdministration.container__title}>Buenos diás,John!</h1>
            </div>
            <div className={stylesAdministration.container__body}>
                <div className={stylesAdministration.body__grid}>
                    <Card  icon={iconFactory} title={'Solicitudes de creación de empresa'} cantidadSolicit={5} />
                    <Card  icon={iconLine} title={'Indicadores'} cantidadSolicit={2} />
                    <Card  icon={iconuser} title={'Inscripción de empleados en empresas'} cantidadSolicit={4} />
                    <Card  icon={iconconfig} title={'Gestión de usuarios'} cantidadSolicit={1} />
                </div>
            </div>
        </div>
    )
}

export default Inicio