import { Children, forwardRef, useId } from "react";
import "../shared.css";
import "./field.css";

//画面表示
interface fieldprops {
    label: string;
    type:string;
    classname?: string;
    isrequired: boolean;
    value?: string;
    message?:string;
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactElement;
  }

  const FieldComponent = forwardRef<HTMLInputElement, fieldprops>(function FieldComponent(props){
    const fieldId = useId();
    return (
        <div className={props.classname}>
            {props.label && <label htmlFor={fieldId}>{props.label}</label>}
            {props.children}
            {props.message && <div className='errormessage'>{props.message}</div>}
        </div>
    );
  });

  export default FieldComponent;