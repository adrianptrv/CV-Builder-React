import { useState, createContext, useRef } from "react";

function WorkInfoFormSummary({workInfo}) {
    return  <>
    <h1>{workInfo.company}</h1>
    <h1>{workInfo.location}</h1>
    <h1>{workInfo.role}</h1>
    <h1>{workInfo.from} - {workInfo.to}</h1>
    <h1>{workInfo.additionalInfo}</h1>
    </>

}

export default WorkInfoFormSummary