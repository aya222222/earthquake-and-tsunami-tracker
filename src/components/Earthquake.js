import React from 'react'

const Earthquake = ({item, deleteIndex}) => {
  return (
    <>
    <h2>{item.earthquake.time.replace('時',':').slice(deleteIndex,-1)}</h2>
    <p>{item.earthquake.maxScale}</p>
    <p>{item.earthquake.hypocenter.name}</p>
    </>
  )
}

export default Earthquake