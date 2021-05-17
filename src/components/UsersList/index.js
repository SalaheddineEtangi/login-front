import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const UsersListItem = props => {
    return(
        <li>
            <Link to={`/users/${props.users.id}`}>
                {props.users.email}
            </Link>
        </li>
    )
}

const UsersList = props => {
    return(
        <div>
            <ul className="users-list">
                {props.list.map(users => (
                    <UsersListItem users={users} key={users.id}/>
                ))}
            </ul>
        </div>
    )
}

export default UsersList;