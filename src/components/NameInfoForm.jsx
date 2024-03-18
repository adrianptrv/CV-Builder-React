import { useState, createContext, useRef } from "react";
import NameInfoSummary from "./NameInfoFormSummary";
import "../styles/NameInfoForm.scss";
import defImg from "../default-image.webp"


function NameInfo(props) {
    const [PersonInfo, setPersonInfo] = useState({flname:"", phone:"", email:"", address:""})
    const [picT, setPicT] = useState(defImg);


    return <>
        { props.pageNum ?
            <div>
                <div className="imgWrapper">
                <img width={150} height={150}  src={picT}/>
                 <br></br>
                 <input type="file" accept="image/*" title="Please select a image file" onChange={(e) => { setPicT(URL.createObjectURL(e.target.files[0])); }}/>
                 </div>
                 <br></br>
              
              <div className="PersonalInputInfo">
                <input placeholder='First and Last name' value={PersonInfo.flname} onChange={(e) => { setPersonInfo({...PersonInfo, flname:e.target.value}) }}></input>
                <input placeholder="Phone" value={PersonInfo.phone} onChange={(e) => { setPersonInfo({...PersonInfo, phone:e.target.value}) }}  ></input>
                <br></br>
                <input placeholder="Email" value={PersonInfo.email} onChange={(e) => { setPersonInfo({...PersonInfo, email:e.target.value}) }} ></input>
                <input placeholder="Address"  value={PersonInfo.address} onChange={(e) => { setPersonInfo({...PersonInfo, address:e.target.value}) }} ></input>
                </div>
                 </div>
                :
                <NameInfoSummary personInfo={PersonInfo} pic={picT}/>
           
        }
    </>
}

export default NameInfo