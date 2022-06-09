import React from 'react';
import Header from './components/header/Header.jsx';
import Movies from './container/Movies/Movies.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';

function App() {
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
