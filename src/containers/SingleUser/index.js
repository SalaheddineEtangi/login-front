import React, {Component} from 'react';
import Loader from '../../components/Loader';
import { API_URL } from '../../config';

class SingleUser extends Component{
    state = {
        user: null
    }

    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`${API_URL}/users/${id}`)
        .then(response => response.json())
        .then(json => this.setState(
            {
                user: json
            }));
    }

    render(){
        const {user} = this.state;

        return(
            <div>
                {
                    user === null
                    && <Loader />
                }
                {
                    user !== null
                    &&
                    <div>
                        <p>
                            User email : {user.email}
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleUser;