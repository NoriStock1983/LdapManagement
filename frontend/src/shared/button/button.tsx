import { forwardRef } from "react";
import "../shared.css";
import "./button.css";

interface buttonprops {
    label: string;
    classname?: string;
    onclick: () => void;
  }
  
function PrimaryButton(props: buttonprops) {
    return (
            <button className={props.classname} onClick={props.onclick}>
            {props.label}
            </button>

    );
  }
    export default PrimaryButton;