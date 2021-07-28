import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid, TextField, Button} from '@material-ui/core'
import * as actions from '../../actions/user'
import Logo from '../Logo'
import useForm from '../UseForm'
import './index.css'

const initialFieldValues = {
    code: ''
}

const TwoFactorsAuth = props => {

    props.fetchCustomerById(parseInt(localStorage.getItem('id')))

    const {
        values,
        handleInputChange,
    } = useForm(initialFieldValues)

    const history = useHistory()

    const onSuccess = () => {
        if(localStorage.getItem('firstName') !== null){
            history.push('/clientSpace')
        }
        else{
            history.push('/clientAccount')
        }
        localStorage.removeItem('twoFactorsAuthToken')
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.verifyCode(values, () => onSuccess())
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
                        name="verification_code"
                        variant="outlined"
                        label="Code"
                        value={values.verification_code}
                        onChange={handleInputChange}
                        fullWidth={true}
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
                <Link 
                to={'/'} 
                className="backToLogin"
                onClick={() => (localStorage.removeItem('twoFactorsAuthToken'))}
                >
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
    fetchCustomerById: actions.fetchCustomerById,
    verifyCode: actions.verifyCode
}

export default connect(mapStateToProps, mapActionToProps)(TwoFactorsAuth)