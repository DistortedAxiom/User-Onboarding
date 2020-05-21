import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import FormSchema from '../validation/FormSchema';
import * as yup from 'yup'

export default function UserForm(props) {

    const formValue = { first_name: '', last_name:'', email: '', password: '', terms: false }

    const initialDisabled = true;

    const [user, setUser] = useState(formValue);

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        terms: '',
    })

    const [disabled, setDisabled] = useState(initialDisabled);

    const changeHandler = (event) => {
        event.persist();

        const name = event.target.name;
        const value = event.target.value;

        yup.reach(FormSchema, name)
        .validate(value)
        .then(valid => {
            setErrors({
                ...errors,
                [name]: ""
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [name]: err.errors[0]
            });
        });

        setUser({ ...user, [name]: value });

    };

    const checkboxChange = ({ target }) =>
        setUser(user => (
            { ...user, [target.name]: !user[target.name] }
        ));



    const submitHandler = (event) => {
        event.preventDefault();

        const newUser = {
            first_name: user.first_name.trim(),
            last_name: user.last_name.trim(),
            email: user.email.trim()
        }
        postNewUser(newUser);
        props.addUser(newUser);
        setUser(formValue);
    }

    const postNewUser = (newUser) => {
        axios.post('https://reqres.in/api/users', newUser)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
    }

    useEffect(() => {
        FormSchema.isValid(user).then(valid => {
            setDisabled(!valid)
        })
    }, [user])

    console.log(user);
    console.log(errors);

    return (
        <div className="form-container">
            <h1>Form</h1>
            <div className="errors">
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
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
                    <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )

}
