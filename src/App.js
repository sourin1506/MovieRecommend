import React, { useContext } from 'react'
import './App.css';
import InputPage from './components/InputPage';
import SearchBox from './components/SearchBox';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import MovieDisplay from './Pages/MovieDisplay';
import Navigation from './components/Navigation';
import LoginPage from './Pages/LoginPage';
import LoginContextProvider, { LoginContext } from './ContextApi/LoginContext';
import RegistrationPage from './Pages/RegistrationPage';



function App() {
  const { islog } = useContext(LoginContext);
  return (
    <BrowserRouter>
      <div className='navbackground'>
        <Navigation />

        <div className='background'>
          {
            islog ?
              <Routes>

                <Route path="/" element={<LoginPage />} />
                <Route path="/Register" element={<RegistrationPage />} />
                <Route path="/SearchBox" element={<SearchBox />} />
                <Route path="/Inputpage" element={<InputPage />} />
                <Route path="/MovieDetails" element={<MovieDetails />} />
                <Route path="/MovieDisplay" element={<MovieDisplay />} />
                <Route path="*" element={<LoginPage />} />
              </Routes> :
              <Routes>

                <Route path="/" element={<LoginPage />} />
                <Route path="/Register" element={<RegistrationPage />} />
                <Route path="*" element={<LoginPage />} />

              </Routes>
          }



        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
