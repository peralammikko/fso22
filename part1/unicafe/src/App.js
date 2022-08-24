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

const Statistics = ({good, neutral, bad}) => {

  // Counting total reviews
  let totalRevs = good + bad + neutral

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {totalRevs}</p>
      <p>Average {getAverage({good, neutral, bad})}</p>
      <p>Positive {good/totalRevs}</p>
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
