import React from 'react';
import { getDate, getMonth, getYear, format } from 'date-fns';
import {formatToTimeZone} from 'date-fns-timezone';
const Time = () => {
//   let current = format(new Date(), 'yyyy-MM-dd HH:mm')
  const FORMAT = 'YYYY-MM-DD HH:mm';
  const TIME_ZONE_TOKYO = 'Asia/Tokyo';
  const now = new Date();
 

  return (
    <div className='current-time'>Current Time in Japan:{ formatToTimeZone(now, FORMAT, {timeZone: TIME_ZONE_TOKYO})} </div>
  )
}

export default Time