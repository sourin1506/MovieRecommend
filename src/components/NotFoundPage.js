import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="sign-form-wrapper">
         <div  className="sign-form-base" style={{color:'white',fontWeight:"bold",fontSize:15}}>
             Movie Not Found
         </div>
         <button className='signin-button' style={{ marginTop: 20,marginLeft:20 }}>
                                    <Link to="/SearchBox" className="link" >Back</Link>
                                </button>
    </div>
  )
}
