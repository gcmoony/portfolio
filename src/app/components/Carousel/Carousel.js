'use client'
import { useState } from "react"

export default function Carousel({children}) {
  let [currentSlide, setCurrentSlide] = useState(0);

  function goForward() {
    if(currentSlide + 1 < myJobCards.length)
      setCurrentSlide(c => c + 1);
    else
      setCurrentSlide(0);
  }

  function goBackward() {
    if(currentSlide - 1 >= 0)
      setCurrentSlide(c => c - 1);
    else
      setCurrentSlide(myJobCards.length - 1);
  }

  function goDirect(event) {
    let id = event.target.id.split("scrambleScramble")[1];
    setCurrentSlide(id);
  }

  return (
    <div className='bg-slate-300 p-5 rounded block'>
      {myJobCards[currentSlide]}
      <div className="flex justify-between p-4 select-none">
        <button className="select-none text-2xl flex-1 grayscale opacity-60" onClick={goBackward}>⬅️</button>
        <div className="flex flex-1 gap-3 justify-evenly items-center select-none ">
          {myJobCards.map((item, key) => {
            return <div id={"scrambleScramble" + key} onClick={goDirect} className={" select-none w-4 rounded-full aspect-square " + `${key == currentSlide ? "bg-slate-500" : "bg-slate-400"}`} key={key}></div>
          })}
        </div>
        <button className="select-none text-2xl flex-1 grayscale opacity-60" onClick={goForward}>➡️</button>
      </div>
    </div>
  )
}




let myJobs = [
  {
    title: "IT Support Associate II",
    company: "Amazon",
    accomplishments: [
      "Wrote Python scripts to automate network documentation capture.",
      "Deployed web application with AWS to allow users to submit trouble tickets to local IT incident queue.",
      "Developed wiki pages using HTML, CSS, and Bootstrap for internal documentation.",
      "Configure and install server IoT devices to monitor and log HVAC system data."
    ]
  },
  {
    title: "IT Equipment Coordinator",
    company: "Amazon",
    accomplishments: [
      "Isolated and secured compromised end user equipment, including thin clients, laptops, and mobile devices.",
      "Implemented physical locks to secure IT assets, reducing theft and cost of equipment replacement.",
      "Conduct equipment lifecycles to remove vulernerable systems no longer supported for security updates."
    ]
  },
  {
    title: "Mechatronics Technician",
    company: "Amazon",
    accomplishments: [
      "Audit automated material handling systems to develop a building equipment site map.",
      "Train equipment users to safely operate robotic sorting systems to increase operational productivity while minimizing false system faults.",
      "Conduct  assessments and troubleshoot various systems, including programmable logic controllers, FANUC and OPEX robotics, and material handling conveyances."
    ]
  },
  {
    title: "Computer Science Teaching Assistant",
    company: "Northern Arizona University",
    accomplishments: [
      "Taught 2 classes, each of 35 non-computer science STEM students, the basics of computer programming and logic by using Alice2, Java, and Python.",
      "Clarified topics such as object-oriented programming and functional programming to students via study sessions, improving student engagement in the classroom and increasing overall class grades.",
      "Provided technical assistance with device setup and configuration for students unfamiliar with installing and configuring software and settings for programming."
    ]
  },
]

let myJobCards = myJobs.map((aJob, key) => { return <JobCard key={key} title={aJob.title} company={aJob.company} accomplishments={aJob.accomplishments} /> })

function JobCard({title, company, accomplishments}) {
  return (
  <>
    <h4 className='text-center'>{title}</h4>
    <h5 className='text-center text-slate-600 italic'>{company}</h5>
    <ul className='list-disc pl-9'>
      {accomplishments.map((anAcc, key) => {
        return <li key={key}>{anAcc}</li>
      })}
    </ul>
  </>    
  )
}