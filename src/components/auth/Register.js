// Register a new user to database
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    username: '',
    password: '',
    phoneNumber: '',
}

export default function Register() {
    const [formValues, setFormValues] = useState(initialFormValues);

    const updateForm = (inputName, inputValue) => {
        setFormValues({
        ...formValues,
        [inputName]: inputValue,
        });
    };

    const submitForm = () => {
        // create new user to submit
        const newUser = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
        phoneNumber: formValues.phoneNumber.trim(),
        };
        // null checks
        if (
        newUser.username === "" ||
        newUser.password === "" ||
        newUser.phoneNumber === ""
        ) {
        return;
        }

        // REGISTER to BACKEND
        axios.post(
            `https://bw-water-my-plants-07-back-end.herokuapp.com/api/auth/register`, 
            newUser
        ).then((res) => {
            console.log("res",res);
            setFormValues(newUser)
        }).catch((err) => {
            console.log(err);
        })

        setFormValues(initialFormValues);
    };

  const history = useHistory()

  const onChange = evt => {
    const {name, value} = evt.target;
    updateForm(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submitForm();
    history.push('/login')
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Username
          <input
            name='username'
            type='text'
            value={formValues.username}
            onChange={onChange}
            placeholder='Type username here...'
          ></input>
        </label>
        <label>Password
          <input 
            name='password'
            type='password'
            value={formValues.password}
            onChange={onChange}
            placeholder='Please enter a secure password...'
          />
        </label>
        <label>Phone Number     
          <input 
            name='phoneNumber'
            type='string'
            value={formValues.phoneNumber}
            onChange={onChange}
            placeholder='Please enter a valid phone number...'
          />
        </label>
        <div className='submit'>
          <button>submit</button>
        </div>
        
      </div>
    </form>
  );
}