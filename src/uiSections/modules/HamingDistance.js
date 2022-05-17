import { Button } from "@mui/material";
import { useAppData } from "../../helpers";


export default function HamingDistance() {

    const {value , calculateHD} = useAppData()
    let u = value.hammingDistance
    return <div className="f ac">
        <Button variant='contained' onClick={calculateHD}>Haming Distance</Button>
        {
            u && <p>{u}</p>
        }
    </div>
}
