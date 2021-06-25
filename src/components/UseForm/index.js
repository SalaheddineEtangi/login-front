import {useState} from 'react'

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const [validations, setValidations] = useState({})
    const [showPwdSecRules, setShowPwdSecRules] = useState(false)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        const fieldValue = {[name]: value}
        setValues({
            ...values,
            ...fieldValue
        })
        validate(fieldValue)
    }

    const handlePasswordInputChange = e => {
        setShowPwdSecRules(true)
        handleInputChange(e)
    }

    const validate = (fieldValues = values) => {
        let temp = {}
        let validations = {}
        if('email' in fieldValues){
            temp.emailRequired = fieldValues.email ? '' : 'Veuillez entrer un e-mail.'
            temp.emailFormat = (/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:+)\])$/).test(fieldValues.email) ? '' : 'Veuillez entrer un e-mail ou mot de passe valide.'
        }
        if('password' in fieldValues){
            temp.passwordRequired = fieldValues.password ? '' : 'Veuillez entrer un mot de passe.'
            temp.passwordLoginFormat = fieldValues.password.length >= 8 ? '' : 'Veuillez entrer un mot de passe.'
            temp.passwordSignUpFormat = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/).test(fieldValues.password) ? '' : 'Veuillez entrer un mot de passe respectant les règles ci-dessous'
            validations.passwordContainsDigits = (/^.*[0-9].*$/).test(fieldValues.password)
            validations.passwordContainsLowerCase = (/^.*[a-z].*$/).test(fieldValues.password)
            validations.passwordContainsUpperCase = (/^.*[A-Z].*$/).test(fieldValues.password)
            validations.passwordContains8Letters = fieldValues.password.length >= 8 && fieldValues.password.length <= 32
            setValidations({
                ...validations
            })
        }
        if('confirmPassword' in fieldValues){
            temp.confirmPassword = fieldValues.confirmPassword === values.password  ? '' : 'La confirmation de mot de passe est différente de celle préalablement saisie.'
        }
        if('last_name' in fieldValues){
            temp.last_name = fieldValues.last_name ? '' : 'Veuillez entrer un nom.'
        }
        if('first_name' in fieldValues){
            temp.first_name = fieldValues.first_name ? '' : 'Veuillez entrer un prénom.'
        }
        if('birth_day' in fieldValues){
            temp.birth_day = fieldValues.birth_day ? '' : 'Veuillez entrer une date.'
        }
        if('telephone' in fieldValues){
            temp.telephone = fieldValues.telephone ? '' : 'Veuillez renseigner votre numéro de téléphone.'
        }
        if('postalCode' in fieldValues){
            temp.postalCodeRequired = fieldValues.postal_code ? '' : 'Veuillez entrer un code postal.'
            temp.postalCodeFormat = (/^[0-9]{4}$/).test(fieldValues.postal_code) ? '' : 'Le code postal est incorrect. Exemple : 3311.'
        }
        if('city' in fieldValues){
            temp.city = fieldValues.city ? '' : 'Veuillez entrer une ville.'
        }
        if('address' in fieldValues){
            temp.address = fieldValues.address ? '' : 'Veuillez entrer une adresse.'
        }

        setErrors({
            ...temp
        })

        if(fieldValues === values){
            return Object.values(temp).every(x => x === '')
        }
    }

    const validateLogin = (fieldValues = values) => {
        let temp = {}
        if('email' in fieldValues){
            temp.emailRequired = fieldValues.email ? '' : 'Veuillez entrer un e-mail.'
            temp.emailFormat = (/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:+)\])$/).test(fieldValues.email) ? '' : 'Veuillez entrer un e-mail ou mot de passe valide.'
        }
        if('password' in fieldValues){
            temp.passwordRequired = fieldValues.password ? '' : 'Veuillez entrer un mot de passe.'
            temp.passwordLoginFormat = fieldValues.password.length >= 8 ? '' : 'Veuillez entrer un mot de passe.'
        }

        setErrors({
            ...temp
        })

        if(fieldValues === values){
            return Object.values(temp).every(x => x === '')
        }
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

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
        setErrors({})
    }

    return{
        values,
        setValues,
        handleInputChange,
        handlePasswordInputChange,
        errors,
        setErrors, 
        validations,
        validate, 
        validateLogin,
        showPwdSecRules,
        formatData,
        resetForm
    }
}

export default useForm