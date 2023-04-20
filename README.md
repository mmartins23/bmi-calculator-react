# BMI Calculator App

This is a simple React web application that calculates BMI (Body Mass Index) and displays a message and an image based on the BMI value.


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Features

- Calculates BMI based on user input for weight and height
- Displays a message and an image based on the BMI value
- Allows the user to reset the form

## Installation

1. Clone the repository:

```js
git clone https://github.com/mmartins23/bmi-calculator-react`
```

2. Navigate into the project directory:

```js
cd bmi-calculator-react
```

3. Install the dependencies:

```js
npm install
```

4. Run the project:

```js
npm start
```

5. Open your browser and navigate to **`http://localhost:3000`** to see the BMI calculator app in action.

## Usage

To use the BMI Calculator App, follow the steps below:


1. Enter your weight in kilograms and your height in meters in the input fields.
2. Click on the "Calculate" button to calculate your BMI.
3. Your BMI will be displayed, along with a message indicating whether you are underweight, at a healthy weight, or overweight.
4. An image of a Pokemon will be displayed corresponding to your weight status.
5. If you want to reset the calculator, click on the "Reset" button.

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

This code defines five state variables using the **`useState`** hook in a React functional component called **`App`**.

- **`weight`** and **`setWeight`** are used to manage the weight value entered by the user. The initial state of **`weight`** is set to 0.
- **`height`** and **`setHeight`** are used to manage the height value entered by the user. The initial state of **`height`** is set to 0.
- **`bmi`** and **`setBmi`** are used to manage the calculated body mass index (BMI) value. The initial state of **`bmi`** is an empty string.
- **`message`** and **`setMessage`** are used to manage the message to be displayed based on the calculated BMI value. The initial state of **`message`** is an empty string.
- **`imageSrc`** and **`setImageSrc`** are used to manage the image displayed based on the calculated BMI value. The initial state of **`imageSrc`** is set to a default image of a Pokemon character.

Each state variable is declared using array destructuring syntax, where the first element represents the current state value and the second element represents a function to update the state value. The **`useState`** hook is used to create these state variables and set their initial values.


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

This code defines a function named **`calcBmi`** that is called when the form is submitted. The function takes an event object **`e`** as its parameter.

The first statement in the function calls **`preventDefault()`** on the event object, which prevents the default form submission behavior from occurring. This is done to ensure that the form data is processed by the **`calcBmi`** function and not by the browser.

The function then checks if **`weight`** and **`height`** are both non-zero. If either **`weight`** or **`height`** is zero, an alert message is displayed requesting the user to enter values for **`weight`** and **`height`**. Otherwise, the function calculates the body mass index (BMI) of the user using the formula **`weight / (height * height)`**, and sets the calculated value to the **`bmi`** state variable using the **`setBmi()`** function.

The function then uses an **`if-else`** statement to determine the user's weight category based on the calculated BMI value. If the BMI is less than 18.5, the user is considered underweight, and the **`message`** state variable is set to "You are underweight". The **`setImageSrc()`** function is also called to change the source of the image displayed on the page to the image of an underweight Pokemon.

If the BMI is between 18.5 and 24.9 (inclusive), the user is considered to have a healthy weight, and the **`message`** state variable is set to "You are at a healthy weight". The **`setImageSrc()`** function is called again to change the source of the image displayed on the page to the image of a healthy weight Pokemon.

If the BMI is greater than 24.9, the user is considered overweight, and the **`message`** state variable is set to "You are overweight". The **`setImageSrc()`** function is called for the third time to change the source of the image displayed on the page to the image of an overweight Pokemon.

Overall, the **`calcBmi`** function is responsible for updating the **`bmi`**, **`message`**, and **`imageSrc`** state variables based on the user's input and the calculated BMI value.


* reload Function

```js
  const reload = () => {
    window.location.reload()
  }
```

The **`reload`** function is a simple function that is called when the "Reset" button is clicked. It uses the **`window.location.reload()`** method to reload the current page, which essentially resets the entire BMI calculator.

This function is defined using the arrow function syntax and is bound to the **`onClick`** event of the "Reset" button. When the "Reset" button is clicked, this function is called, which then reloads the page and resets all the values in the BMI calculator, including the weight, height, BMI, message, and image source.

Overall, the **`reload`** function is a simple way to reset the BMI calculator and start over again if the user wants to input new values or start over from scratch.


## Technologies Used

The BMI Calculator application is built using the following technologies:

- React
- CSS
- HTML



## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more information.


## Contact

You can reach me on [Twitter](https://twitter.com/23mmartins)


Feel free to send me a message if you have any questions or feedback about this project. I'll do my best to respond as soon as possible.