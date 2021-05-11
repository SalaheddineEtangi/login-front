import React from 'react';
import './index.css';

const UsersListItem = props => {
    return(
        <li>
            {props.users.email}
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