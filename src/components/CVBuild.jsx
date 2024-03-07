import { useState, useContext } from "react";
import NameInfo from "./NameInfoForm.jsx";
import FnameContext from './NameInfoForm.jsx'


function CVBuild () {
    const [cvInfo, setCVinfo] = useState({firstName: "Test", lastName: "Test2", phone: "11111", email: "asd@asd.bg", address:"ul.MOmin"})

    const updateName = (value) => {
        console.log(value)
        setCVinfo({...cvInfo, firstName: value})
    }


    return (
        <>
        <NameInfo updateFirstName={updateName} />
        <h1>{cvInfo.firstName}</h1>
        </>
    )
}

export default CVBuild