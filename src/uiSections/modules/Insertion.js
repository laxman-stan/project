import { useAppData } from "../../helpers"
import { SingleStringOperation } from "../../uiComps"   
import { TextField } from "@mui/material"
import { useState } from "react"
export default function Insertion({index}){

    const {insertion, value} = useAppData()
    let u = value.afterInsertion[index]

    const [string, setString] = useState();
    const [position, setPosition] = useState()

    const setStringVal=(e)=>{
        setString(e.target.value)
    }
    const setPositionVal=(e)=>{
        setPosition(parseInt(e.target.value))
    }

    return <div className='f ac'>
        <TextField
            id="outlined-number"
            label="String"
            type="text"
            value={string}
            onChange={setStringVal}
        />
        <TextField
            id="outlined-number"
            label="Position"
            type="number"
            value={position}
            onChange={setPositionVal}
        />
        <SingleStringOperation renderData={u && u.sequence()} btnText="Insert" btnClick={()=>insertion(index, string, position)}/>
    </div>
}
