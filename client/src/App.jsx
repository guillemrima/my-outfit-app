import React from "react";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/Register';



export default () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
