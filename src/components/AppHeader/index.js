import React from 'react'
import {useHistory} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import clientAccountLogo from '../../assets/cdiscount_logo.svg'

const AppHeader = () => {

    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('firstName')
        history.push('/')
      }

    return(
        <AppBar>
        <Toolbar>
            <Grid
            justify="space-between"
            container 
            spacing={2}
            >
                <Grid item xs={10} sm={10}>
                    <img 
                        src = { clientAccountLogo }      
                        alt = "logo" 
                    />
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Button 
                    color="secondary" 
                    onClick={() => {logout()}}
                    >
                        Se déconnecter
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
        </AppBar>
    )
}

export default AppHeader