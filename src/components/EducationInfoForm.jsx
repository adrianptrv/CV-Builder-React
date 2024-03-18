import { useState } from "react";
import EducationInfoFormSummary from "./EducationInfoFormSummary";
import "../styles/EducationInfoForm.scss"

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

function EducationInfoForm(props) {
    const [EduNfo, setEduNfo] = useState([{ uniName: "", location: "", degree: "", from: "", to: "", additionalInfo: "" }])

    const handleAdd = () => {
        setEduNfo([...EduNfo, { uniName: "", location: "", degree: "", from: "", to: "", additionalInfo: "" }])
    }

    const handleChange = (e, i) => {
        const {name, value} = e.target;
        const currArr = [...EduNfo];
        currArr[i][name] = value;
        setEduNfo(currArr); 
    }

    const handleDelete = (i) => {
         const deleteItem = [...EduNfo];
         deleteItem.splice(i, 1);
         setEduNfo(deleteItem);
    }

    return <>
        
        {EduNfo.map((ele, i) => props.pageNum ? <div>
            <button onClick={handleAdd}><FontAwesomeIcon icon={faPlus} />Add</button>
            <input placeholder='University/School name' name="uniName" value={ele.uniName} onChange={(e) => handleChange(e,i)}></input>
            <br></br>
            <input placeholder="Location" name="location" value={ele.location} onChange={(e) => handleChange(e,i)}  ></input>
            <br></br>
            <input placeholder="Degree" name="degree" value={ele.degree} onChange={(e) => handleChange(e,i)} ></input>
            <br></br>
            <input placeholder="From" name="from" type="date" value={ele.from} onChange={(e) => handleChange(e,i)} ></input>
            <input placeholder="To" name="to" type="date" value={ele.to} onChange={(e) => handleChange(e,i)} ></input>
            <br></br>
            <textarea placeholder="Additional information" name="additionalInfo" value={ele.additionalInfo} onChange={(e) => handleChange(e,i)} ></textarea>
            <button onClick={() => handleDelete(i)}><FontAwesomeIcon icon={faTrash} />Delete</button>
        </div> : <EducationInfoFormSummary eduInfo = {ele}/> )}
    </>
}

export default EducationInfoForm