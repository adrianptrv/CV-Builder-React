import { useState, createContext, useRef } from "react";
import "../styles/NameInfoFormSummary.scss"

function NameInfoSummary({ personInfo, pic }) {
    return <>
        <div className="CVHeader">
            <div className="CVimgWrapper">
                <img width={150} height={150} src={pic} />
                <h1>{personInfo.flname}</h1>
            </div>
            <div className="CVinfoWrapper">
                <p>{personInfo.phone}</p>
                <p>{personInfo.email}</p>
                <p>{personInfo.address}</p>
            </div>
        </div>
    </>

}

export default NameInfoSummary