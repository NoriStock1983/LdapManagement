// <SelectInput>
// 共通で利用できるセレクトボックスを作成する。
// 引数
// label: string
//　list: props[]
//　classname?: string
//　isrequired: boolean
//　value?: string
//　onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void




import { forwardRef } from "react";
import "../shared.css";
import "./select.css";

interface props{
  code:string;
  name:string;
}

//画面表示
interface selectprops {
    label: string;
    list : props[];
    classname?: string;
    isrequired: boolean;
    value?: string;
    onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

  const SelectInput = forwardRef<HTMLSelectElement, selectprops>(function SelectInput(
    props,
    ref
  ) {
    return (
            <select ref={ref} value={props.value} onChange={props.onchange}>
              {props.list.map((item,index)=>
                <option key={index} value={item.code}>{item.name}</option>
              )}
            </select>
    );
  });

export default SelectInput;