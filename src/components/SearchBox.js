import React, { useContext, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../App.css';
import { MovieDataContext } from '../ContextApi/MovieDataContext';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../ContextApi/LoginContext';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function SearchBox() {
    const { moviedata, setmovie, setrecommend, setdetails } = useContext(MovieDataContext);
    const { setlog } = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        setrecommend([]);
        setdetails([]);
    }, [])

    return (
        <div>
            <div className="search_wrap search_wrap_3">
                <div className="search_box">
                    <input type="text" className="input" placeholder="Search for Movie Recommendation" onChange={(e) => setmovie(e.target.value)} />
                    <div className="btn btn_common">
                        <SearchIcon fontSize='large' style={{ marginTop: "5px", marginBottom: 50 }} onClick={() => { console.log("Clicked", moviedata); navigate("/InputPage") }} />

                    </div>
                    <button className='signin-button' style={{ margin: "auto" }} onClick={() => setlog(false)}>
                        <Link to="/" className="link">Logout</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
