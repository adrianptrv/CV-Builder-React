import { useState, createContext, useRef } from "react";
import NameInfoSummary from "./NameInfoFormSummary";


function NameInfo(props) {
    const [FLname, setFLname] = useState("aa")



    const sendName = (e) => {
        setFname(e.target.value);

    }

    return <>
        { props.pageNum ?
            <div>
                <input placeholder='First and Last name' value={FLname} onChange={(e) => { setFLname(e.target.value) }}></input>
                <br></br>
                <input placeholder="Phone"  ></input>
                <br></br>
                <input placeholder="Email" ></input>
                <br></br>
                <input placeholder="Address"  ></input>
                 </div>
                :
                <NameInfoSummary names={FLname} />
           
        }
    </>
}

export default NameInfo