import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './pages/Login/login';
import Home from "./pages/home";


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home}/>
                <Route path="login" Component={Login}/>
            </Routes>
        </BrowserRouter>
    );
}