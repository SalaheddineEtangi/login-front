import React from 'react';
import {Link} from 'react-router-dom';

const AlreadyClient = props => {
    return(
        <div>
            <b>Déjà client ?</b><br></br>
            <input type="email" /><br></br>
            <input type="password" /><br></br>
            <Link to={''}>
                Mot de passe oublié ?
            </Link>
            <button>Se connecter</button><br></br>
            <hr></hr>
            <b>Nouveau client ?</b><br></br>
            <button>Créer un compte</button>
        </div>
    )
}

export default AlreadyClient