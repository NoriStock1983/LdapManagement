import { forwardRef } from "react";
import "../shared.css";
import "./input.css";

//画面表示
interface inputprops {
    label: string;
    type:string;
    classname?: string;
    isrequired: boolean;
    value?: string;
    message?:string;
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const TextInput = forwardRef<HTMLInputElement, inputprops>(function TextInput(
    props,
    ref
  ) {
    return (
      <div className={props.classname}>
        <div>
            <label>{props.label}</label>
        </div>
        <div>
            <input type={props.type} ref={ref} value={props.value} onChange={props.onchange} />
        </div>
        <div>
            {props.isrequired && !props.value ? props.message:''}
            {props.message ? props.message:''}
        </div>
        
      </div>
    );
  });

export default TextInput;