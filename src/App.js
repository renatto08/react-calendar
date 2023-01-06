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
      [key]: { [Date.now()]: task }

    }
    );
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => manageMonthChange(-1)}> {'<'} </button>
        {currentDate.toLocaleDateString('es-PE', options)}
        <button onClick={() => manageMonthChange(1)}>{'>'}</button>
        {/* <Calendar currentDate={cD} /> */}

        <div className='calendar'>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wendesday</div>
          <div>Turday</div>
          <div>Friday</div>
          <div>Saturday</div>
          {

            Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() }, (_, i) => (
              <div key={i} className='calendarItem' ></div>
            ))
          }
          {
            Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() }, (_, index) => {
              const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${index + 1}`;
              // console.log(key)
              // console.log(tasks[key])
              return (<div key={index} className='calendarItem' onClick={() => addTask(key)} > {index + 1}

                {Array.from(tasks).length > 0 ? Array.from(tasks[key]).map((value) => console.log(value)) : "hola"
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
