import React, {Component} from 'react';
import UsersList from '../../components/UsersList';
import Loader from '../../components/Loader';
import { API_URL } from '../../config';

class Users extends Component {
    state = {
        users: [],
        isFetching: false
    }

    componentDidMount() {
        this.setState({
            isFetching: true
        })
        fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(json => this.setState(
            {
                users: json.items,
                isFetching: false
            }));
    }

    render(){
        const {isFetching} = this.state;

        return(
            <div>
                {
                    isFetching
                    && <Loader />
                }
                {
                    !isFetching 
                    && <UsersList list={this.state.users}/>
                }
            </div>
        )
    }
}

export default Users;