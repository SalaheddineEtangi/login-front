import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid, TextField, Button} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as actions from '../../actions/user'
import useForm from '../UseForm'
import Logo from '../Logo'
import Note from '../Note'
import './index.css'

const initialFieldValues = {
    email: '',
    password: ''
}

const Login = props => {

    const {
        values,
        handleInputChange,
        errors, 
        validateLogin
    } = useForm(initialFieldValues)

    //test3@test.com
    //Passw0rd

    const history = useHistory()

     const handleSubmit = e =>  {
        e.preventDefault()
        if(validateLogin()){
            props.authenticateUser(values, () => history.push('/twoFactorsAuth'))       
        }
    }

    const emailErrors = errors.emailRequired || errors.emailFormat
    const passwordErrors = errors.passwordRequired || errors.passwordLoginFormat

    return(
        <div>
            <div className="loginForm">
                <Logo />
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <legend>
                        <span>Déjà client ?</span>
                    </legend>
                    <Grid container>
                        <div className="textField">
                            <TextField
                            type="email"
                            name="email"
                            variant="outlined"
                            label="Email"
                            value={values.email}
                            onChange={handleInputChange}
                            {...(emailErrors && {error:true, helperText: emailErrors})}
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                )
                                }}
                            />
                        </div>
                        <div className="textField">
                            <TextField
                            type="password"
                            name="password"
                            variant="outlined"
                            label="Mot de passe"
                            value={values.password}
                            onChange={handleInputChange}
                            {...(passwordErrors && {error:true, helperText: passwordErrors})}
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon />
                                    </InputAdornment>
                                )
                                }}
                            />
                        </div>                     
                        <div className="forgotPwd">
                            <Link to={'/forgotPassword'} className="Login-link">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <div>
                            <Button
                            variant="contained"
                            style={{color: 'white', backgroundColor: 'rgb(44, 176, 74)'}}
                            className="button"
                            type="submit"
                            >
                                Se connecter
                            </Button>            
                        </div>
                    </Grid>
                </form>
            </div>
            <div className="loginToSignup">
                <legend>
                    <span>Nouveau client ?</span>
                </legend>   
                <div>
                    <Link to={'/Signup'} className="linkButton">
                        <Button
                        variant="outlined"
                        style={{color: 'rgb(44, 176, 74)', backgroundColor: 'white', borderColor: 'rgb(44, 176, 74)'}}
                        className="button"
                        >
                            Créer un compte
                        </Button>  
                    </Link>          
                </div>             
            </div>
            <Note />
        </div>
    )
}

const mapStateToProps = state => ({
    usersList: state.user.users
})

const mapActionToProps = {
    authenticateUser: actions.authenticate
}

export default connect(mapStateToProps, mapActionToProps)(Login)