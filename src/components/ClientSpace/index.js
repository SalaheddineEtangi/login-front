import React from 'react'
import AppHeader from '../AppHeader'
import './index.css'

const ClientSpace = () => {
    return(
        <div>
            <AppHeader />
            <div className="content">
                <div className="avatar">
                    <img src="https://i2.cdscdn.com/resources/RWD/cz/Avatar.png" alt="account avatar"/>
                </div>
                <div className="bienvenue">
                    <span className="bonjour">Bonjour <strong>{localStorage.getItem('firstName')}</strong></span>, Bienvenue parmi nos nouveaux clients
                </div>
            </div>
        </div>
    )
}

export default ClientSpace