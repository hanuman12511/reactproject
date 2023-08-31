import { useState } from "react"

export default function Order(){
    const [isSlect,setSelect] = useState("")
    function selectbtn(){
        (isSlect==="on")?alert("on"):(isSlect==="off")?alert("off"):alert("select on or off")
    }
    return(
        <>
        <h1> Order</h1>
        <h1><input type="radio" value="on" checked={isSlect==="on"} onChange={d=>setSelect(d.currentTarget.value)}/> Online</h1>
        <h1><input type="radio" value="off" checked={isSlect==="off"} onChange={d=>setSelect(d.currentTarget.value)}/> OffLine</h1>
        <button onClick={selectbtn}>OK</button>
        </>
    )
}