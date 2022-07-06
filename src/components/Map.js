import React from 'react'
import { Component } from 'react';
import {GoogleMap, LoadScript, Circle} from '@react-google-maps/api';


const Map = () => {
    const containerStyle = {
        width: '500px',
        height: '500px'
      };
      
      const center = {
        lat:37.4461875,
        lng:140.1601612
      };
  return (
      
    <div className="map">
        <LoadScript
         googleMapsApiKey='AIzaSyAKKWamgSSWgGD-S11-3swovX55NAEyVWs'
        >
         <GoogleMap
           mapContainerStyle={containerStyle}
           center={center}
           zoom={5}
         >
         </GoogleMap>   
        </LoadScript>
    </div>
  )
}

export default Map