import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

//import your first component
import SecondCounter from './components/SecondCounter';

let counter = 0
setInterval(() => {
    const one = Math.floor(counter/1)
    const two = Math.floor(counter / 10)
    const three = 1
    const four = 1
    const five = 1
    const six = 1

    counter++
//render ypur react application
    ReactDOM.createRoot(document.getElementById('root')).render(
      <SecondCounter 
        numOne={one % 10}
        numTwo={two % 10}
        numThree={three}
        numFour={four}
        numFive={five}
        numSix={six} 
      />
  )
},1000);



