import { forwardRef } from "react";
import "../shared.css";
import "./avator.css";

interface avatorProps {
    image?:string
    alt:string
}
const Avator = forwardRef<HTMLImageElement,avatorProps>(function Avator(
    props,
    ref
    ) {
    return (
        <div>
            {props.image?<img src={props.image} ref={ref} alt={props.alt} className='avatar'/>:<img ref={ref} alt={props.alt} className='avatar'/>}
        </div>
        
    );
    });

    export default Avator;