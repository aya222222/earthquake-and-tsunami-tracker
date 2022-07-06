import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import Feed from './Feed';

const Timeline = () => {
    const {info}  = useContext(DataContext);

  return (
    <div>
   <Feed info={info} />
</div>
  )
}

export default Timeline