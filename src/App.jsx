import { useEffect, useState } from 'react'

function App() {
const [counter, setCounter] = useState(0);
const [todo, setTodo] = useState([]);

useEffect(()=>{
  console.log(counter+" inside use");
  fetch("https://sum-server.100xdevs.com/todos")
  .then(async (res) =>{
    const json = await res.json();
    setTodo(json.todos);
  })
},[counter])

return (
  <div>
    {console.log(counter+" inside app")}
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Counter</button>
    {todo.map(todo => {return <div key={todo.id}><p> title={todo.title} description={todo.description}
      </p></div>} )}
  </div>
)
}

export default App