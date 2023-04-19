import { useState } from 'react';
import './index.css';

function App() {

  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [imageSrc, setImageSrc] = useState('https://static.pokemonpets.com/images/monsters-images-800-800/4228-Unown-Question.webp');

  const calcBmi = (e) => {
    e.preventDefault();

    if(weight === 0 || height === 0) {
      alert('Please enter value for weight and height');
    } else {
      let bmi = (weight / (height * height)).toFixed(1);
      setBmi(bmi);

      // logic for message
        if (bmi < 18.5) {
          setMessage("You are underweight");
          setImageSrc('https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          setMessage("You are at a healthy weight");
          setImageSrc('https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png');
        } else {
          setMessage("You are overweight");
          setImageSrc("https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png");
        }
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>

          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>

          <div>
            <button className="btn" type="submit">Calculate</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reset</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imageSrc} alt='Pokemon Img' />
        </div>

      </div>
    </div>
  );
}

export default App;
