import React from "react";
import './Home.scss';

const Home = (props) => {
    
    return  <div className="caja">
                <div className="home">
                    <h1>Bienvenido</h1>
                    <h2>A mi primera aplicación React</h2>
                    <span>Aplicación de películas realizada con React, para ello hemos utilizado la API de themoviedb. Las herramientas y dependencias que he utilizado son jsx, sass, hooks, react-router-dom, axios, useParams, useEffect, useState, BrowserRouter, Routes y Route.</span>
                </div>
            </div>
}
export default Home;