import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import * as actions from '../../actions/user'
import useForm from '../UseForm'
import AppHeader from '../AppHeader'
import './index.css'
import { useHistory } from 'react-router-dom'

  const initialFieldValues = {
    civility: 'madame',
    last_name: '',
    first_name: '',
    birth_day: '2021-06-24',
    telephone: '',
    country: 'France',
    postal_code: '',
    city: '',
    address: ''
}

const ClientAccount = props => {        
  const {
    values,
    handleInputChange,
    validate, 
    errors
} = useForm(initialFieldValues)

const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    if(validate()){
      props.createCustomer(values)
      history.push('/clientSpace')
    }
  }

  const postalCodeErrors = errors.postalCodeRequired || errors.postalCodeFormat

  return (
    <div>
        <AppHeader />
        <div className="clientForm">
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
              Création de compte
            </Typography>         
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup name="civility" value={values.civility} onChange={handleInputChange}>
                    <FormControlLabel value="madame" control={<Radio />} label="Madame" />
                    <FormControlLabel value="monsieur" control={<Radio />} label="Monsieur" />
                  </RadioGroup>
                </FormControl>
              </Grid>             
              <Grid item xs={12} sm={6}>
                <TextField
                  name="last_name"
                  label="Nom"
                  fullWidth
                  value={values.last_name}
                  onChange={handleInputChange}
                  {...(errors.last_name && {error:true, helperText: errors.last_name})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first_name"
                  label="Prénom"
                  fullWidth
                  value={values.first_name}
                  onChange={handleInputChange}
                  {...(errors.first_name && {error:true, helperText: errors.first_name})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="birth_day"
                  label="Date de naissance (mm/jj/aaaa)"
                  type="date"
                  format="dd/MM/yyyy"
                  value={values.birth_day}
                  onChange={handleInputChange}
                  {...(errors.birth_day && {error:true, helperText: errors.birth_day})}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="telephone"
                  label="Téléphone"
                  fullWidth
                  value={values.telephone}
                  onChange={handleInputChange}
                  {...(errors.telephone && {error:true, helperText: errors.telephone})}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined">
                  <InputLabel>Pays</InputLabel>
                  <Select
                    name="country"
                    value={values.country}
                    onChange={handleInputChange}
                    label="Pays"
                    fullWidth
                  >
                    <MenuItem value="France">France</MenuItem>
                    <MenuItem value="Autriche">Autriche</MenuItem>
                    <MenuItem value="Belgique">Belgique</MenuItem>
                    <MenuItem value="Suisse">Suisse</MenuItem>
                    <MenuItem value="Allemagne">Allemagne</MenuItem>
                    <MenuItem value="Espagne">Espagne</MenuItem>
                    <MenuItem value="Irlande">Irlande</MenuItem>
                    <MenuItem value="Italie">Italie</MenuItem>
                    <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                    <MenuItem value="Pays-bas">Pays-bas</MenuItem>
                    <MenuItem value="Portugal">Portugal</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="postal_code"
                  label="Code Postal"
                  fullWidth
                  value={values.postal_code}
                  onChange={handleInputChange}
                  {...(postalCodeErrors && {error:true, helperText: postalCodeErrors})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="city"
                  label="Ville"
                  fullWidth
                  value={values.city}
                  onChange={handleInputChange}
                  {...(errors.city && {error:true, helperText: errors.city})}
                />
              </Grid>
              <Grid item xs={12} id="lastField">
                <TextField
                  name="address"
                  label="Adresse"
                  fullWidth
                  value={values.address}
                  onChange={handleInputChange}
                  {...(errors.address && {error:true, helperText: errors.address})}
                />
              </Grid>
              <Button
                variant="contained"
                style={{color: 'white', backgroundColor: 'rgb(44, 176, 74)'}}
                className="button"
                type="submit"
                >
                    Valider
              </Button> 
            </Grid>
          </form>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  usersList: state.user.users
})

const mapActionToProps = {
  createCustomer: actions.createCustomer
}

export default connect(mapStateToProps, mapActionToProps)(ClientAccount)