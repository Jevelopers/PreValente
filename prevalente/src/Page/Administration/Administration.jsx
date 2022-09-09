import React from 'react'
import stylesAdministration from './Administration.module.css'
import Card from '../../Components/Card/Sm/Card'


function Inicio() {

    const dataCardAdministration = [
        {
            id: 1,
            icon: 'iconFactory',
            title: 'Solicitudes de creación de empresa',
            linkRoute: 'solicitud',
            cantidadSolicit: 2
        },
        {
            id: 2,
            icon: 'iconLine',
            title: 'Indicadores',
            linkRoute: 'error404',
            cantidadSolicit: 4
        },
        {
            id: 3,
            icon: 'iconuser',
            title: 'Inscripción de empleados en empresas',
            linkRoute: 'error404',
            cantidadSolicit: 3
        },
        {
            id: 4,
            icon: 'iconconfig',
            title: 'Gestión de usuarios',
            linkRoute: 'error404',
            cantidadSolicit: 2
        }
    ]

    return (
        <div className={stylesAdministration.container}>
            <div className={stylesAdministration.container__header}>
                <h3 className={stylesAdministration.container__subtitle}>Dashboard</h3>
                <h1 className={stylesAdministration.container__title}>Buenos diás,John!</h1>
            </div>
            <div className={stylesAdministration.container__body}>
                <div className={stylesAdministration.body__grid}>
                    {
                        dataCardAdministration.map(card => (
                            <div key={card.id}>
                                <Card icon={card.icon} title={card.title} linkRoute={card.linkRoute} cantidadSolicit={card.cantidadSolicit} />
                            </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Inicio