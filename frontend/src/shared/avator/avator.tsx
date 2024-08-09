import { forwardRef } from "react";
import "../shared.css";
import "./avator.css";

interface avatorProps {
    image?:string
    alt:string
}



    function Avator(props: avatorProps) {
        return (
            <img src={props.image} alt={props.alt} />
        );
      }
    export default Avator;