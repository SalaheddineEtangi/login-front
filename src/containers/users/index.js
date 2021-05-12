import React, {Component} from 'react';
import UsersList from '../../components/UsersList'

class Users extends Component {
    state = {
        collectionName: "",
        collection: [],
        isFetching: false
    }

    onUserInputChange = e => {
        this.setState({
            collectionName: e.target.value,
            isFetching: true
        })
        fetch(`http://localhost:52935/${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState(
            {
                collection: json.items,
                isFetching: false
            }));
    }

    render(){
        const {collectionName, collection, isFetching} = this.state;

        return(
            <div>
                <div>
                    <input
                        value={this.state.collectionName} 
                        type="text" 
                        onChange={this.onUserInputChange}
                    />
                </div>
                {
                    collection.length === 0 && collectionName.trim() === ''
                    &&
                    <p>Entrez le nom de la collection ?</p>
                }
                {
                    !isFetching && collection.length === 0 && collectionName.trim() !== ''
                    &&
                    <p>Il n y a pas de collections avec ce nom ?</p>
                }
                {
                    isFetching && collectionName.trim() !== '' 
                    && <p>Chargement...</p>
                }
                {
                    !isFetching && <UsersList list={this.state.collection}/>
                }
            </div>
        )
    }
}

export default Users;