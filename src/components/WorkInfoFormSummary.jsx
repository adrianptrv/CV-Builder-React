import "../styles/WorkInfoFormSummary.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'




function WorkInfoFormSummary({ workInfo, number }) {
    let comp;
    if (number == 0) {
        comp = <div className="uniHeader">
            <h2><FontAwesomeIcon icon={faBriefcase} />Work experience</h2>
            <hr></hr></div>
    }

    return <>
        {comp}
        <div className="workWrapper">
            <div className="workName">
                <h3>{workInfo.company}</h3> <p>-</p> <h4>{workInfo.location}</h4>
            </div>
            <div className="workDegree">
                <h3>{workInfo.role}</h3>
                <div className="workPeriod">
                    <h4 className="workFromPeriod">{workInfo.from}</h4> <p>-</p> <h4 className="workTillPeriod">{workInfo.to}</h4>
                </div>
            </div>
            <p>{workInfo.additionalInfo}</p>
        </div>
    </>

}


export default WorkInfoFormSummary