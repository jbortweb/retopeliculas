import React from 'react';
import Header from './components/header/Header.jsx';
import Movies from './container/Movies/Movies.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';

function App() { //Con path le añadimos una variable en forma de parametro e imprimimos el componente del element
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>     
      <Routes>
        <Route path = '/:movieType' element={<Movies/>} exact /> 
      </Routes><Routes>
        <Route path = '/:retopeliculas' element={<Home/>} exact /> 
      </Routes>
      <Movies/>
      </BrowserRouter>
    </div>
  );
}

export default App;
