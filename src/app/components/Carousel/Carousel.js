'use client'
import { useState } from "react"

export default function Carousel({children}) {
  let [currentSlide, setCurrentSlide] = useState(0);

  function goForward() {
    if(currentSlide + 1 < allData.length)
      setCurrentSlide(c => c + 1);
    else
      setCurrentSlide(0);
  }

  function goBackward() {
    if(currentSlide - 1 >= 0)
      setCurrentSlide(c => c - 1);
    else
      setCurrentSlide(allData.length - 1);
  }

  let allData = [
    defData,
    defData2,
    defData3
  ]
  return (
    <div className='bg-slate-300 p-5 rounded block w-screen'>
      {allData[currentSlide]}
      <div className="flex justify-between">
        <button onClick={goBackward}>⬅️</button>
        <div className="flex gap-3 justify-evenly items-center">
          {allData.map((item, key) => {
            return <div className={"w-5 rounded-full aspect-square " + `${key == currentSlide ? "bg-slate-500" : "bg-slate-400"}`} key={key}></div>
          })}
        </div>
        <button onClick={goForward}>➡️</button>
      </div>
    </div>
  )
}



let defData = <><h4 className='text-center'>IT Support Associate II</h4>
<h5 className='text-center text-slate-600 italic'>Amazon</h5>
<ul className='list-disc pl-9'>
  <li>Wrote Python scripts to automate network documentation capture.</li>
  <li>Isolated and secured compromised end user equipment, including thin clients, laptops, and mobile devices.</li>
  <li>Developed wiki pages using HTML, CSS, and Bootstrap for internal documentation.</li>
  <li>Configure and install server IoT devices to monitor and log HVAC system data.</li>
</ul></>

let defData2 = <><h4 className='text-center'>Mechatronics Technician</h4>
<h5 className='text-center text-slate-600 italic'>Amazon</h5>
<ul className='list-disc pl-9'>
 <li>Something</li>
</ul></>

let defData3 = <><h4 className='text-center'>IT Equipment Coordinator</h4>
<h5 className='text-center text-slate-600 italic'>Amazon</h5>
<ul className='list-disc pl-9'>
<li>Something else</li>
</ul></>