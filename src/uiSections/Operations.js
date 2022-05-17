import { useAppData } from "../helpers"
import { ComplementSequence, CoundSubstring, HamingDistance, SkewChart, Polymerize, MapSequence, ContentPercentage, Deletion, Insertion, RepeatModule, Translate } from "./modules"

export default function Operations({ index }) {
    const { value: { ntSequences } } = useAppData()
    const isTwoStrings = ntSequences[0] && ntSequences[1]

    return <div style={{ gap: 40 }} className="f fc ">
        {
            isTwoStrings ? <>
                <div style={{...line, marginTop: 8}}/>
                <MapSequence />
                <div style={line}/>
                <Polymerize />
                <div style={line}/>
                <HamingDistance/>
            </> : ntSequences[0] ? <>
                <div style={{...line, marginTop: 8}}/>
                <ComplementSequence index={index} />
                <div style={line}/>
                <Deletion index={index} />
                <div style={line}/>
                <Insertion index={index} />
                <div style={line}/>
                <RepeatModule index={index} />
                <div style={line}/>
                <Translate index={index} />
                <div style={line}/>
                <SkewChart index={index}/>
                <div style={line}/>
                <ContentPercentage index={index} />
                <div style={line}/>
                <CoundSubstring index={index}/>
            </> : null
        }
    </div>
}

const line={
    width: "100%",
    height: 1,
    background: "black",
}
