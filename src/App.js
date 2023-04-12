import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Calendar } from './components/Calendar';

function App() {
  const options = { month: 'long', year: 'numeric' }
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState({});

  const manageMonthChange = (number) => {
    // const cD = currentDate
    // console.log(currentDate)
    // cD.setMonth(0);
    // console.log(cD)
    // console.log(currentDate)
    const draffDate = new Date(currentDate)
    setCurrentDate(new Date(draffDate.setMonth(currentDate.getMonth() + number)));
  }
  const lastDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const addTask = (key) => {
    const task = prompt('Ingresa la actividad');
    if (!task) return;
    setTasks({
      ...tasks,
      [key]: { ...tasks[key], [Date.now()]: task }

    }
    );
  }
  const removeTask = (keyDay, keyActivity) => {
    const tasksOfTheDay = { ...tasks[keyDay] };
    // delete tasksOfTheDay[keyActivity];
    // setTasks({
    //   ...tasks,
    //   [keyDay]: { ...tasksOfTheDay }
    // })
    const { [keyActivity]: removedProperty, ...otherActivities } = tasksOfTheDay
    console.log(removedProperty, otherActivities)
    setTasks({
      ...tasks,
      [keyDay]: { ...otherActivities }
    })
  }


  return (
    <div className="App">
      <div>
        <h3>
          <button onClick={() => manageMonthChange(-1)}> {'<'} </button>
          {currentDate.toLocaleDateString('es-PE', options)}
          <button onClick={() => manageMonthChange(1)}>{'>'}</button>
        </h3>
        <div className='calendar'>
          <div className='calendarheader'>Sunday</div>
          <div className='calendarheader'>Monday</div>
          <div className='calendarheader'>Tuesday</div>
          <div className='calendarheader'>Wendesday</div>
          <div className='calendarheader'>Turday</div>
          <div className='calendarheader'>Friday</div>
          <div className='calendarheader'>Saturday</div>
          {

            Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() }, (_, i) => (
              <div key={i} className='calendarItem' ></div>
            ))
          }
          {
            Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() }, (_, index) => {
              const key = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${index + 1}`;
              // console.log(key)
              return (
                <div key={index} className='calendarItem' onClick={() => addTask(key)} > {index + 1}
                  {
                    tasks[key] ?
                      Object.entries(tasks[key]).map((val) => <p key={val[0]} onClick={(e) => {
                        e.stopPropagation()
                        removeTask(key, val[0])
                      }}>{val[1]}</p>) : ""
                  }

                </div>)

            }


            )
          }
        </div>
      </div>

    </div >
  );
}

export default App;
