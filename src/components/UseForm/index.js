import {useState} from 'react'

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const [validations, setValidations] = useState({})
    const [showPwdSecRules, setShowPwdSecRules] = useState(false)

    const handleInputChange = e => {
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
        setErrors({
            ...temp
        })

        if(fieldValues === values){
            return Object.values(temp).every(x => x === '')
        }
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
        showPwdSecRules
    }
}

export default useForm