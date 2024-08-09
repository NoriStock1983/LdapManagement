import './input.css';

import { useFormContext } from "../form/formContext";
import { ClassAttributes, InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';


//仕様
//inputタグを生成する
//propsにはinputタグの属性を指定する
//id属性はuseFormContextで取得したidを指定する
//aria-describedby属性はuseFormContextで取得したerrorTextIdを指定する
//aria-invalid属性はuseFormContextで取得したisErrorを指定する
//propsに指定した値をinputタグに指定する
// 
function InputText(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
    const { id, errorTextId, isError } = useFormContext();
    return (
      <input
        type="search"
        id={id}
        aria-describedby={[errorTextId || ""].join(" ")}
        aria-invalid={isError as boolean}
        {...props}
      />
    );
  }

  export default InputText;