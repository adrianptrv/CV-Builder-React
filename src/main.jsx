import React from 'react'
import ReactDOM from 'react-dom/client'
import NameInfo from './components/NameInfoForm.jsx'
import EducationInfo from './components/EducationInfoForm.jsx'
import CVBuild from './components/CVBuild.jsx'
import './styles/index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <br></br>
  <EducationInfo/>
  <br></br>
  <CVBuild/>
  </React.StrictMode>,
)
