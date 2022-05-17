import { useAppData } from "../../helpers"
import {Button} from '@mui/material';

export default function MapSequence(){

    const {value : {mappedResult, ntSequences}, mapSequences} = useAppData()
    const showResults = !!mappedResult

    return <div className="f ac">
        <Button onClick={mapSequences} variant='contained'>Map sequences</Button>
        {
            showResults && <div>{
                mappedResult?.results().map((i, j)=><RenderResult index={j} result={i} sequences={ntSequences} key={j}/>)
                }</div>
        }
        
    </div>
}

const RenderResult=({sequences, result, index})=>{
    const s1 = sequences[0].sequence()
    const s2 = sequences[1].sequence()

    // if(s2.length > s1.length){
    //     [s1, s2] = [s2, s1]
    // }    

    const tl = (s2.length - 1) * 2 + s1.length
    // const array = Array.from(Array(s1.length + s2.length -1).keys())
    const s1array = [...new Array(s2.length - 1).fill(0), ...s1, ...new Array(s2.length - 1).fill(0)]
    const s2array = [...new Array(index).fill(0), ...s2, ...new Array(tl - index - s2.length + 1).fill(0)]

    return <div className="f os">
        <div style={{marginTop: 12}} className="f">
                {"Score\n" + result}
            </div>
        {s1array.map((i, j)=><RenderInside len={s2.length - 1} itemA={i} index={j} itemB={s2array[j]} key={j}/>
        )} 
        </div>

}

const RenderInside=({itemA, itemB, index, len})=>{
    
    const color = (itemA===0 || itemB===0) ? 'blue' : itemA === itemB ? 'green' : 'red'
    return <div style={{marginBottom: 16}} className="f fc ">
        <div className="textBox f ac js" style={{color: 'black', border: "1px solid black"}}>{index-len}</div>
        <div style={{background: color}} className="textBox f ac js">{itemA}</div>
        <div style={{background: color}} className="textBox f ac js">{itemB}</div>
    </div>
}
