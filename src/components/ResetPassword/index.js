import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import * as actions from '../../actions/user'
import clientAccountLogo from '../../assets/cdiscount_logo.svg'
import useForm from '../UseForm'
import './index.css'

  const initialFieldValues = {
    password: ''
}

const ResetPassword = props => {        
  const {
    values,
    handleInputChange,
} = useForm(initialFieldValues)

const history = useHistory()

const id = parseInt(localStorage.getItem('id'))

  const handleSubmit = e => {
    e.preventDefault()
    props.resetPassword(id, values, () => history.push('/passwordChanged'))
    localStorage.removeItem('id') 
    localStorage.removeItem('email') 
    localStorage.removeItem('resetPasswordToken')    
  }

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
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
              Réinitialisation de mot de passe
            </Typography>  
            <div id="lastField">       
                <TextField                   
                    type="password"
                    name="password"
                    label="Nouveau mot de passe"
                    fullWidth
                    value={values.password}
                    onChange={handleInputChange}
                />
            </div>
            <Button
                variant="contained"
                style={{color: 'white', backgroundColor: 'rgb(44, 176, 74)'}}
                className="button"
                type="submit"
                >
                    Réinitialiser
            </Button> 
          </form>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  usersList: state.user.users
})

const mapActionToProps = {
  resetPassword: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(ResetPassword)