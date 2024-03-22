import { useState, createContext, useRef } from "react";
import "../styles/NameInfoFormSummary.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons'

function NameInfoSummary({ personInfo, pic }) {
    return <>
        <div className="CVHeader">
            <div className="CVimgWrapper">
                <img width={150} height={150} src={pic} />
                <h1>{personInfo.flname}</h1>
            </div>
            <div className="CVinfoWrapper">
                <p><FontAwesomeIcon icon={faPhone} />{personInfo.phone}</p>
                <p><FontAwesomeIcon icon={faEnvelope} />{personInfo.email}</p>
                <p><FontAwesomeIcon icon={faAddressBook} />{personInfo.address}</p>
            </div>
        </div>
    </>

}

export default NameInfoSummary