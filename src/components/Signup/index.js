import React from 'react';
import {Grid, TextField, Button} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Link, useHistory} from 'react-router-dom';
import useForm from '../UseForm'
import Logo from '../Logo'
import Note from '../Note'
import './index.css'

const initialFieldValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

const Signup = () => {

    const {
        values,
        handleInputChange,
        handlePasswordInputChange,
        errors, 
        validations,
        showPwdSecRules,
        validate
    } = useForm(initialFieldValues)

    const history = useHistory()

    const PwdSecRules = () => {
    
        let pwdSecLevel = 0

        if(validations.passwordContainsLowerCase){
            pwdSecLevel = pwdSecLevel + 1
        }

        if(validations.passwordContainsUpperCase){
            pwdSecLevel = pwdSecLevel + 1
        }

        if(validations.passwordContainsDigits){
            pwdSecLevel = pwdSecLevel + 1
        }

        if(validations.passwordContains8Letters){
            pwdSecLevel = pwdSecLevel + 1
        }

        let secColor = "rgb(255, 61, 0)"
        let pwdSecStatus = "faible"
        let secLevelProgress = "25%"

        switch(pwdSecLevel){
            case 0 :
                secColor = "rgb(255, 61, 0)"
                pwdSecStatus = "faible"
                secLevelProgress = "0%"
                break
            case 1 :
                secColor = "rgb(255, 61, 0)"
                pwdSecStatus = "faible"
                secLevelProgress = "25%"
                break
            case 2 :
                secColor = "rgb(255, 61, 0)"
                pwdSecStatus = "faible"
                secLevelProgress = "50%"
                break
            case 3 :
                secColor = "rgb(255, 162, 0)"
                pwdSecStatus = "moyenne"
                secLevelProgress = "75%"
                break   
            case 4 :
                secColor = "rgb(44, 176, 74)"
                pwdSecStatus = "optimale"
                secLevelProgress = "100%"
                break 
            default :
                break
        }

        const lowerCaseColor = validations.passwordContainsLowerCase ? "rgb(44, 176, 74)" : "#d9d9d9"
        const upperCaseColor = validations.passwordContainsUpperCase ? "rgb(44, 176, 74)" : "#d9d9d9"
        const digitColor = validations.passwordContainsDigits ? "rgb(44, 176, 74)" : "#d9d9d9"
        const nbrCharColor = validations.passwordContains8Letters ? "rgb(44, 176, 74)" : "#d9d9d9"
        return(
            <div className="pwdSecRules">
                <div className="secLevel">
                    <div className="secLevelText">Sécurité <span style={{color: secColor}}>{pwdSecStatus}</span></div>
                    <div style={{backgroundColor: '#d9d9d9', borderRadius: '5px'}}><div style={{backgroundColor: secColor, width: secLevelProgress, height: '100%', borderRadius: '5px'}}></div></div>
                </div>              
                <p>
                    Pour votre sécurité, utilisez un mot de passe contenant :
                </p>
                <ul className="pwdSecRulesList">
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}><CheckCircleIcon style={{color: lowerCaseColor}} /><span style={{color: lowerCaseColor}}>1 lettre minuscule</span><br/></li>
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}><CheckCircleIcon style={{color: upperCaseColor}}/><span style={{color: upperCaseColor}}>1 lettre majuscule</span><br/></li>
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}><CheckCircleIcon style={{color: digitColor}}/><span style={{color: digitColor}}>1 chiffre</span><br/></li>
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}><CheckCircleIcon style={{color: nbrCharColor}}/><span style={{color: nbrCharColor}}>entre 8 et 32 caractères</span></li>
                </ul>
            </div>
        )
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){
            history.push('/')
            //props.createUser(props.usersList, values, onSuccess('Ajouté', 'success'))
        }
    }

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
                        <div className="textField" style={{display: 'flex'}}>
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
                            onChange={handlePasswordInputChange}
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
                            {...(errors.confirmPassword && {error:true, helperText: errors.confirmPassword})}
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
                            className="button"
                            style={{color: 'white', backgroundColor: 'rgb(44, 176, 74)'}}
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
                        style={{color: 'rgb(44, 176, 74)', backgroundColor: 'white', borderColor: 'rgb(44, 176, 74)'}}
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