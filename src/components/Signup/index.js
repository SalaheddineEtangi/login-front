import React from 'react';
import {Grid, TextField, Button} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom';
import useForm from '../UseForm'
import Logo from '../Logo'
import Note from '../Note'
import './index.css'

const initialFieldValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

const PwdSecRules = () => {
    return(
        <div className="pwdSecRules">
            Sécurité<br/><br/>

            Pour votre sécurité, utilisez un mot de passe contenant :<br/>
            1 lettre minuscule<br/>
            1 lettre majuscule<br/>
            1 chiffre<br/>
            entre 8 et 32 caractères
        </div>
    )
}

const Signup = () => {

    const {
        values,
        setValues,
        handleInputChange,
        errors, 
        setErrors,
        validate, 
        showPwdSecRules
    } = useForm(initialFieldValues)

    const handleSubmit = () => {}

    const emailErrors = errors.emailRequired || errors.emailFormat
    const passwordErrors = errors.passwordRequired || errors.passwordSignUpFormat

    return(
        <div>
            <div className="signUpForm">
                <Logo />
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <legend>
                        <span>Nouveau client ?</span>
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
                        {showPwdSecRules && <PwdSecRules />}
                        <div className="textField">
                            <TextField
                            type="password"
                            name="confirmPassword"
                            variant="outlined"
                            label="Confirmer mot de passe"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            //{...(passwordErrors && {error:true, helperText: passwordErrors})}
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
                        <div>
                            <Button
                            variant="contained"
                            color="primary"
                            className="button"
                            type="submit"
                            >
                                Créer un compte
                            </Button>            
                        </div>
                    </Grid>
                </form>
            </div>
            <div className="signUpToLogin">
                <legend>
                    <span>Déjà client ?</span>
                </legend>   
                <div>
                    <Link to={'/'} className="linkButton">
                        <Button
                        variant="outlined"
                        color="primary"
                        className="button"
                        >
                            Se connecter
                        </Button>  
                    </Link>          
                </div>             
            </div>
            <Note />
        </div>
    )
}

export default Signup