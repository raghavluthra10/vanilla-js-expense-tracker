import React from 'react'

function Calc(props) {
       

    return (
        <div  className='center' >
            <button style={{width: "120px"}} onClick={props.ac} value='ac'> AC </button>
            <button style={{width: "120px"}} onClick={props.del} value='del'> Del </button>

            <br></br>

            <button onClick={props.numbers}  value='0' > 0 </button>
            <button onClick={props.numbers} value='1'> 1 </button>
            <button onClick={props.numbers} value='2'> 2 </button>
            <button onClick={props.numbers} value='*'> x </button>
            <br></br>

            <button onClick={props.numbers} value='3' > 3 </button>
            <button onClick={props.numbers} value='4'> 4 </button>
            <button onClick={props.numbers} value='5'> 5 </button>
            <button onClick={props.numbers} value='+'> + </button>

            <br></br>

            <button onClick={props.numbers} value='6'>  6 </button>
            <button onClick={props.numbers} value='7'> 7 </button>
            <button onClick={props.numbers} value='8'> 8 </button>
            <button onClick={props.numbers} value='-'> - </button>

            <br></br>

            <button onClick={props.numbers} value='9'> 9 </button>
            <button onClick={props.numbers} value='.'> . </button>
            <button onClick={props.numbers} value='/'> ÷ </button>

            <button onClick={props.calculate} value='='> = </button>

        </div>
    )
}

export default Calc
