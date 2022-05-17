import { TextField, Button } from "@mui/material"
import { useAppData } from "../../helpers"

export default function Add()     {

    const {polymerize, value} = useAppData()

    let u = value.polymerized
    return <div className="f ac">
        <Button onClick={polymerize} variant='contained'>Combine sequences</Button>
        {
            u&&<p>{u}</p>
        }
    </div>
}
