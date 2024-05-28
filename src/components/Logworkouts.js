import React, { useState } from 'react';
import './styles/Log_workout.css';

function Log_workouts({ children }) {
  const [workoutLogs, setWorkoutLogs] = useState([]);

  const handleWorkoutLog = (e) => {
    e.preventDefault();
    const { date, exercise, duration } = e.target.elements;
    const newLog = {
      date: date.value,
      exercise: exercise.value,
      duration: duration.value
    };
    setWorkoutLogs([...workoutLogs, newLog]);
    e.target.reset();
  };

    return (
        <div className="main3">
            <div className="maincontent3">
            <div className='fitnestrackimg'></div>
            <div className="workout-log">
        <h2>Workout Log</h2>
        <form onSubmit={handleWorkoutLog}>
          <input type="date" name="date" required className='datachooser' />
          <input type="text" name="exercise" placeholder="Exercise" required className='textarealog'/>
          <input type="number" name="duration" className='durationmin' placeholder="Duration (minutes)" required />
          <button type="submit" className='submitbtn'>Log Workout</button>
        </form>
        <div className='scrolpane'>
        <div className="log-list">
          {workoutLogs.map((log, index) => (
            <div key={index} className="log-item">
              <p>Date: {log.date}</p>
              <p>Exercise: {log.exercise}</p>
              <p>Duration: {log.duration} minutes</p>
            </div>
          ))}
        </div>
        </div>
      </div>
            </div>
        </div>
    )
}

export default Log_workouts