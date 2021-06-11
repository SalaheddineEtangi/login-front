import {useState} from 'react'

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const [showPwdSecRules, setShowPwdSecRules] = useState(false)

    const handleInputChange = e => {
        setShowPwdSecRules(true)
        const {name, value} = e.target
        const fieldValue = {[name]: value}
        setValues({
            ...values,
            ...fieldValue
        })
        validate(fieldValue)
    }

    const validate = (fieldValues = values) => {
        let temp = {}
        if('email' in fieldValues){
            temp.emailRequired = fieldValues.email ? '' : 'Veuillez entrer un e-mail.'
            temp.emailFormat = (/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(fieldValues.email) ? '' : 'Veuillez entrer un e-mail ou mot de passe valide.'
        }
        if('password' in fieldValues){
            temp.passwordRequired = fieldValues.password ? '' : 'Veuillez entrer un mot de passe.'
            temp.passwordLoginFormat = fieldValues.password.length >= 8 ? '' : 'Veuillez entrer un mot de passe.'
            temp.passwordSignUpFormat = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/).test(fieldValues.password) ? '' : 'Veuillez entrer un mot de passe respectant les règles ci-dessous'
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
        errors,
        setErrors, 
        validate, 
        showPwdSecRules
    }
}

export default useForm