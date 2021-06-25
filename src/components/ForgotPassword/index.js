import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid, TextField, Button} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import * as actions from '../../actions/user'
import Logo from '../Logo'
import useForm from '../UseForm'
import './index.css'

const initialFieldValues = {
    email: ''
}

const ForgotPassword = props => {

    const {
        values,
        handleInputChange,
        errors, 
        validate,
        resetForm
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){
            props.forgotPwd(values)
            resetForm()
        }
    }

    const forgotPwdEmailFormat = errors.emailFormat ? 'Veuillez entrer un e-mail valide.' : ''

    const emailErrors = errors.emailRequired || forgotPwdEmailFormat

    return(
        <div className="forgotPwdForm">
            <Logo />
            <legend>
                <span>Mot de passe oublié ?</span>
            </legend>
            <p>
                Indiquez votre email ci-dessous puis validez.<br/>
                Vous recevrez dans quelques instants, par email, un lien vous permettant de réinitialiser votre mot de passe.
            </p>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                    <div className="button">
                        <Button
                        variant="contained"
                        style={{color: 'white', backgroundColor: 'rgb(44, 176, 74)'}}
                        className="button"
                        type="submit"
                        >
                            Valider
                        </Button>            
                    </div>
                </Grid>
            </form>
            <div className="backToLogin">
                <Link to={'/'} className="backToLogin">
                    Retour à la connexion
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    usersList: state.user.users
})

const mapActionToProps = {
    forgotPwd: actions.forgot
}

export default connect(mapStateToProps, mapActionToProps)(ForgotPassword)