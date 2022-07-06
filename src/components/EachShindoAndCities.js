import React from 'react'
import useCheckShindo from '../hooks/useCheckShindo'

const EachShindoAndCities = ({shindoAndcities, id, showCities}) => {
   let shindo = useCheckShindo(shindoAndcities.shindo)
   console.log(shindo)
  return (
  <div
   className={"shindo-and-cities-info " + (shindoAndcities.open ? "open" : "")}
   key={id}
   onClick={() => showCities(id)}
  >
  <div className={"each-shindo"}>{shindo}</div>
  <div className="each-cities">
    {shindoAndcities.location.map(place => 
      (<span>{place}, </span>))}
  </div>    
 </div>
  )
}

export default EachShindoAndCities