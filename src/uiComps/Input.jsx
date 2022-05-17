
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Input({value, onChange}){

    return <TextareaAutosize style={{ minWidth: 600 }} value={value} onChange={e=>onChange(e.target.value)} className="sequenceInput"/>

}
