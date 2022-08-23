import { useState } from "react"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.count}
      </p>
    </div>
  )
}

const Content = (props) => {
  const cp = props.courseParts
  return (
    <div>
        <Part name = {cp[0].name} count = {cp[0].exercises} />
        <Part name = {cp[1].name} count = {cp[1].exercises} />
        <Part name = {cp[2].name} count = {cp[2].exercises} />
    </div>
    )
}

const Total = (props) => {
  const exArr = props.courseParts
  const exsum = exArr[0].exercises + exArr[1].exercises + exArr[2].exercises
  
  return (
    <div>
      <p>
        Number of exercises {exsum}
      </p>
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ( {handleClick, text } ) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  
  /*
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
      <Header courseName = {course.name}/>
      <Content courseParts = {course.parts}/>
      <Total courseParts = {course.parts}/>
    </div>
  )
      */
     const [ left, setLeft] = useState(0)
     const [ right, setRight ] = useState(0)
     const [ allClicks, setAllClicks ] = useState([])

     
     const handleLeftClick = () => {
       setAllClicks(allClicks.concat('L'))
       setLeft(left+1)
     }

     const handleRightClick = () => {
      setAllClicks(allClicks.concat('R'))
      setRight(right+1)
    }
     
     return (
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />

      </div>
  )
}
export default App