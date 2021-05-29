import React, { useState } from 'react'


function Clock() {

    let today = new Date();

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)


    function startClock() {
        setHours(today.getHours())
        setMinutes(today.getMinutes())
        setSeconds(today.getSeconds())
    }

    setTimeout(startClock, 1000)

    return (
        <div className='clock'>
            <h1>
            {hours} : {minutes} : {seconds}
            </h1>
        </div>
    )
}

// set the clock to update on its own using setTimeout

export default Clock
