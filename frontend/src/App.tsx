import React, { useState } from 'react';
import './index.css';
import TextInput from './shared/input/input';
import PrimaryButton from './shared/button/button';
import Avator from './shared/avator/avator';
import SelectInput from './shared/select/select';

function App() {

  const [search,setsearch] = useState({usercd: '', username: '',deptcd:''})
  const message = "";
  const list = [
    {code:'0001',name:'加工課'},
    {code:'0002',name:'組立課'},
    {code:'0003',name:'外業課'},
    {code:'0004',name:'塗装課'},
    {code:'0005',name:'外装課'},
  ];
  return (
    <div className="col-24">
        <div className="rows">
            <TextInput label="Input" type="search" value={search.usercd} classname="col-4 offset-1" isrequired={true}  onchange={(e) => {setsearch({...search,usercd:e.target.value})}} />
            <TextInput label="Date From" type="date" classname="col-4 offset-1"  isrequired={false} onchange={(e) => {setsearch({...search,username:e.target.value})}} />
        </div>
        <br></br>
        <div className="rows">
            <TextInput label="Input" type="search" value={search.usercd} classname="col-4 offset-1" isrequired={true}  onchange={(e) => {setsearch({...search,usercd:e.target.value})}} />
            <TextInput label="Date From" type="date" classname="col-4 offset-1"  isrequired={false} onchange={(e) => {setsearch({...search,username:e.target.value})}} />
            <SelectInput label="Select" type="select" list={list} classname="col-4 offset-1" isrequired={true} value={search.deptcd} onchange={(e) => {setsearch({...search,deptcd:e.target.value})}}/>
              <PrimaryButton label="Search" classname='success col-2 offset-6' onclick={() => {}} />
        </div>
        <div>{search.deptcd}</div>
      </div>
  );
}

export default App;
