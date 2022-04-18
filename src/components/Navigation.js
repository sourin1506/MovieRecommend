import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LoginContext } from '../ContextApi/LoginContext';


export default function Navigation() {
    const { islog } = useContext(LoginContext);
    const navigate = useNavigate()
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent">
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "white" }}>
                            <img src="https://fontmeme.com/permalink/220418/88de467c18875bb500bd49c6a1182077.png" onClick={() => navigate('/SearchBox')} height="55" style={{ marginTop: 4 }} sx={{ flexGrow: 1 }}></img>
                        </Typography>

                        <button className='signin-button'>
                            <Link to="/" className="link">Signin</Link>
                        </button>
                        <button className='signin-button' style={{ marginLeft: 20 }}>
                            <Link to="/Register" className="link" >Signup</Link>
                        </button>
                        {
                            islog ?
                                <button className='signin-button' style={{ marginLeft: 20 }}>
                                    <Link to="/SearchBox" className="link" >Search</Link>
                                </button> : ""
                        }



                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
