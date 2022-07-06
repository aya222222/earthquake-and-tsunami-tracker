import React from 'react'
import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import EachShindoAndCities from './EachShindoAndCities';
import useCheckShindo from '../hooks/useCheckShindo';
import Map from './Map';

const InfoDetails = ({ item, deleteIndex }) => {
   
    //Maximum Seismic Intensity
    let shindo = useCheckShindo(item.earthquake.maxScale)
  
    //Hypocenter
    let lat = item.earthquake.hypocenter.latitude;
    let lon = item.earthquake.hypocenter.longitude;

    //depth of hypocenter
    let depth = item.earthquake.hypocenter.depth;

    //magnitude
    let magnitude = item.earthquake.hypocenter.magnitude;

    //Tsunami
    let tsunami = item.earthquake.domesticTsunami;
    
    //sort shindo of each eachShindoAndlocations




let points = item.points.sort((a, b) => {
  console.log(a.scale)
 return  a.scale > b.scale? -1 : 1;
 
})
console.log(points);


     //organize each location according to shindo

    let eachShindoAndlocations = points.reduce((acc, cur) => {
     
      const element = acc.find(el => el.shindo == cur.scale)
      if(element) {
          element.location.push(cur.addr)
      }else {
        
         acc.push({
             shindo:cur.scale,
             location:[cur.addr],
             open: false
         })
      }
      return acc;
  },[])

    console.log(eachShindoAndlocations);
    
    const [details, setDetails] = useState(eachShindoAndlocations);
    console.log(details)
    const showCities = (index) => {
        setDetails(
            details.map((detail, i) => {
              
              if(index === i) {
                  detail.open = !detail.open;
                  console.log(detail.open)
              }else {
                  detail.open = false;
              }

              return detail;
            })
         )
    }


  return (
      <div className="each-case">
    
          <table  className="info-table">
              <tbody>
                  <tr>
                    <th>Announced at</th>
                    <th>Time of occurrence</th>
                    <th>Maximum Seismic Intensity</th>
                    <th>Hypocenter</th>
                    <th>Depth of Hypocenter</th>
                    <th>Magnitude</th>
                    <th>Tsunami</th>
                  </tr>
                  <tr>
                      <td>{item.time.slice(0, -7)}</td>
                      <td>{item.earthquake.time.replace('時',':').slice(deleteIndex,-1)}</td>
                      <td>{shindo}</td>
                      {lat ? <td>{lat}, {lon}</td> : <td>No Information</td> }
                      {depth ? <td>{depth}</td> : <td>No Information</td>}
                      {magnitude ? <td>{magnitude}</td> : <td>No Information</td>}
                      <td>{tsunami}</td>
                  </tr>
              </tbody>
          </table>
          <Map />
   {points.length !=0 &&
     <section className="shindo-and-cities-section">
    <h2>Seismic Intensity of Each Locations</h2>
      {/* each shindo of eachShindoAndlocations */}
       {details.map((detail, index) =>(
        <EachShindoAndCities  
        id={index} 
        shindoAndcities={detail}
        showCities={showCities}
        />
       
     ))}
 </section>      
}
        </div>


  )
}

export default InfoDetails