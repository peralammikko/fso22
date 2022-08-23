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
      <Header courseName = {course.name}/>
      <Content courseParts = {course.parts}/>
      <Total courseParts = {course.parts}/>
    </div>
  )
}
export default App