import React from 'react';
import ReactDOM from 'react-dom';

//FSO Exercises 1.1 and 1.2

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
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
  console.log(props)
  return (
    <div>
      <p>{props.part1 && props.part1.name} {props.part1 && props.part1.exercises}</p>
      <p>{props.part2 &&props.part2.name} {props.part2 && props.part2.exercises}</p>
      <p>{props.part3 && props.part3.name} {props.part3 && props.part3.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1.name} exercises1={props.part1.exercises}/>
      <Part part2={props.part2.name} exercises2={props.part2.exercises}/>
      <Part part3={props.part3.name} exercises3={props.part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part1 && props.part1.exercises + props.part2 && props.part2.exercises + props.part3 && props.part3.exercises}</p>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

