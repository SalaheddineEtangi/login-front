import React from 'react'
import {Grid, TextField, Button} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Logo from '../Logo'
import './index.css'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const handleSubmit = () => {}

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
                        /*value={values.email}
                        onChange={handleInputChange}
                        {...(emailErrors && {error:true, helperText: emailErrors})}
                        fullWidth={true}*/
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
                        color="primary"
                        className="button"
                        type="submit"
                        >
                            Valider
                        </Button>            
                    </div>
                    <div className="backToLogin">
                        <Link to={'/'} className="backToLogin">
                            Retour à la connexion
                        </Link>
                    </div>
                </Grid>
            </form>
        </div>
    )
}

export default ForgotPassword