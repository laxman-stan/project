import { useAppData } from "../../helpers";
import { SingleStringOperation } from "../../uiComps";

export default function ReplicateSequence(){

    const {makeReplicate, value} = useAppData()

    return <div className='f'>
        <SingleStringOperation renderData={value.replicate()} btnText="Replicate" btnClick={makeReplicate}/>
    </div>
}
