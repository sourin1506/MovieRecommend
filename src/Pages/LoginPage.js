import { useState, useEffect, useContext } from 'react';
import '../App.css';

import { db } from '../firebase-config';
import { LoginContext } from '../ContextApi/LoginContext';
import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

import { async } from '@firebase/util';
import { Navigate, Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const { name, setname, setlog } = useContext(LoginContext);
    //user->data from login form
    const [user, setuser] = useState({
        username: '',
        email: '',
        password: '',
    });
    //userdate ->data from firebase
    const [userdata, setdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });


    useEffect(() => {
        console.log('useeffect');
        getUsers('User' + user.username);
    }, [user.username]);

    const getUsers = (id) => {
        //get all the documents
        // const data = await getDocs(usersCollectionRef);
        //console.log(data.docs[0]._document.data.value.mapValue.fields)

        //setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //setu(data.docs[0]._document.data.value.mapValue.fields)

        //get a single document
        const docRef = doc(db, 'Users', id);
        getDoc(docRef).then((doc) => setdata(doc.data()));
        // console.log("in getuser")
        // console.log(data.data())
        // setdata(data.data())
        //console.log(data.data());
    };

    const navigate = useNavigate();

    const validateForm = (e) => {
        e.preventDefault();

        //getUsers("User"+user.username).then((data)=>console.log(data.data()))
        // getUsers("User"+user.username)

        try {
            if (
                user.email === userdata.email &&
                user.password === userdata.password
            ) {
                setname(userdata.firstname + ' ' + userdata.lastname);
                console.log(name);
                setlog(true);
                navigate('/SearchBox');
            } else console.log('not matched');
        } catch {
            alert('Fill up the details');
        }
        //console.log(userdata)
    };

    return (
        <div className="sign-form-wrapper" style={{ marginTop: 100 }}>


            <form className="sign-form-base">
                <h1 className="sign-form-title">Sign In</h1>
                <div className="input-container">

                    <input
                        className="sign-form-input"
                        placeholder='Username'
                        type="text"
                        value={user.username}
                        name="username"
                        onChange={(e) => {
                            setuser({ ...user, [e.target.name]: e.target.value });
                        }}
                    />
                </div>
                <div className="input-container">

                    <input
                        className="sign-form-input"
                        placeholder='E-Mail'
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={(e) => {
                            setuser({ ...user, [e.target.name]: e.target.value });
                        }}
                    />
                </div>
                <div className="input-container">

                    <input
                        className="sign-form-input"
                        placeholder='Password'
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={(e) => {
                            setuser({ ...user, [e.target.name]: e.target.value });
                        }}
                    />
                </div>
                <div className="button-container">
                    {/* <button type="submit" disabled={!validateForm()} onClick={handleLogin}>Login</button> */}

                    <button className='sign-form-Button' type="submit" onClick={validateForm}>
                        Login
                    </button>
                    {
                        //logged?<Navigate to="/Registration"></Navigate>:""
                    }

                    {/* {<Link to="Signin">Login</Link>} */}
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
