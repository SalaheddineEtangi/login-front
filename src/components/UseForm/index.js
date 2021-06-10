import {useState} from 'react'

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
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
            temp.emailFormat = (/^$|.+@.+..+/).test(fieldValues.email) ? '' : 'Veuillez entrer un e-mail valide.'
        }
        if('password' in fieldValues){
            temp.passwordRequired = fieldValues.password ? '' : 'Veuillez entrer un mot de passe.'
            temp.passwordFormat = (/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$&*])(?=.*[A-Z]).{8,32}$/).test(fieldValues.password) ? '' : ''
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
        validate
    }
}

export default useForm