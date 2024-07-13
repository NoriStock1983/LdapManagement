import { forwardRef } from "react";
import "../shared.css";


//画面表示
interface selectprops {
    label: string;
    type:string;
    classname?: string;
    isrequired: boolean;
    value?: string;
    message?:string;
    onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

  const TextInput = forwardRef<HTMLSelectElement, selectprops>(function TextInput(
    props,
    ref
  ) {
    return (
      <div className={props.classname}>
        <div>
            <label>{props.label}</label>
        </div>
        <div>
            <select ref={ref} value={props.value} onChange={props.onchange}>
                <option value="">{props.label}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">2</option>
            </select>
        </div>
        <div>
            {props.isrequired && !props.value ? props.message:''}
            {props.message ? props.message:''}
        </div>
        
      </div>
    );
  });

export default TextInput;