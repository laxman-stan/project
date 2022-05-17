import { SInput } from "../uiComps";
import { useState } from "react";
import {Radio, FormControl, RadioGroup, FormControlLabel, Button} from '@mui/material';
import { useAppData } from "../helpers";

export default function SequenceInput(){

    let {value , setValue, makeSequence, reset } = useAppData();
    const sequences = value.sequences
    const changeValue= (val, index) =>{
        let u = sequences
        u[index] = val
        setValue({...value})
    }

    return <div style={{gap: 20, position: 'relative'}} className="f fc">
    {
        [0,1].map(i=><RenderItem makeNt={makeSequence} value={sequences[i]} onChange={changeValue} key={i} index={i}/>)
    }
        <div style={{ right: 0, position: 'absolute'}}>
        <Button color="secondary" onClick={reset} variant='contained'>Reset</Button>

</div>
    </div>
}

const RenderItem=({value, onChange, index, makeNt})=>{

    const [val, setValue] = useState(null);

  const handleChange = (event) => {
    let t = event.target.value
    setValue(event.target.value);
    makeNt(index, t)
  };
    return <div style={{marginRight: 24}} className="f ac">
      <SInput value={value} onChange={val=>onChange(val, index)}/>
        <FormControl>
        {/* <FormControlLabel control={<Checkbox checked={isChecked} onChange={toggleCheck} size="small" />} label="Fasta" /> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={val}
        onChange={handleChange}
      >
        <FormControlLabel value="DNA" control={<Radio />} label="DNA" />
        <FormControlLabel value="RNA" control={<Radio />} label="RNA" />

      </RadioGroup>
    </FormControl>
        
    </div>
}