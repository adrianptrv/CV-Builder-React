import { useState, createContext, useRef } from "react";

function EducationInfoFormSummary({eduInfo}) {
    return  <>
    <h1>{eduInfo.uniName}</h1>
    <h1>{eduInfo.location}</h1>
    <h1>{eduInfo.degree}</h1>
    <h1>{eduInfo.from} - {eduInfo.to}</h1>
    <h1>{eduInfo.additionalInfo}</h1>
    </>

}

export default EducationInfoFormSummary