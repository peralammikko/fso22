import { useState } from 'react';

// Click handler
const Button = ( {handleClick, text} ) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const getAverage = ({good, neutral, bad}) => {
  let sum = 0

  // Adding good reviews (+1 each)
  sum = sum + good*1

  // Adding bad reviews (-1 each)
  sum = sum + bad*(-1)

  const total = good + neutral + bad
  const avg = sum/total

  return avg
}

const StatisticLine = ( {text, value} ) => {
  return (
    <td>{text} {value}</td>
  )
}

const Statistics = ({good, neutral, bad}) => {

  // Counting total reviews
  let totalRevs = good + bad + neutral
  if (totalRevs === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={good} />
          </tr>
          <tr>
            <StatisticLine text='neutral' value={neutral} />
          </tr>
          <tr>
            <StatisticLine text='bad' value={bad} />
          </tr>
          <tr>
            <StatisticLine text='all' value={totalRevs} />
          </tr>
          <tr>
            <StatisticLine text='average' value={getAverage({good, neutral, bad})} />
          </tr>
          <tr>
            <StatisticLine text='positive' value={good/totalRevs*100 + ' %'} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [ good, setGood] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral' />
      <Button handleClick={() => setBad(bad+1)} text='bad' />

      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App;
