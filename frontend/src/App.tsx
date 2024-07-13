import React, { useState } from 'react';
import './index.css';
import TextInput from './shared/input/input';
import PrimaryButton from './shared/button/button';
import Avator from './shared/avator/avator';

function App() {

  const [search,setsearch] = useState({usercd: '', username: ''})
  const message = "";
  return (
    <div className="col-24">
        <div className="rows">
            <TextInput label="Input" type="text" value={search.usercd} classname="col-4 offset-1" isrequired={true}  onchange={(e) => {setsearch({...search,usercd:e.target.value})}} />
            <TextInput label="Date From" type="date" classname="col-4 offset-1"  isrequired={false} onchange={(e) => {setsearch({...search,username:e.target.value})}} />
        </div>
        <br></br>
        <div className="rows">
            <TextInput label="Input" type="text" value={search.usercd} classname="col-4 offset-1" isrequired={true}  onchange={(e) => {setsearch({...search,usercd:e.target.value})}} />
            <TextInput label="Date From" type="date" classname="col-4 offset-1"  isrequired={false} onchange={(e) => {setsearch({...search,username:e.target.value})}} />
              <PrimaryButton label="Search" classname='success col-2 offset-11' onclick={() => {}} />
                <Avator image="" alt="avator" />
        </div>
      </div>
  );
}

export default App;
