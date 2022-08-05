import React from 'react'
import stylesDashboard from './Dashboard.module.css'
import Card from '../Card/Card'

//Importacion de multimedia
import iconFactory from '../Assets/factory.svg'
import iconLine from '../Assets/line.svg'
import iconuser from '../Assets/user.svg'
import iconconfig from '../Assets/config.svg'

//Arreglo de Objetos CARD
const datoCards = [
    {
        id: 1,
        icon: iconFactory,
        title: "Solicitudes de creación de empresa",
        cantidadSolicit: 5
    },
    {
        id: 2,
        icon: iconLine,
        title: "Indicadores",
        cantidadSolicit: 2
    },
    {
        id: 3,
        icon: iconuser,
        title: "Inscripción de empleados en empresas",
        cantidadSolicit: 3
    },
    {
        id: 4,
        icon: iconconfig,
        title: "Gestión de usuarios",
        cantidadSolicit: 1
    }

]

function Dashboard() {
    return (
        <div className={stylesDashboard.container}>
            <div className={stylesDashboard.container.header}>
                <h3 className={stylesDashboard.container__subtitle}>Dashboard</h3>
                <h1 className={stylesDashboard.container__title}>Buenos diás,John!</h1>
            </div>
            <div className={stylesDashboard.container__body}>
                <div className={stylesDashboard.body__grid}>
                    {
                        datoCards.map(datoCard =>(
                            <div key={datoCard.id}>
                                <Card title={datoCard.title} iconSource={datoCard.icon} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard