import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (<h1>{course}</h1>)
}

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (<p>{name} {exercises}</p>)
}

const Total = ({ parts }) => {
  const total = parts.reduce((accum, part) => accum + part.exercises, 0)
  return (<p>Number of exercises {total}</p>)
}

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
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
