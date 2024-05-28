import React, { useState } from "react";
import './styles/main.css';
import './styles/TrackData.css';
import { fetchBMI } from './utils/NutritionCalculator_api';
import { fetchCaloriesData } from "./utils/caloriestrack_api";

function TrackData({ children }) {
    const [bmiResult, setBmiResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const heightFeet = formData.get('feet');
        const heightInches = formData.get('inches');
        const weight = formData.get('lbs');

        try {
            const bmi = await fetchBMI(heightFeet, heightInches, weight);
            setBmiResult(bmi);
        } catch (error) {
            console.error(error);
            
        }
    };

    const [activity, setActivity] = useState("");
    const [weight, setWeight] = useState(160);
    const [duration, setDuration] = useState(60);
    const [caloriesData, setCaloriesData] = useState([]);

    const handleCaloriesSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await fetchCaloriesData(activity);
            setCaloriesData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const [showBmiCalculator, setShowBmiCalculator] = useState(false);
    const [showCaloriesCalculator, setShowCaloriesCalculator] = useState(false);

    const handleBpmRateCard1Click = () => {
        setShowBmiCalculator(true);
        setShowCaloriesCalculator(false);
    };

    const handleBpmRateCard2Click = () => {
        setShowCaloriesCalculator(true);
        setShowBmiCalculator(false);
    };
    const [kgInput, setKgInput] = useState('');
    const [lbsOutput, setLbsOutput] = useState('');
    const [error, setError] = useState('');

    const convertKgToLbs = () => {
        const kgValue = parseFloat(kgInput);
        if (!isNaN(kgValue)) {
            const lbsValue = kgValue * 2.20462;
            setLbsOutput(lbsValue.toFixed(2));
            setError('');
        } else {
            setLbsOutput('');
            setError('Please enter a valid weight in kg');
        }
    };

    return (
        <div className="track">
            <div className="trackcontent">
                <p className="behindtext">Fitness Tracking</p>
                <div className="mainimage2"></div>
                <div className="trackdata">
                    <div className="bpmratecard" onClick={handleBpmRateCard1Click}>
                        <div className="musel"></div>
                        <div className="hearttext">BMI Range</div>
                        <div className="heartrate">75%</div>
                    </div>
                    <div className="bpmratecard" onClick={handleBpmRateCard2Click}>
                        <div className="heart heartbeat"></div>
                        <div className="hearttext2">Calories Burned</div>
                        <div className="heartrate">89</div>
                    </div>
                    <div className="bpmratecard">
                        <div className="GPS"></div>
                        <div className="gpstxt">GPS</div>
                        <div className="heartrate">Colombo</div>
                    </div>
                </div>
                <div class="calculator">
                    <h2>Kg to Lbs Calculator</h2>
                    <form id="kgToLbsForm" className="form2">
                        <label htmlFor="kgInput" className="label2">Enter weight in kg:</label>
                        <input
                            type="number"
                            id="kgInput"
                            value={kgInput}
                            onChange={(e) => setKgInput(e.target.value)}
                            required
                        />
                        <button type="button" className="button2" onClick={convertKgToLbs}>Convert</button>

                        <div className="lbsresult result2">
                        {lbsOutput && <p>{kgInput} kg is equal to {lbsOutput} lbs</p>}
                        {error && <p>{error}</p>}
                    </div>
                    </form>
                </div>
                {showBmiCalculator && (
                    <div className="nutritionCalculator">
                        <div id="result" className="result">{bmiResult && <p>Your BMI is: {bmiResult}</p>}</div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="heightFeet">Height (Feet):</label>
                            <input type="number" id="heightFeet" name="feet" defaultValue="5" required /><br></br>
                            <label htmlFor="heightInches">Height (Inches):</label>
                            <input type="number" id="heightInches" name="inches" defaultValue="2" required /><br></br>
                            <label htmlFor="weight">Weight (lbs):</label>
                            <input type="number" id="weight" name="lbs" defaultValue="120" required /><br></br>
                            <button type="submit">Calculate BMI</button><br></br>
                        </form>
                    </div>
                )}

                {showCaloriesCalculator && (
                    <div className="caloriescal">
                        <div className="calories-container">
                            <form onSubmit={handleCaloriesSubmit}>
                                <div className="activityimg"></div>
                                <label htmlFor="activity" className="inputtext" >Activity:</label>
                                <input
                                    type="text"
                                    id="activity"
                                    value={activity}
                                    onChange={(e) => setActivity(e.target.value)}
                                    required
                                    className="input"
                                />
                                <label htmlFor="weight" className="inputtext">Weight (lbs):</label>
                                <input
                                    type="number"
                                    id="weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    min={50}
                                    max={500}
                                    className="input2"
                                />
                                <label htmlFor="duration" className="inputtext">Duration (minutes):</label>
                                <input
                                    type="number"
                                    id="duration"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    min={1}
                                    className="input2"
                                />
                                <button type="submit">Calculate</button>
                            </form>
                            <div className="calories-output">
                                {caloriesData.map((item, index) => (
                                    <div className="calories-card" key={index}>
                                        <h3>{item.name}</h3>
                                        <p>Calories Per Hour: {item.calories_per_hour}</p>
                                        <p>Duration Minutes: {item.duration_minutes}</p>
                                        <p>Total Calories: {item.total_calories}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TrackData