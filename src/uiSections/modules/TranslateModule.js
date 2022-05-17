import { useAppData } from "../../helpers"
import { SingleStringOperation } from "../../uiComps"   
import { TextField } from "@mui/material"
import { useState } from "react"
export default function Translate({index}){

    const {translate, value} = useAppData()
    let u = value.afterTranslation[index]

    const [position, setPosition] = useState()
    const setPositionVal=(e)=>{
        setPosition(parseInt(e.target.value))
    }

    return <div className='f ac'>
        <TextField
            id="outlined-number"
            label="Offset"
            type="number"
            value={position}
            onChange={setPositionVal}
        />
        <SingleStringOperation renderData={u} btnText="Translate" btnClick={()=>translate(index, position)}/>
    </div>
}