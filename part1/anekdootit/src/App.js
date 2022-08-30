import { useState } from "react";

const getRandomInt = ({maxNum}) => {
  let rand = Math.floor(Math.random()*maxNum)
  return rand
}

const findVotes = (scoreArray) => {
  // Finding highest amount of votes
  const max = Math.max(...scoreArray)
  
  // Finding the index of most voted
  const index = scoreArray.indexOf(max)
  console.log("votes: ", max, " / index: ", index)

  return index
  }

const App = () => {
  
  const updateLine = () => {
    let i = getRandomInt({maxNum})
    return setSelected(i)
  }
  
  const addPoint = () => {
    // Copying the scoreboard and adding the vote to current anecdote
    const copyArray = [...scoreArray]
    copyArray[selected] += 1
  
    // Overwriting old scoreboard with updated scores
    return setScore(copyArray)
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const maxNum = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [scoreArray, setScore] = useState([])
  if (scoreArray.length === 0) {
    setScore(new Array(anecdotes.length).fill(0))
  } else {
    var maxIndex = findVotes(scoreArray)
  }
   
  return (
    <div>
      <p>{scoreArray}</p>
      <p>{anecdotes[selected]}</p>
      <p>has {scoreArray[selected]} votes</p>
      <button onClick={updateLine}>next anecdote</button>
      <button onClick={addPoint}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {scoreArray[maxIndex]} votes</p>
    </div>
  )
}

export default App;
