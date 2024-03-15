import { useState } from "react";
import WorkInfoFormSummary from "./WorkInfoFormSummary";

function WorkInfoForm(props) {
    const [WorkNfo, setWorkNfo] = useState({company:"", location:"", role:"", from:"", to:"", additionalInfo:""})

    return <>
        { props.pageNum ?
            <div>
                <input placeholder='Company name' value={WorkNfo.uniName} onChange={(e) => { setWorkNfo({...WorkNfo, company:e.target.value}) }}></input>
                <br></br>
                <input placeholder="Location" value={WorkNfo.location} onChange={(e) => { setWorkNfo({...WorkNfo, location:e.target.value}) }}  ></input>
                <br></br>
                <input placeholder="Role" value={WorkNfo.role} onChange={(e) => { setWorkNfo({...WorkNfo, role:e.target.value}) }} ></input>
                <br></br>
                <input placeholder="From" type="date"  value={WorkNfo.from} onChange={(e) => { setWorkNfo({...WorkNfo, from:e.target.value}) }} ></input>
                <input placeholder="To" type="date"  value={WorkNfo.to} onChange={(e) => { setWorkNfo({...WorkNfo, to:e.target.value}) }} ></input>
                <br></br>
                <textarea placeholder="Additional information"  value={WorkNfo.additionalInfo} onChange={(e) => { setWorkNfo({...WorkNfo, additionalInfo:e.target.value}) }} ></textarea>
                 </div>
                :
                <WorkInfoFormSummary workInfo = {WorkNfo} />
           
        }
    </>
}

export default WorkInfoForm