import { useEffect, useState } from 'react'

function App() {
const [counter, setCounter] = useState(0);
const [todo, setTodo] = useState([{
  "id":3,"title":"Todo 3","description":"This is todo 3","completed":false
},{
  "id":4,"title":"Todo 4","description":"This is todo 4","completed":false}
]);

useEffect(()=>{
  fetch("https://sum-server.100xdevs.com/todos")
  .then(async (res) =>{
    const json = await res.json();
    setTodo(json.todos);
  })
},[counter])

return (
  <div>
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Counter</button>
    {todo.map(todo => {return <div key={todo.id}><p> title={todo.title} description={todo.description}</p></div>} )}
  </div>
)
}

export default App