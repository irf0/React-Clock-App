import React, { useState } from 'react';

function App(){
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now) //Here 'now' is the initial value(when app starts)
    //'time' is the value and 'setTime' is the func. to call used it.
     
    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime) //Now the value of time is set to 'newTime'
    }
     setInterval(updateTime, 1000)

    return(
        <div className='container'>
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button> 
        </div>
    )
}  
export default App;