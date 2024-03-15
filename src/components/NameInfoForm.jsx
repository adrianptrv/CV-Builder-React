import { useState, createContext, useRef } from "react";
import NameInfoSummary from "./NameInfoFormSummary";


function NameInfo(props) {
    const [PersonInfo, setPersonInfo] = useState({flname:"", phone:"", email:"", address:""})
    const [picT, setPicT] = useState();


    return <>
        { props.pageNum ?
            <div>
                <input placeholder='First and Last name' value={PersonInfo.flname} onChange={(e) => { setPersonInfo({...PersonInfo, flname:e.target.value}) }}></input>
                <br></br>
                <input placeholder="Phone" value={PersonInfo.phone} onChange={(e) => { setPersonInfo({...PersonInfo, phone:e.target.value}) }}  ></input>
                <br></br>
                <input placeholder="Email" value={PersonInfo.email} onChange={(e) => { setPersonInfo({...PersonInfo, email:e.target.value}) }} ></input>
                <br></br>
                <input placeholder="Address"  value={PersonInfo.address} onChange={(e) => { setPersonInfo({...PersonInfo, address:e.target.value}) }} ></input>
                <input type="file" accept="image/*" onChange={(e) => { setPicT(URL.createObjectURL(e.target.files[0])); }}/>
                <br/>
                <img width={150} height={150}  src={picT}/>
                 </div>
                :
                <NameInfoSummary personInfo={PersonInfo} pic={picT}/>
           
        }
    </>
}

export default NameInfo