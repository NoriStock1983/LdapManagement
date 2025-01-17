
import React, { useState } from 'react';
import "../../index.css";
import TextInput from '../../shared/input/input';
import { SearchCondition } from '../../interfaces/search.interface';  
import SelectInput from '../../shared/select/select';
import PrimaryButton from '../../shared/button/button';
import Tables from '../../shared/table/table';
import validattion from '../../shared/validation/validation';
import validation from '../../shared/validation/validation';
import FieldComponent from '../../shared/form/field';


function SearchList(){
    const [search,setsearch] = useState<SearchCondition>({usercd:"",usernm:"",email:"",companycd:"",companynm_short:"",deptcd:"",deptnm_short:"",positioncd:"",positionnm_short:"",nyushadate:new Date(),insertdate:new Date()});
 
 
    return(
        <form>        
            <div className="col-20">
                <h1 className='offset-1'>SearchList</h1>
                <hr className="offset-1"></hr>
                <h2 className="offset-1">検索条件</h2>
                <div className="rows">
                    <SelectInput label="会社コード" list={[{code:'0001',name:'株式会社A'},{code:'0002',name:'株式会社B'}]} classname="col-3 offset-1" isrequired={true} onchange={(e) => setsearch({...search,companycd:e.target.value})} value={search.companycd} />
                    <SelectInput label="部署コード" list={[{code:'001',name:'加工課'},{code:'002',name:'組立課'},{code:'003',name:'外業課'}]} classname="col-3 offset-1" isrequired={true} onchange={(e) => setsearch({...search,companycd:e.target.value})} value={search.deptcd} />
                    <TextInput label="社員番号" type="search" classname="col-3 offset-1" isrequired={true} onchange={(e) => setsearch({...search,usercd:e.target.value})} value={search.usercd} />
                    <button type="submit" className="col-2 offset-1">検索</button>
                </div>
                <br></br>
                <hr className="offset-1"></hr>
                <div className="rows">
                    <Tables label={"検索結果"} classname='col-23 offset-1' tableheader={['ユーザCD','ユーザ名','会社名','部課名','役職名','入社日','登録日']} tabledetail={[]} />  

                </div>
                <div className="rows">
                    <FieldComponent label="社員番号" type="text" classname="col-24 offset-1" isrequired={true} onchange={(e) => setsearch({...search,usercd:e.target.value})} value={search.usercd} message='TEST'>
                        <input type="search"/>
                    </FieldComponent>
                </div>
            </div>
        </form>
    )
}

export {SearchList}