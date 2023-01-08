import './Chart.css';
import ChartBar from './ChartBar';

const Chart =(props)=>{
    
    const dataPointValue=props.dataPoints.map(dataPoint=>dataPoint.value)
    const maxdataPointValue=Math.max(...dataPointValue)
    console.log('in chart file')
    
    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint)=>
            <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}  
            maxValue={maxdataPointValue}  
            label={dataPoint.label}/>
            )}
        </div>

    )
}
export default Chart;