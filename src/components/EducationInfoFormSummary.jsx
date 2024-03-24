import "../styles/EducationInfoFormSummary.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'


function EducationInfoFormSummary({ eduInfo, number }) {
    let comp;
        if (number == 0){
            comp = <div className="uniHeader">
                <h2><FontAwesomeIcon icon={faSchool} />Education</h2>
                <hr></hr></div>}
    return <>
        {comp}
        <div className="uniWrapper">
        <div className="uniName">
            <h3>{eduInfo.uniName}</h3> <p>-</p> <h4>{eduInfo.location}</h4>
        </div>
        <div className="uniDegree">
            <h3>{eduInfo.degree}</h3>
            <div className="uniPeriod">
                <h4 className="uniFromPeriod">{eduInfo.from}</h4> <p>-</p> <h4 className="uniTillPeriod">{eduInfo.to}</h4>
            </div>
        </div>
        <p>{eduInfo.additionalInfo}</p>
        </div>

    </>

}

export default EducationInfoFormSummary