import React, { useState } from 'react';
import * as yup from 'yup'
import '../App.css';

export default function UserForm(props) {

    const formValue = { first_name: "", last_name:"", email: "", password: "", terms: false}

    const [user, setUser] = useState(formValue);

    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const checkboxChange = (event) => {
        setUser({...user.terms, [event.target]: event.target})
    }


    const submitHandler = (event) => {
        event.preventDefault();
        props.addUser(user);
        setUser(formValue);
    }


    return (
        <div className="form-container">
            <h1>Form</h1>
            <form onSubmit={(event) => submitHandler(event)}>
                <div className="form">
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="first_name"
                                value={user.first_name}
                                onChange={(event) => changeHandler(event)}
                            />
                        </label>
                    </div>
                    <div className="form">
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="last_name"
                                value={user.last_name}
                                onChange={(event) => changeHandler(event)}
                            />
                        </label>
                    </div>
                    <div className="form">
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={(event) => changeHandler(event)}
                            />
                        </label>
                    </div>
                    <div className="form">
                        <label>
                            Password:
                            <input
                                type="text"
                                name="password"
                                value={user.password}
                                onChange={(event)=> changeHandler(event)}
                            />
                        </label>
                    </div>
                    <div className="form">
                        <label>
                            Terms Of Service
                            <input
                                type="checkbox"
                                name="terms"
                                checked={user.terms}
                                onChange={(event)=> checkboxChange(event)}
                            />
                        </label>
                    </div>
                    <button>Submit</button>
            </form>
        </div>
    )

}
