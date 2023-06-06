import React from 'react';
import {Routes, Route} from "react-router-dom";
import App from './App';
import NavBar from './components/NavBar';
import Description from './components/Description';
import Error from './Error';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/movie/:id' element={<Description/>}/>
                <Route path='/*' element={<Error/>}/>
                
            </Routes>
        </div>
    );
};

export default Home;