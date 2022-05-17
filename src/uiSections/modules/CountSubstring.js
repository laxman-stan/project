import { TextField } from "@mui/material";
import { useState } from "react";
import { useAppData } from "../../helpers";
import { SingleStringOperation } from "../../uiComps";

export default function CoundSubstring({index}){

    const {value, countSubstring} = useAppData()
    const [string, setss] = useState()
    let u = value.substringCount[index]
    const setStringVal=e=>{
        setss(e.target.value.toUpperCase())
    }
    return <div className="f ac">
        <TextField
            id="outlined-number"
            label="String"
            type="text"
            value={string}
            onChange={setStringVal}
        />
        <SingleStringOperation
            renderData={u}
            btnClick={()=>{
                countSubstring(index, string)
            }}
            btnText="Count Substring"
        />
    </div>
}
