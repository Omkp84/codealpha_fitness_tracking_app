import React, { useState } from 'react';
import './styles/Log_workout.css';

function Goals({ children }) {
    const [fitnessGoals, setFitnessGoals] = useState([]);

    const handleFitnessGoal = (e) => {
        e.preventDefault();
        const newGoal = e.target.elements.goal.value;
        setFitnessGoals(prevGoals => [...prevGoals, newGoal]);
        e.target.reset();
    };

    return (
        <div className="main3">
            <div className="maincontent3">
                <div className='fitnestrackimggoal'></div>
                <div className="fitness-goal">
                    <h2>Fitness Goal</h2>
                    <form onSubmit={handleFitnessGoal}>
                        <input type="text" name="goal" placeholder="Enter your fitness goal" required className='Goalenter' />
                        <button type="submit" className='Goalenterbtn'>Set Goal</button>
                    </form>
                    <div className='scrolpane'>
                            {fitnessGoals.map((goal, index) => (
                                 <div className="goal-display">
                                <p className='goaldis' key={index}>
                                    <div className='targetimg'></div>
                                    <b>Your fitness goal {index + 1}:</b> {goal}
                                </p>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Goals