
import { useAppData } from '../../helpers';
import { SingleStringOperation } from '../../uiComps';

export default function ComplementSequence({index}){
    const {makeCompliment, value} = useAppData()
    let u = value.complements[index]

    return <div className='f'>
        <SingleStringOperation renderData={u && u.sequence()} btnText="Complement" btnClick={()=>makeCompliment(index)}/>
    </div>
}
