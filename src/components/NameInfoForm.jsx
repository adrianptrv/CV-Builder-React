import { useState, createContext, useRef } from "react";


function NameInfo({updateFirstName}) {
const [Fname, setFname] = useState("ads")
const inputRef = useRef(null);

// const sendName = (e) => {
//   setFname(e.target.value);
// }

    return  <div>
        <input placeholder={Fname}  ref={inputRef}></input>
        <br></br>
        <input placeholder="Phone"></input>
        <br></br>
        <input placeholder="Email"></input>
        <br></br>
        <input placeholder="Address"></input>
        <br></br>
        <button onClick={() => {updateFirstName(inputRef.current.value)}}>Create</button>
    </div>
}

export default NameInfo