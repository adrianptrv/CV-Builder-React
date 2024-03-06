import { useState, useContext } from "react";
import NameInfo from "./NameInfoForm.jsx";
import FnameContext from './NameInfoForm.jsx'


function CVBuild () {
const FLname = useContext(FnameContext)


    return <h1>{FLname.fname}</h1>
}

export default CVBuild