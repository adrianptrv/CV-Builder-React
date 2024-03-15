import { useState } from "react";
import NameInfo from "./NameInfoForm.jsx";
import EducationInfoForm from "./EducationInfoForm.jsx";
import WorkInfoForm from "./WorkInfoForm.jsx";




function CVBuild() {
    // Variable for switching pages
    const [pageChng, setPageChng] = useState(1)
    // const [addEduSection, setAddEduSection] = useState([<EducationInfoForm key={0} pageNum={pageChng}/>])

//Logic for switching pages
    const pageChange = () => {
        setPageChng(!pageChng)
    }

// let handleAddEduSection = (e) => {
//     e.preventDefault();
//     setAddEduSection([...addEduSection, <EducationInfoForm key={addEduSection.length} pageNum={pageChng}/>])
// }


    return (
        <> {pageChng ?
            <div style={{ backgroundColor: "yellow", width: "1200px", height: "800px" }}>
                {/* <button onClick={handleAddEduSection}>Add</button> */}
                <NameInfo pageNum={pageChng} />
                <br></br>
                <EducationInfoForm pageNum={pageChng}/>
                <br></br>
                <WorkInfoForm pageNum={pageChng}/>
                {/* <hr/>
                {addEduSection} */}
            </div> :
            <div style={{ backgroundColor: "blue", width: "800px", height: "800px" }}>
                <NameInfo pageNum={pageChng} />
                <br></br>
                <EducationInfoForm pageNum={pageChng}/>
                <br></br>
                <WorkInfoForm pageNum={pageChng}/>
            </div>}

            <button onClick={pageChange} >ChangePage </button>
        </>
    )
}

export default CVBuild