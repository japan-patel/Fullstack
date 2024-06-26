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
      <Header header={course} />
      <Content  part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
      <Total total={part1.exercises+ part2.exercises + part3.exercises} />
    </div>
  )
}

//Header component. Displays course name

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

//Content component. Displays parts and exercise numbers
const Content = (props) => {
  return (
    <>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
    </>
  )
}

//Part content.
const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}
//Total component. Displays total number of exercises

const Total = (props) => {
  return (
    <div>
      <p>{props.total}</p>
    </div>
  )
}

export default App