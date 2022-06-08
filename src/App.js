import React from 'react';
import Header from './components/header/Header.jsx';
import Movies from './container/Movies/Movies.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = '/:movieType' element={<Movies/>} exact /> 
      </Routes>
      <Movies/>
      </BrowserRouter>
    </div>
  );
}

export default App;
