import React, { useState } from 'react';
import './index.css';
import PrimaryButton from './shared/button/button';
import SelectInput from './shared/select/select';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { SearchList } from './function/searchlist/searchlist';

function App() {

  const [search,setsearch] = useState({usercd: '', username: '',deptcd:''})
  const list = [
    {code:'0001',name:'加工課'},
    {code:'0002',name:'組立課'},
    {code:'0003',name:'外業課'},
    {code:'0004',name:'塗装課'},
    {code:'0005',name:'外装課'},
  ];
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
