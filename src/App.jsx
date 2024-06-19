import { useState } from 'react'
import './App.css'

function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
     <main>
<div className='container'>
 
  
        <div className='trafficLight'>
          <div onClick={() => setSelectedColor("red")}
            className={`light red ${selectedColor === "red" ? "glow" : ""}`}></div> 
          <div onClick={() => setSelectedColor("yellow")}
            className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}></div> 
          <div onClick={() => setSelectedColor("green")}
            className={`light green ${selectedColor === "green" ? "glow" : ""}`}></div> 
       </div>
        </div>
        </main>
    </>
  )
}

export default TrafficLight
