import { useState } from "react";
import "./BMI.css";
const BMI = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const reload = () => {
    window.location.reload();
  };

  const handleCalculations = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      alert("Please enter valid numbers for weight and height.");
      return;
    }

    const bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMsg("You are Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMsg("You are Healthy");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMsg("You are Overweight");
    } else {
      setMsg("You are Obese");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">BMI Calculator</h1>

        <form onSubmit={handleCalculations}>
          <div>
            <label className="labels">Age:</label>
            <br />
            <input
              className="bmi-input"
              type="number"
              placeholder="Age ..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <label className="labels">Weight (lbs):</label>
            <br />
            <input
              className="bmi-input"
              type="number"
              placeholder="Weight ..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label className="labels">Height (inches):</label>
            <br />
            <input
              className="bmi-input"
              type="number"
              placeholder="Height ..."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="cal-btn" type="submit">
              Calculate
            </button>
            <button className="reload-btn" type="button" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="result">
            <h3>Age: {age}</h3>
            <h3>Your BMI is: {bmi}</h3>
            <p className="p-msg">{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BMI;
