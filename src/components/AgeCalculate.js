import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateAge = () => {
    const currentDate = new Date();
    const selectedDate = new Date(birthDate);

    if (selectedDate > currentDate) {
      alert('Please select a valid date.');
      return;
    }

    const ageDiff = currentDate - selectedDate;

    const years = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((ageDiff / (1000 * 60 * 60 * 24) - years * 365) / 30.44);
    const days = Math.floor((ageDiff / (1000 * 60 * 60 * 24)) % 30.44);
    const hours = Math.floor((ageDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ageDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((ageDiff / 1000) % 60);

    setAge({ years, months, days, hours, minutes, seconds });
  };

  return (
    <>
     <h1 className=' heading'> welcome To Website </h1>
     <p className=' heading2'>Here You Can Calculate Your age :)</p>
    <div className='ageCalculate'>
       
     <h1><label htmlFor="birthDate" className='text'>Enter your birth date </label></h1> 
      <input
        type="datetime-local"
        id="birthDate"
        className='inputage'
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge} className='calbtn'>Calculate</button>
      </div>
      {age.years > 0 && (
        
        <p className='age-box'>
         <h1>Your age is</h1>
         <h2>{`${age.years} years, ${age.months} months, ${age.days} days`} 
         </h2>
         <h2>{`${age.hours} hours, ${age.minutes} minutes, ${age.seconds} seconds.`}</h2>
        </p>
      )}
   
    </>
  );
};

export default AgeCalculator;
