import { useState } from "react";
import NameInfo from "./NameInfoForm.jsx";
import EducationInfoForm from "./EducationInfoForm.jsx";
import WorkInfoForm from "./WorkInfoForm.jsx";
import "../styles/CVBuild.scss"

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faPenToSquare, faFileContract } from '@fortawesome/free-solid-svg-icons'


function CVBuild() {
    // Variable for switching pages
    const [pageChng, setPageChng] = useState(1)

    //Logic for switching pages
    const pageChange = () => {
        setPageChng(!pageChng)
    }



    return (
        <>
            <div className="navBar">
                <h1>/</h1>
                <hr></hr>
                <div className="btnWrapper">
                {pageChng ? 
                <button className="previewBtn" onClick={pageChange}><FontAwesomeIcon icon={faFileContract} /></button> 
                : 
                <>
                <button className="printBtn"><FontAwesomeIcon icon={faPrint} /></button>
                <button className="editBtn" onClick={pageChange} ><FontAwesomeIcon icon={faPenToSquare} /></button>
                </>}
                </div>
            </div>
            {pageChng ?
                <div className="formWrapper">
                    <NameInfo pageNum={pageChng} />
                    <br></br>
                    <EducationInfoForm pageNum={pageChng} />
                    <WorkInfoForm pageNum={pageChng} />
                </div> :
                <div className="CVWrapper">
                    <NameInfo pageNum={pageChng} />
                    <br></br>
                    <EducationInfoForm pageNum={pageChng} />
                    <WorkInfoForm pageNum={pageChng} />
                </div>}
        </>
    )
}

export default CVBuild