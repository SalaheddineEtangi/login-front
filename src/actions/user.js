import api from './api'

export const ACTION_TYPES = {
    CREATE_USER: 'CREATE_USER',
    CREATE_CUSTOMER : 'CREATE_CUSTOMER',
    UPDATE: 'UPDATE',
    FORGOT: 'FORGOT',
    AUTHENTICATE: 'AUTHENTICATE'
}

const formatData = data => {
    if('password' in data){
        return {
            id: 1,
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

export const createUser = (data) => dispatch => {
    data = formatData(data)
    api.user().createUser(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_USER,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
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
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('token', response.data.token)           
                localStorage.setItem('code', response.data.code)
                onSuccess()
            }           
        })
        .catch(err => console.log(err))
}

export const forgot = (data) => dispatch => {
    data = formatData(data)
    api.user().forgot(data)
        .then(() => {
            dispatch({
                type: ACTION_TYPES.FORGOT,
                payload: data.email
            })
        })
        .catch(err => console.log(err))
}

export const update = (id, data) => dispatch => {
    data = formatData(data)
    api.user().update(id, data)
        .then(() => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: {id, ...data}
            })
        })
        .catch(err => console.log(err))
}

export const createCustomer = (data) => dispatch => {
    data = formatData(data)
    api.user().createCustomer(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_CUSTOMER,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}