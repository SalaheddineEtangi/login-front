import axios from 'axios'

const baseUrl = "http://localhost:52935/"

const api = {
    user(url = baseUrl) {
        return { 
            createUser: newUser => axios.post(url + 'users/register', newUser), 
            authenticate: user => axios.post(url + 'users/authenticate', user),
            verifyCode: code => axios.post(url + 'users/verify-code', code),
            forgot: user => axios.post(url + 'users/change-password', user),
            update: (id, updatedUser) => axios.put(url + 'users/set-new-password/' + id, updatedUser),
            createCustomer: newCustomer => axios.post(url + 'customers/insert', newCustomer),
            fetchCustomerById: id => axios.get(url + `customers/${id}`)
        }
    } 
}

export default api