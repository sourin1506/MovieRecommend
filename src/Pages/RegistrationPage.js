import React, { useEffect, useContext } from 'react';
import '../App.css';
import { useState } from 'react';

import { LoginContext } from '../ContextApi/LoginContext';
import { db } from '../firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

let clicked = 0;
let noerror = -1;
export default function RegistrationPage() {
    const [user, setuser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const [errormsg, seterrormsg] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const { name, setname } = useContext(LoginContext);

    //const usersCollectionRef=collection(db,"Users")
    const usersCollectionRef = doc(db, 'Users', 'User' + user.firstname);
    const addUsers = async () => {
        await setDoc(usersCollectionRef, {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
        });
    };

    let flag = 0;

    const validateForm = () => {
        flag = 0;

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (user.firstname == '' && clicked) {
            seterrormsg((prevState) => ({
                ...prevState,
                firstname: 'FirstName Req.',
            }));

            flag = 1;
            noerror = 1;
        } else {
            seterrormsg((prevState) => ({
                ...prevState,
                firstname: '',
            }));
            noerror = 0;
        }

        if (user.lastname == '' && clicked) {
            seterrormsg((prevState) => ({
                ...prevState,
                lastname: 'Last Name Req.',
            }));

            flag = 1;
            noerror = 1;
        } else {
            seterrormsg((prevState) => ({
                ...prevState,
                lastname: '',
            }));
            noerror = 0;
        }

        if (user.email == '' && clicked) {
            seterrormsg((prevState) => ({
                ...prevState,
                email: 'Emai Req.',
            }));
            flag = 1;
            noerror = 1;
        } else if (!regex.test(user.email) && clicked) {
            seterrormsg((prevState) => ({
                ...prevState,
                email: 'Email not valid',
            }));
            flag = 1;
            noerror = 1;
        } else {
            seterrormsg((prevState) => ({
                ...prevState,
                email: '',
            }));
            noerror = 0;
        }

        if (user.password == '' && clicked) {
            seterrormsg((prevState) => ({
                ...prevState,
                password: 'Password',
            }));
            flag = 1;
            noerror = 1;
        } else {
            seterrormsg((prevState) => ({
                ...prevState,
                password: '',
            }));
            noerror = 0;
        }
        //console.log(clicked)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clicked = 1;
        validateForm();
        if (noerror == 0) {
            addUsers();
            alert('Data Successfully stored in FireBase ');
            setuser({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            });
        }
    };

    return (
        <div className="sign-form-wrapper">
            <form className="sign-form-base">
                <h1 className="sign-form-title">Sign Up</h1>
                <div className="input-container">

                    <input
                        className="sign-form-input"
                        placeholder='FirstName'
                        type="text"
                        value={user.firstname}
                        name="firstname"
                        onChange={(e) => {
                            setuser({ ...user, [e.target.name]: e.target.value });
                            validateForm();
                        }}
                    />
                </div>
                <p className="error">{errormsg.firstname}</p>

                <div className="input-container">

                    <input
                        className="sign-form-input"
                        placeholder='Lastname'
                        type="text"
                        value={user.lastname}
                        name="lastname"
                        onChange={(e) => {
                            setuser({ ...user, [e.target.name]: e.target.value });
                            validateForm();
                        }}
                    />
                </div>
                <p className="error">{errormsg.lastname}</p>
                <div className="input-container">

                    <input
                        type="text"
                        className="sign-form-input"
                        placeholder='Email'
                        value={user.email}
                        name="email"
                        onChange={(e) => {
                            setuser({ ...user, [e.target.name]: e.target.value });
                            validateForm();
                        }}
                    />
                </div>
                <p className="error">{errormsg.email}</p>
                <div className="input-container">

                    <input
                        className="sign-form-input"
                        placeholder='Password'
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={(e) => {
                            setuser({ ...user, [e.target.name]: e.target.value });
                            validateForm();
                        }}
                    />
                </div>
                <p className="error">{errormsg.password}</p>
                <div className="button-container">
                    {/* <button type="submit" disabled={!validateForm()} onClick={handleLogin}>Login</button> */}

                    <button className='sign-form-Button' type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                    {/* {<Link to="Signin">Login</Link>} */}
                </div>
            </form>
        </div>
    );
}
