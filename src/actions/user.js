import api from './api'

export const ACTION_TYPES = {
    CREATE_USER: 'CREATE_USER',
    CREATE_CUSTOMER : 'CREATE_CUSTOMER',
    UPDATE: 'UPDATE',
    FORGOT: 'FORGOT',
    AUTHENTICATE: 'AUTHENTICATE',
    VERIFY_CODE: 'VERIFY_CODE',
    FETCH_CUSTOMER_BY_ID: 'FETCH_CUSTOMER_BY_ID'
}

const formatData = data => {
    if('verification_code' in data){
        return {
            verification_code: parseInt(data.verification_code)
        }
    }
    if('password' in data){
        if('email' in data){
            return {
                id: 1,
                ...data
            }
        }
        return {
            id: parseInt(localStorage.getItem('id')),
            email: localStorage.getItem('email'),
            ...data
        }
    }
    else if('email' in data){
        return {
            id: 1,
            ...data,
            password: ''
        }
    }
    else{
        return {
            id: parseInt(localStorage.getItem('id')),
            email: localStorage.getItem('email'),
            ...data,
            password: ''
        }
    }
}

export const createUser = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.user().createUser(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_USER,
                payload: response.data
            })
            if(response.status === 201){
                localStorage.removeItem('accountCreationError')
                onSuccess()
            }
        })
        .catch(err => {
            localStorage.setItem('accountCreationError', "Cette adresse e-mail est déjà utilisée. Veuillez en saisir une nouvelle.")
            window.location.reload()
            console.log(err)
        })
}

export const authenticate = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.user().authenticate(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.AUTHENTICATE,
                payload: response.data
            })
            if(response.status === 201){
                localStorage.removeItem('connexionError')
                localStorage.removeItem('accountCreationError')
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('twoFactorsAuthToken', response.data.token)           
                onSuccess()
            }       
        })
        .catch(err => {
                localStorage.setItem('connexionError', "Votre e-mail ou votre mot de passe n’est pas correct.")
                window.location.reload()
                console.log(err)
            })
}

export const verifyCode = (data, onSuccess) => dispatch => {
    data = formatData(data)
    console.log(data)
    api.user().verifyCode(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.VERIFY_CODE,
                payload: response.data
            })
            if(response.status === 201){
                localStorage.setItem('token', response.data.token)           
                onSuccess()
            } 
        })
        .catch(err => console.log(err))
}

export const forgot = (data) => dispatch => {
    data = formatData(data)
    api.user().forgot(data)
        .then((res) => {
            dispatch({
                type: ACTION_TYPES.FORGOT,
                payload: data.email
            })
            if(res.status === 201){
                localStorage.removeItem('accountCreationError')
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('resetPasswordToken', res.data.token)               
                localStorage.setItem('forgotPwdSuccess', "Nous venons d'envoyer un mail à l'adresse.");
                window.location.reload()
            }
        })
        .catch(err => {
            localStorage.removeItem('accountCreationError')
            localStorage.setItem('forgotPwdError', "L'adresse e-mail n'est pas reconnue ou a été archivée. Nous vous invitons à vérifier l'orthographe ou à créer un compte.")
            window.location.reload()
            console.log(err)
        })
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.user().update(id, data)
        .then((res) => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: {id, ...data}
            })
            if(res.status === 204){
                onSuccess()
            }
        })
        .catch(err => console.log(err))
}

export const createCustomer = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.user().createCustomer(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_CUSTOMER,
                payload: response.data
            })
            if(response.status === 201){
                localStorage.setItem('firstName', response.data.first_name)
                onSuccess()
            }
        })
        .catch(err => console.log(err))
}

export const fetchCustomerById = (id) => dispatch => {
    api.user().fetchCustomerById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_CUSTOMER_BY_ID,
                payload: response.data
            })
            if(response.status === 200){
                localStorage.setItem('firstName', response.data.first_name)
            }
        })
        .catch(err => {
            console.log(err)
        })
}