# BMI Calculator

This is a simple BMI (Body Mass Index) calculator built with React. It allows users to enter their weight and height, and calculates their BMI based on the metric system (kg/m²). The calculator also provides a message to the user based on their BMI result, indicating whether they are underweight, at a healthy weight, or overweight.

The project is a great example of how to use React to build a simple yet useful tool that can help users keep track of their health and fitness goals.

## Table of Contents

- [Introduction](#bmi-calculator)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Technologies

This project is a BMI calculator created using React, HTML and CSS. The app takes in a user's weight and height inputs and calculates their BMI value. The user is then provided with a message indicating whether they are underweight, at a healthy weight or overweight based on their BMI result. 


## Getting Started

Follow the instruction below: 

1. Clone the repository to your local machine using git clone https://github.com/username/repo.git.

2. Navigate to the project directory using cd repo.

3. Install the required dependencies using npm install.

4. Start the development server using npm start.

5. Open a web browser and navigate to http://localhost:3000.

6. Enter your weight and height in the appropriate fields and click the "Calculate" button.

7. The BMI result will be displayed on the page, along with a message indicating whether you are underweight, at a healthy weight, or overweight.

8. To reset the calculator, click the "Reset" button.

9. To exit the development server, press Ctrl+C in the terminal.

10. To deploy the application, run npm run build to create a production-ready build of the application. Then, follow the deployment instructions for your hosting provider of choice.


## Documentation

Documentation that outlines how the code is intended to be used and provides examples of its usage is essential for facilitating understanding and enabling effective use of the code. 

* States

```js
 // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [imageSrc, setImageSrc] = useState('https://static.pokemonpets.com/images/monsters-images-800-800/4228-Unown-Question.webp');
```

The code uses the <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">useState</span></span> hook from React to create five different state variables: <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">weight</span></span>, <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">height</span></span>, <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">bmi</span></span>, <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">message</span></span>, and <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">imageSrc</span></span>.

Each state variable is declared using the <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">const</span></span> keyword followed by the name of the variable, and then set using the <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">useState</span></span> hook, passing in an initial value as an argument.

For example, the first state variable <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">weight</span></span> is declared using <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">const</span></span>, followed by the name of the variable, and then set using <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">useState(0)</span></span>. This sets the initial value of <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">weight</span></span> to 0.

Similarly, the <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">height</span></span> state variable is declared and set to 0, the <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">bmi</span></span> and <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">message</span></span> state variables are declared as empty strings (<span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">''</span></span>), and the <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">imageSrc</span></span> state variable is set to a URL that points to an image of a Pokémon.

These state variables can be used throughout the component to store and manage state, and updating them with their respective <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">set</span></span> functions will trigger a re-render of the component, allowing for the new state to be reflected in the UI.

Overall, this code demonstrates the use of the <span style="background-color:whitesmoke; font-weight:bold"><span style="color:crimson">useState</span></span>  hook to manage state within a React component.


* calcBmi Function

```js
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
```

This code defines a function <span style="background-color:whitesmoke; color:crimson; font-weight:bold">calcBmi</span> that is called when the user clicks a button to calculate their BMI.

The first line of the function is <span style="background-color:whitesmoke; color:crimson; font-weight:bold">e.preventDefault()</span>, which prevents the default action of the form submission from occurring, allowing the function to handle the submission of the form.

The next line checks if the <span style="background-color:whitesmoke; color:crimson; font-weight:bold">weight</span> or <span style="background-color:whitesmoke; color:crimson; font-weight:bold">height</span> state variables are equal to 0. If either of them is 0, an alert message is displayed asking the user to enter values for weight and height.

If both <span style="background-color:whitesmoke; color:crimson; font-weight:bold">weight</span> and <span style="background-color:whitesmoke; color:crimson; font-weight:bold">height</span> are not 0, the function calculates the user's BMI using the formula <span style="background-color:whitesmoke; color:crimson; font-weight:bold">weight / (height * height)</span> and rounds the result to one decimal place using the <span style="background-color:whitesmoke; color:crimson; font-weight:bold">toFixed(1)</span> method.

The calculated BMI is then set as the new value of the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">bmi</span> state variable using the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">setBmi</span> function.

The code then checks the value of <span style="background-color: whitesmoke; color: crimson; font-weight: bold">bmi</span> and sets the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">message</span> and <span style="background-color: whitesmoke; color: crimson; font-weight: bold">imageSrc</span> state variables based on the calculated BMI. If the BMI is less than 18.5, the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">message</span> is set to "You are underweight" and the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">imageSrc</span> is set to a URL that points to an image of a Pokémon. If the BMI is between 18.5 and 24.9, the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">message</span> is set to "You are at a healthy weight" and the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">imageSrc</span> is set to a different Pokémon image URL. If the BMI is greater than 24.9, the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">message</span> is set to "You are overweight" and the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">imageSrc</span> is set to yet another Pokémon image URL.

Overall, this code handles the the calculation of the user's BMI and updates the UI with a message and an image based on the calculated BMI.


* reload Function

```js
  const reload = () => {
    window.location.reload()
  }
```

The <span style="background-color: whitesmoke; color: crimson; font-weight: bold">reload</span> function is used to reload the page when the user clicks on the "Reload" button.

* return statement 

The <span style="background-color: whitesmoke; color: crimson; font-weight: bold">return</span> statement returns the JSX that represents the component's UI. It contains a form that contains two input fields for weight and height, and two buttons, one to submit the form and one to reload the page. When the user submits the form, the <span style="background-color: whitesmoke; color: crimson; font-weight: bold">calcBmi</span> function is called to calculate the BMI, and the result is displayed in the UI along with a message and an image based on the BMI value.

## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more information.

## Contact

You can reach me on [Twitter](https://twitter.com/23mmartins)


Feel free to send me a message if you have any questions or feedback about this project. I'll do my best to respond as soon as possible.
