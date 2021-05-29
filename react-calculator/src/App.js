import './App.css';
import Calc from './Calc';
import InputVal from './InputVal'
import { useState } from 'react'


function App() {

  const [ result, setResult ] = useState('')

  function doTheWork (e) {
    setResult((result + e.target.value).toString())
  }

  function calculate(e) {
    try{
      setResult(eval(result))
    } 
    catch(err) {
      setResult('Error')
    }

  }

  function allClear(e) {
    setResult('')
  }

  function backSpace(e) {
    try{
      setResult(result.slice(0, -1))
    }
    catch(err) {
      setResult('Error')
    }
  }

  return (

    <div className="app">
      <h1 className='center'>
        Calculator
      </h1> 

    <div className='inputVal'>
    <InputVal 
    working={result}/>  
    </div>  
    
    <Calc 
    numbers={doTheWork} 
    calculate={calculate}
    ac={allClear}
    del={backSpace}
    />
    </div>
  );
  
}
export default App;
