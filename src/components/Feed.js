import React from 'react'
import Earthquake from './Earthquake';
import InfoDetails from './InfoDetails';
import Map from './Map';
const Feed = ({info}) => {
    console.log(info)
  return (
    <>
    {info.map(item => {
        //filter earthquake(551) and tsunami(552) info
         if(item.code == 551 || item.code == 552){
            let deleteIndex = item.earthquake.time.indexOf('日')+1;
            
           return  <>
           
           <InfoDetails 
           deleteIndex = {deleteIndex}
            key={item.id} 
            item={item}
            />  
            </>
          }
    }
      
       )}
    </>
  )
}

export default Feed