import { useAppData } from "../../helpers"
import { SingleStringOperation } from "../../uiComps"   
import { TextField, MenuItem } from "@mui/material"
import { useState } from "react"
export default function ContentPercentage({index}){

    const {contentPercentage, value} = useAppData()
    let u = value.contentPercentage[index]

    const [item, setItem] = useState()

    return <div className='f ac'>
        <TextField
        //   id="outlined-select-currency"
          select
          label="Select"
          value={item}
          onChange={e=>setItem(e.target.value)}
        //   helperText="Select an item"
        >
          {data.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <SingleStringOperation renderData={u && Math.round(u*10000)/100+"%"} btnText="Get Content Percentage" btnClick={()=>contentPercentage(index, item)}/>
    </div>
}

const data = [
    {
      value: 'A',
      label: 'A',
    },
    {
      value: 'T',
      label: 'T',
    },
    {
      value: 'G',
      label: 'G',
    },
    {
      value: 'C',
      label: 'C',
    },
  ];