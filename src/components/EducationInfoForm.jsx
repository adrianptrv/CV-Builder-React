import { useState } from "react";
import EducationInfoFormSummary from "./EducationInfoFormSummary";

function EducationInfoForm(props) {
    const [EduNfo, setEduNfo] = useState({uniName:"", location:"", degree:"", from:"", to:"", additionalInfo:""})

    return <>
        { props.pageNum ?
            <div>
                <input placeholder='University/School name' value={EduNfo.uniName} onChange={(e) => { setEduNfo({...EduNfo, uniName:e.target.value}) }}></input>
                <br></br>
                <input placeholder="Location" value={EduNfo.location} onChange={(e) => { setEduNfo({...EduNfo, location:e.target.value}) }}  ></input>
                <br></br>
                <input placeholder="Degree" value={EduNfo.degree} onChange={(e) => { setEduNfo({...EduNfo, degree:e.target.value}) }} ></input>
                <br></br>
                <input placeholder="From" type="date"  value={EduNfo.from} onChange={(e) => { setEduNfo({...EduNfo, from:e.target.value}) }} ></input>
                <input placeholder="To" type="date"  value={EduNfo.to} onChange={(e) => { setEduNfo({...EduNfo, to:e.target.value}) }} ></input>
                <br></br>
                <textarea placeholder="Additional information"  value={EduNfo.additionalInfo} onChange={(e) => { setEduNfo({...EduNfo, additionalInfo:e.target.value}) }} ></textarea>
                 </div>
                :
                <EducationInfoFormSummary eduInfo = {EduNfo} />
           
        }
    </>
}

export default EducationInfoForm