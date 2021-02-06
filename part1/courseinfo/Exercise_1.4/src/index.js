import React from 'react';
import ReactDOM from 'react-dom';

//FSO Exercises 1.4

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7
  },

  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.number}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} number={props.exercises1}/> /* exercises go here */
      <Part part={props.part2} number={props.exercises2}/>
      <Part part={props.part3} number={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

