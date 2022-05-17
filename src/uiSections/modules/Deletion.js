import { useState } from "react";
import { useAppData } from "../../helpers";
import { SingleStringOperation } from "../../uiComps";
import TextField from '@mui/material/TextField';


export default function Deletion({ index }) {
    const { deletion, value } = useAppData()
    const [start, setStart] = useState(0);
    const [length, setLength] = useState(0);

    let u = value.afterDeletion[index]
    const setStartVal=(e)=>{
        setStart(parseInt(e.target.value))
        
    }
    const setLengthVal=(e)=>{
        setLength(parseInt(e.target.value))
    }
    return <div className="f ac">
        <TextField
            id="outlined-number"
            label="Start"
            type="number"
            value={start}
            onChange={setStartVal}
        />
        <TextField
            id="outlined-number"
            label="Length"
            type="number"
            value={length}
            onChange={setLengthVal}
        />
        <SingleStringOperation renderData={u && u.sequence()} btnClick={() => {
            deletion(index, start, length)
        }} btnText="Delete" />
    </div>
}
