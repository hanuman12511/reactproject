import { useReducer } from "react"
import ReducerE from './ReducerE'
import {initial} from './Initial'
export default function Reducerss()
{
const [state,dispatch] =useReducer(ReducerE,initial)

function Incr(){
    dispatch({types:'incr'})

}
function Decr(){
    dispatch({types:'decr'})

}

    return(<>
        <h1>Reducerss={state.count}</h1>
        <button onClick={Incr}>++</button>
        <button onClick={Decr}>--</button>
        </>
    )
}