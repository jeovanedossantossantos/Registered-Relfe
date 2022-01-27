import React from "react";
import { Router, Route, Link, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import EditForm from './views/EditForm';
import Formulario from './views/Formulario';
import Header from "./components/Header";
import ListMat from './views/ListMat/index';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Header></Header> */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/lista" element={<ListMat />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/editform" element={<EditForm/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

