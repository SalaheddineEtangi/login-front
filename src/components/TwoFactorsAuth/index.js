import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Grid, TextField, Button} from '@material-ui/core'
import Logo from '../Logo'
import useForm from '../UseForm'
import './index.css'

const initialFieldValues = {
    code: ''
}

const TwoFactorsAuth = () => {

    const {
        values,
        handleInputChange,
    } = useForm(initialFieldValues)

    const history = useHistory()

    const [errors, setErrors] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(values.code === localStorage.getItem('code')){
            history.push('/clientAccount')
        }
        else{
            setErrors('Code de vérification erroné !')
        }
    }

    return(
        <div className="forgotPwdForm">
            <Logo />
            <legend>
                <span>Code de vérification</span>
            </legend>
            <p>
                Merci de saisir le code à 8 chiffres de vérification que vous avez reçu par email.
            </p>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container>
                    <div className="textField">
                        <TextField
                        name="code"
                        variant="outlined"
                        label="Code"
                        value={values.code}
                        onChange={handleInputChange}
                        fullWidth={true}
                        {...(errors && {error:true, helperText: errors})}
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

export default TwoFactorsAuth