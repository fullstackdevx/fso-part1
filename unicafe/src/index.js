import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GOOD_AVERAGE_WEIGHT = 1
const NEUTRAL_AVERAGE_WEIGHT = 0
const BAD_AVERAGE_WEIGHT = -1

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const averageScore = all === 0 ? 0 : (good * GOOD_AVERAGE_WEIGHT + neutral * NEUTRAL_AVERAGE_WEIGHT + bad * BAD_AVERAGE_WEIGHT) / all
  const positivePercentage = all === 0 ? 0 : good * 100 / all
  const isfeedBackGiven = all !== 0

  if (isfeedBackGiven) {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />

          <Statistic text="all" value={all} />
          <Statistic text="average" value={averageScore} />
          <Statistic text="positive" value={positivePercentage} />
        </tbody>
      </table>
    )
  }
  return <p>No feedback given</p>
}

const Statistic = ({ text, value }) => <tr><th>{text}</th><td>{value} {text === "positive" ? "%" : ""}</td></tr>

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGoodByOne} text="good" />
      <Button handleClick={increaseNeutralByOne} text="neutral" />
      <Button handleClick={increaseBadByOne} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
