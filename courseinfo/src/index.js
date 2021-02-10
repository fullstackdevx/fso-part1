import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => (<h1>{course}</h1>)

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Part = ({ part }) => (<p>{part.name} {part.exercises}</p>)

const Total = ({ parts }) => (<p>Number of exercises {parts.reduce((accum, part) => accum + part.exercises, 0)}</p>)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
