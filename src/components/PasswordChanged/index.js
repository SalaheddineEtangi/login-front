import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import clientAccountLogo from '../../assets/cdiscount_logo.svg'
import './index.css'

const PaswordChanged = props => {        

  return (
    <div>
        <AppBar>
        <Toolbar>
            <img 
                src = { clientAccountLogo }      
                alt = "logo" 
            />
        </Toolbar>
        </AppBar>
        <div className="resetPwdForm">
            <Typography variant="h6" gutterBottom>
              Mot de passe réinitialisé
            </Typography>  
            <p>
                Vous pouvez maintenant se connecter avec votre nouveau mot de passe.
            </p>
        </div>
    </div>
  );
}

export default PaswordChanged