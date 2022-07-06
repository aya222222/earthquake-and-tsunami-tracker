import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext';
import {formatToTimeZone} from 'date-fns-timezone';

import Tsunami from './Tsunami';
import Earthquake from './Earthquake';

const Warnings = () => {
  const {info}  = useContext(DataContext);

  const FORMAT = 'YYYY-MM-DD HH:mm';
  const TIME_ZONE_TOKYO = 'Asia/Tokyo';
  const now = new Date();
  let currentJPT = new Date(formatToTimeZone(now, FORMAT, {timeZone: TIME_ZONE_TOKYO}));
  console.log(new Date(currentJPT))
  let earthquakeWarningFlag = false;
  let tsunamiWarningFlag = false;
  let filterEarthquakeWarning = info.map(item => {
    //filter earthquake(551) and tsunami(552) info
    
    let warningTime = new Date(item.time);
    console.log(currentJPT - warningTime, item.time)
     if(item.code == 551 && item.issue.type==="ScalePrompt" && currentJPT - warningTime < 300000){ 
      earthquakeWarningFlag = true;
      console.log(item.issue.type)
        let deleteIndex = item.earthquake.time.indexOf('日')+1;
       return <Earthquake  item={item} deleteIndex={deleteIndex} />
     
       } 

      
}
  
   )

   let filterTsunamiWarning = info.map(item => {
    //filter earthquake(551) and tsunami(552) info
    
    let warningTime = new Date(item.time);
    console.log(currentJPT - warningTime, item.time)
      if(item.code == 552 && (item.issue.type==="Focus" || item.issue.type==="focus") && currentJPT - warningTime < 300000){
        tsunamiWarningFlag = false;
        return <Tsunami  item={item}/>
       }
      
}
  
   )


  return (
    <div className='earthquake-warning'>

 
    {earthquakeWarningFlag ? filterEarthquakeWarning : <p>No Earthquake Warning</p>}
     {tsunamiWarningFlag ? filterTsunamiWarning : <p>No Tsunami Warning</p>}
      </div>

  )
}

export default Warnings