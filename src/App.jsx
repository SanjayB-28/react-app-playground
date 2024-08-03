import react, { useState } from 'react'

function App() {
  const [todo,setTodo] = useState([{
    id:1,
    title: "Title1",
    description: "Description1"
  },{
    id:2,
    title: "Title2",
    description: "Description2"
  },{
    id:3,
    title: "Title3",
    description: "Description3"
  }
])

function addTodo(){
  setTodo([...todo,{
    id:4,
    title: "title4",
    description: "description4"
  }])
}
  return (
    <div>
      <TextWithButton />
      <Text text={"Text Component"} />
      <button onClick={addTodo}>Add Todo</button>
      {todo.map(todo => {return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>} )}
    </div>
  )
}

function TextWithButton(){
  const [count,setCount] = react.useState(0);

  function updateTitle(){
    setCount("TextWithButton "+Math.random());
  }

  return <div>
    <button onClick={updateTitle}>Update the Component</button>
    <Text text={count} />
    </div>
}
function Text(props){
  return <div>{props.text}</div>
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App