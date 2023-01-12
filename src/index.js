// Exercises: Level 1
// Why you need to map an array ?
//Because it is necessary to format the elements of an array in order to insert them into a react component
// Why we need keys during mapping an array ?
//In order to identify each element
// What is the importance of destructuring your code ?
// Destructuring the props makes them easier to read
// Does destructuring make your code clean and easy to read ?
// Yes

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Numbers generator
  // const numbers = []
  // const amount = parseInt(window.prompt('how many numbers do you want?'))

  // for (let i = 0; i <= amount; i++) {
  //   let type
  //   let isPrime = true
  //   if(i % 2 === 0 || i === 0){
  //     type = 'even'
  //   }else if(i % 2 !== 0 || i === 1){
  //     type = 'odd'
  //   }

  //   if(i !== 0 && i !== 1){
  //     for (let j = 2; j <= i-1; j++) {

  //       if(i % j === 0 ){
  //         isPrime = false
  //         break
  //       }
  //     }
  //   }
  //   if(isPrime && i !== 0 && i !== 1){
  //     type = 'prime'
  //   }
  //   numbers.push({number: i, type: type})
  // }

  // const NumberComp = ({ number }) =>(
  //   <div className={number.type + ' number'} >{number.number}</div>
  // )

  // const NumbersComp = ({ numbers }) =>{
  //   const numberList = numbers.map(num => (
  //     <NumberComp key={num.number} number={num}/>
  //   ))
  //   return <div className='numbers-wrapper'>{numberList}</div>

  // }

  // const App = () =>(
  //   <div className='wrapper'>
  //     <h1>30 Days of React</h1>
  //     <h2>Number Generator</h2>
  //     <NumbersComp  numbers={numbers}/>
  //     <footer></footer>
  //   </div>
  // )

//Hexadecimal 

const hexaGenerator = (num)  => {
  let str = '0123456789abcdef'
  let colors = []
  for(let i = 0; i< num; i++){
    let color = '#'
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    colors.push(color)
  }
  return colors
}

const Color = ( {color} ) =>(
  <div className='color' style={{backgroundColor: [color]}}>{color}</div>
)

const Colors = ( {num} ) =>{
  const colorsList = hexaGenerator(num).map(col => (<Color key={col} color={col} />))
  return <div className='colors-wrapper'>{colorsList}</div>
}


const App = () => {
  const num = parseInt(prompt('How many colors do you want?'))

  return (
    <div className='wrapper'>
      <h1>30 Days of JavaScript</h1>
      <h2>Hexadecimal colors generator</h2>
      <Colors num={num}/>
      <footer></footer>
    </div>
)
}

console.log(hexaGenerator(7))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

