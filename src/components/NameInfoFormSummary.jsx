import { useState, createContext, useRef } from "react";

function NameInfoSummary({personInfo, pic}) {
    return  <>
    <img width={100} height={150} src={pic}/>
    <h1>{personInfo.flname}</h1>
    <h1>{personInfo.phone}</h1>
    <h1>{personInfo.email}</h1>
    <h1>{personInfo.address}</h1>
    </>

}

export default NameInfoSummary