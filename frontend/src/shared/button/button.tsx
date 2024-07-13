import { forwardRef } from "react";
import "../shared.css";
import "./button.css";

interface buttonprops {
    label: string;
    classname?: string;
    onclick: () => void;
  }
const PrimaryButton = forwardRef<HTMLButtonElement,buttonprops>(function PrimaryButton(
    props,
    ref
    ) {
    return (
            <button ref={ref} className={props.classname} onClick={props.onclick}>
            {props.label}
            </button>

    );
    });

    export default PrimaryButton;