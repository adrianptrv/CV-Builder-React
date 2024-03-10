import { useState, useContext } from "react";
import NameInfo from "./NameInfoForm.jsx";
import FnameContext from './NameInfoForm.jsx'


function CVBuild() {
    const [pagge, setPagge] = useState(1)


    const pageChange = () => {
        setPagge(!pagge)
    }

    return (
        <> {pagge ? <div style={{backgroundColor:"yellow", width:"1200px", height:"800px"}}> <NameInfo pageNum={pagge}/> </div> :
         <div style={{backgroundColor:"blue", width:"800px", height:"800px"}}> <NameInfo pageNum={pagge}/> </div>} 
        
         <button onClick={pageChange} >ChangePage </button>
        </>
    )
}

export default CVBuild