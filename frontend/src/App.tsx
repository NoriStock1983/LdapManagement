import React, { useState } from 'react';
import './index.css';
import PrimaryButton from './shared/button/button';
import SelectInput from './shared/select/select';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { SearchList } from './function/searchlist/searchlist';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/search" element={<SearchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
