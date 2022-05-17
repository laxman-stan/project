import { useEffect, useRef, useState } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { useAppData } from "../../helpers";
import { Button } from "@mui/material";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

export default function SkewChart({index}){

    const {value, makeSkewChart} = useAppData()
    let v = value.chartData[index]
    
    let [data, setData] = useState(null)
    useEffect(()=>{

        if(v){
            // console.log(v[0]);
            setData({
                labels : v[0],
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: v[1],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    pointRadius: 1,
                    tension: 0.3
                  },
                  
                ],
              })
        }

    }, [value])

    return <div className='f ac'>
        {
          data && <div style={{width: "80%"}}>
          <Line options={options} data={data}/>
      </div>
        }
        <Button variant='contained' onClick={()=>makeSkewChart(index)}>Make skew chart</Button>
    </div>
}
