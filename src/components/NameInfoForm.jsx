import { useState, createContext } from "react";

export const FnameContext = createContext(fname);

function NameInfo() {
const [Fname, setFname] = useState("ads")

    return  <div>
        <FnameContext.Provider value={Fname}>
        <input placeholder={Fname}></input>
        </FnameContext.Provider>
        <br></br>
        <input placeholder="Phone"></input>
        <br></br>
        <input placeholder="Email"></input>
        <br></br>
        <input placeholder="Address"></input>
    </div>
}

export default NameInfo