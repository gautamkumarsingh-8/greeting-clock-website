import React, { useState } from 'react'
import './Greeting.css';
import moring from '../imgs/morning.png';
import afternoon from '../imgs/sunny_5257745.png';
import goodevening from '../imgs/cloudy-night_10991177.png';
import night from '../imgs/b7c6e3728eff3c64ef4c9907e1986598.png';

const Greeting = () => {
  let date = new Date()
  let curTime = date.toLocaleTimeString()

  const [time, setTime] = useState(curTime);

  const update = () => {
    let date = new Date()
    let curTime = date.toLocaleTimeString()
    setTime(curTime);

  }
  setInterval(() => {
    update()
  }, 1000)

  let hour =date.getHours();
  let msg;
  let img;

  if (hour >= 5 && hour < 12) {
    msg = "GOOD MORNING"
    img= moring
  }
  else if (hour >= 12 && hour < 18) {
    msg = "GOOD AFTERNOON"
    img = afternoon
  }

  else if (hour >= 18 && hour<22) {
    msg = "GOOD EVENING"
    img = goodevening
  }
  else if (hour > 22  ) {
    msg = "GOOD NIGHT"
    img = night
  }
  else if (hour < 5  ) {
    msg = "GOOD NIGHT"
    img = night
  }

  return (
    <div className='container'>
      <h2>Greeting Website</h2>
      <h1>{time} </h1>
      <p>{msg}</p>
       <img src={img} alt='img' style={{width:"200px"}}/>
    </div>
  )
}

export default Greeting