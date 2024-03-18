import { useState } from "react";
import WorkInfoFormSummary from "./WorkInfoFormSummary";
import "../styles/WorkInfoForm.scss"

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

function WorkInfoForm(props) {
    const [WorkNfo, setWorkNfo] = useState([{company:"", location:"", role:"", from:"", to:"", additionalInfo:""}])

    const handleAdd = () => {
        setWorkNfo([...WorkNfo, { uniName: "", location: "", degree: "", from: "", to: "", additionalInfo: "" }])
    }

    const handleChange = (e, i) => {
        const {name, value} = e.target;
        const currArr = [...WorkNfo];
        currArr[i][name] = value;
        setWorkNfo(currArr); 
    }

    const handleDelete = (i) => {
         const deleteItem = [...WorkNfo];
         deleteItem.splice(i, 1);
         setWorkNfo(deleteItem);
    }

    return <>
    
        {WorkNfo.map((ele, i) => props.pageNum ? <div>
            <button onClick={handleAdd}><FontAwesomeIcon icon={faPlus} />Add</button>
                <input placeholder='Company name' name="company" value={ele.company} onChange={(e) => handleChange(e,i)}></input>
                <br></br>
                <input placeholder="Location" name="location" value={ele.location} onChange={(e) => handleChange(e,i)}  ></input>
                <br></br>
                <input placeholder="Role" name="role" value={ele.role} onChange={(e) => handleChange(e,i)} ></input>
                <br></br>
                <input placeholder="From" type="date" name="from" value={ele.from} onChange={(e) => handleChange(e,i)} ></input>
                <input placeholder="To" type="date" name="to" value={ele.to} onChange={(e) => handleChange(e,i)} ></input>
                <br></br>
                <textarea placeholder="Additional information" name="additionalInfo" value={ele.additionalInfo} onChange={(e) => handleChange(e,i)} ></textarea> <button onClick={() => handleDelete(i)}><FontAwesomeIcon icon={faTrash} />Delete</button>
                 </div>
                :
                <WorkInfoFormSummary workInfo = {ele} /> )}
    </>
}

export default WorkInfoForm