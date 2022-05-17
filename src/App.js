import './App.css';
import {createContext, useEffect, useRef, useState} from 'react';
import Nt from './ntSeq'
import { SequenceInput, Operations } from './uiSections';

export const AppData = createContext()

function App() {

  const [appData, setAppData] = useState({
    sequences: ["", ""],
    sequenceTypes: ["", ""],
    isFasta: [false, false],
    complements: [null, null],
    ntSequences: [null, null],
    afterDeletion: [null, null],
    afterInsertion: [null, null],
    repeated: [null, null],
    afterTranslation: [null, null],
    contentPercentage: [null, null],
    mappedResult: null,
    polymerized: null,
    hammingDistance: null,
    substringCount: [null, null],
    chartData: [null, null]
  })

  const reset=()=>{
    key.current++
    setAppData({
    sequences: ["", ""],
    sequenceTypes: ["", ""],
    isFasta: [false, false],
    complements: [null, null],
    ntSequences: [null, null],
    afterDeletion: [null, null],
    afterInsertion: [null, null],
    repeated: [null, null],
    afterTranslation: [null, null],
    contentPercentage: [null, null],
    mappedResult: null,
    polymerized: null,
    hammingDistance: null,
    substringCount: [null, null],
    chartData: [null, null]
    })
  }

  const key = useRef(0);
  const makeSequence=(i, type, isFasta=false)=>{
    let {sequences, ntSequences} = appData
      ntSequences[i] = (new Nt.Seq(type)).read(sequences[i])
      sequences[i] = ntSequences[i].sequence()
      setAppData({...appData})
  }

  const makeCompliment=i=>{
    let {ntSequences, complements} = appData;
    complements[i] = ntSequences[i].complement()
    setAppData({...appData})
  }

  const insertion=(i, sequence, position)=>{
    let {ntSequences} = appData;
    let s = (new Nt.Seq()).read(sequence)
    appData.afterInsertion[i] = ntSequences[i].insertion(s, position)
    setAppData({...appData})
  }

  const deletion=(i, start, length)=>{
    let {ntSequences, afterDeletion} = appData;
    afterDeletion[i] = ntSequences[i].deletion(start, length)
    setAppData({...appData})
  }

  const Repeat=(i, times)=>{
    let u = appData
    u.repeated[i] = u.ntSequences[i].repeat(times)
    setAppData({...u})
  }

  const translate=(i, offset)=>{
    console.log('called')
    let {ntSequences, afterTranslation} = appData;
    afterTranslation[i] = ntSequences[i].translate(offset)
    setAppData({...appData})
  }

  const makeSkewChart=(i)=>{
    let s1 = appData.ntSequences[i].sequence().toString().replace(/,/g, "")
    let data=[[], []]
    for(let i=0; i<s1.length; i++){
      let g = 0, c = 0;
      for(let j=0; j<=i; j++){
        if(s1[j]=="G")
          g++;
        if(s1[j]=="C")
          c++;
      }
      data[0].push(`${i}`)
      data[1].push(g-c)
    }
    appData.chartData[i] = data
    setAppData({...appData})
  }

  const polymerize=()=>{
    // console.log('called')
    let {ntSequences} = appData
    appData.polymerized = ntSequences[0].polymerize(ntSequences[1]).sequence();
    setAppData({...appData})
  }

  const calculateHD=()=>{
    let {ntSequences} = appData;
    let s1 = ntSequences[0].sequence()
    let s2 = ntSequences[1].sequence()
    let d = 0
    for(let i=0; i<s1.length; i++)
      if(s1[i] !== s2[i])
        d++
    appData.hammingDistance = d
    setAppData({...appData})
  }

  const countSubstring=(index, s2)=>{
    let s1 = appData.ntSequences[index].sequence()
    let s = s2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    appData.substringCount[index] = (s1.match(new RegExp(s, 'g')) || []).length.toString()
    setAppData({...appData})
  }


  const mapSequences=()=>{
    let {ntSequences} = appData;
    appData.mappedResult = ntSequences[0].mapSequence(ntSequences[1])
    appData.mappedResult.initialize()
    appData.mappedResult.sort()
    setAppData({...appData})
  }

  const contentPercentage=(i, item)=>{
    let {ntSequences, contentPercentage} = appData;
    contentPercentage[i] = ntSequences[i].fractionalContent()[item]
    setAppData({...appData})
  }

  const contextValue = {
    value : appData,
    setValue : data=>setAppData(data),
    makeSequence,
    makeCompliment,
    deletion,
    insertion,
    Repeat,
    translate,
    contentPercentage,
    mapSequences,
    polymerize,
    makeSkewChart,
    calculateHD,
    countSubstring,
    reset
  }

  return (<AppData.Provider value={contextValue}>
    <div className="App">
      <SequenceInput key={key.current}/>
      <Operations index={0}/>

    </div>
    </AppData.Provider>
  );
}

export default App;
