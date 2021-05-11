import React, {Component} from 'react';
import UsersList from '../../components/UsersList'

class Users extends Component {
    state = {
        collectionName: "",
        collection: []
    }

    onUserInputChange = e => {
        fetch(`http://localhost:52935/${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState(
            {
                collectionName: e.target.value, 
                collection: json.items
            }));
    }

    render(){
        return(
            <div>
                <p>
                    There are {this.state.collection.length} {this.state.collectionName} registered to the application
                </p>
                <div>
                    <input type="text" onChange={this.onUserInputChange}/>
                </div>
                <UsersList list={this.state.collection}/>
            </div>
        )
    }
}

export default Users;