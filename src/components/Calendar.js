import React, { useState, useEffect } from 'react';
import '../styles/Calendar.css'
export const Calendar = ({ currentDate }) => {

  const nextMonthDay1 = new Date(currentDate.setMonth(currentDate.getMonth() + 1, 1));
  const lastDayOfCurrentMonth = new Date(nextMonthDay1.setDate(nextMonthDay1.getDate() - 1));
  const days = new Set();
  // console.log(month - 1);
  for (let i = 0; i < lastDayOfCurrentMonth.getDate(); i++) {
    days.add(i);
  }
  // console.log(days)

  return (
    <div className='calendar'>
      <div>Sunday</div>
      <div>Monday</div>
      <div>Tuesday</div>
      <div>Wendesday</div>
      <div>Turday</div>
      <div>Friday</div>
      <div>Saturday</div>
      {
        Array.from(days).map((val) =>
          <div className='calendarItem' >{val + 1}</div>
        )
      }
    </div>
  )
}
