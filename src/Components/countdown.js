import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

import '../styles/countdown.css'


const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
          <DateTimeDisplay className='ind' value={days} type={'Days'} />
          <span> : </span>
          <DateTimeDisplay className='ind' value={hours} type={'Hours'} />
          <span> : </span>
          <DateTimeDisplay className='ind' value={minutes} type={'Mins'} />
          <span> : </span>
          <DateTimeDisplay className='ind' value={seconds} type={'Seconds'} />
      </div>
    );
  };
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}/>
    );
  }
};

export default CountdownTimer;