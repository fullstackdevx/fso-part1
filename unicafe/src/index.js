import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GOOD_AVERAGE_WEIGHT = 1
const NEUTRAL_AVERAGE_WEIGHT = 0
const BAD_AVERAGE_WEIGHT = -1

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  const all = () => good + neutral + bad
  const averageScore = () => all() === 0 ? 0 : (good * GOOD_AVERAGE_WEIGHT + neutral * NEUTRAL_AVERAGE_WEIGHT + bad * BAD_AVERAGE_WEIGHT) / all()
  const positivePercentage = () => all() === 0 ? 0 : good * 100 / all()

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseGoodByOne}>good</button>
      <button onClick={increaseNeutralByOne}>neutral</button>
      <button onClick={increaseBadByOne}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all()}</p>
      <p>average {averageScore()}</p>
      <p>positive {positivePercentage()} %</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
