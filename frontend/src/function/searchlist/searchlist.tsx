
import React, { useState } from 'react';
import "../../index.css";
import TextInput from '../../shared/input/input';
import { SearchCondition } from '../../interfaces/search.interface';  
import SelectInput from '../../shared/select/select';
import PrimaryButton from '../../shared/button/button';


function SearchList(){
    const [search,setsearch] = useState<SearchCondition>({usercd:"",companycd:"",deptcd:""})
    return(
        <div>        
            <div className="col-20">
                <h1 className='offset-1'>SearchList</h1>
                <div className="rows">
                    <TextInput label="社員番号" type="search" classname="col-3 offset-1" isrequired={true} onchange={(e) => setsearch({...search,usercd:e.target.value})} value={search.usercd} />
                    <SelectInput label="会社コード" list={[{code:'0001',name:'株式会社A'},{code:'0002',name:'株式会社B'}]} classname="col-3 offset-1" isrequired={true} onchange={(e) => setsearch({...search,companycd:e.target.value})} value={search.companycd} />
                    <SelectInput label="部署コード" list={[{code:'001',name:'加工課'},{code:'002',name:'組立課'},{code:'003',name:'外業課'}]} classname="col-3 offset-1" isrequired={true} onchange={(e) => setsearch({...search,companycd:e.target.value})} value={search.deptcd} />
                    <PrimaryButton label="検索" classname="col-2 offset-10" onclick={() => console.log(search)} />
                </div>
                <br></br>
                <hr className="offset-1"></hr>
                <div className="rows">
                    

                </div>
            </div>
        </div>
    )
}

export {SearchList}