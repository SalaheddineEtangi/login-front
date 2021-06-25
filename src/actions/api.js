import axios from 'axios'

const baseUrl = "http://localhost:52935/"

const api = {
    user(url = baseUrl) {
        return { 
            createUser: newUser => axios.post(url + 'users/register', newUser), 
            authenticate: user => axios.post(url + 'users/authenticate', user),
            forgot: user => axios.post(url + 'users/change-password', user),
            update: (id, updatedUser) => axios.put(url + 'users/set-new-password/' + id, updatedUser),
            createCustomer: newCustomer => axios.post(url + 'customers/insert', newCustomer)
        }
    } 
}

export default api