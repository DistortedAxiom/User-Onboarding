import React from 'react'
import "../App.css"

const User = props => {

    const {user} = props

    console.log(user);

    return (
        <div>
            <div>
                <h2>{user.first_name}</h2>
                <h2>{user.last_name}</h2>
            </div>
                <p>{user.email}</p>
        </div>
    )
}

export default User;
