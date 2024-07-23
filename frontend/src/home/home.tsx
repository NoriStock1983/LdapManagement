import { useState } from "react";
import Tables from "../shared/table/table";

function Home(){

    const [tabledetail,settabledetail] = useState<string[][]>([

    ]);
    return(
        <div>
            <h1>Home</h1>
            
        </div>
    )
}
export { Home};