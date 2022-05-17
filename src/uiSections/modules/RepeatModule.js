import { useAppData } from "../../helpers";
import { useState } from "react";
import { TextField } from "@mui/material";
import { SingleStringOperation } from "../../uiComps";

export default function RepeatModule({index}){

    const { Repeat, value } = useAppData()
    const [times, setTimes] = useState(0);

    let u = value.repeated[index]
    const setLengthVal=(e)=>{
        setTimes(parseInt(e.target.value))
    }
    return <div className="f ac">
        <TextField
            id="outlined-number"
            label="No of times"
            type="number"
            value={times}
            onChange={setLengthVal}
        />
        <SingleStringOperation renderData={u && u.sequence()} btnClick={() => {
            Repeat(index, times)
        }} btnText="Repeat" />
    </div>
}
