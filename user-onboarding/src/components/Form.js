import React, { useState } from 'react';
import '../App.css';

export default function UserForm(props) {

    const formValue = { name: "", email: "", password: "", terms: false}

    const [user, setUser] = useState(formValue);

    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

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
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={user.name}
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
                                value={user.terms}
                                onChange={(event)=> changeHandler(event)}
                            />
                        </label>
                    </div>
                    <button>Submit</button>
            </form>
        </div>
    )

}
