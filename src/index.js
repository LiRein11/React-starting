// import React, {Component} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';
// // import reportWebVitals from './reportWebVitals';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
    // this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }))
    // } // 2 способ использования обработчика событий (Привязки)
//   }

//   nextYear = () => {
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   } // 3 способ использования обработчика событий 
  // nextYear() {
  //   console.log(1);
  //   // this.state.years++ // Так нельзя делать
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // } // 1 способ использования обработчика событий (Привязки)
//   render() {
//     const { name, surname, link } = this.props;
//     const { years } = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years-{years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name='John' surname='Smith' link='facebook.com' />
//       <WhoAmI name='Ivan' surname='Smith' link='vk.com' />
//       <WhoAmI name='Alex' surname='Shepard' link='facebook.com' />
//     </>
//   )
// }

// ReactDOM.render(
//   <All />,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
