import React,{createContext,useContext} from 'react'
import Todo from './Todo'


const ThemeContext = createContext(null);

const TodoList = ({todos,todoDelete,todoToogleComplete,setTodoEdit}) => {
  const theme = useContext(ThemeContext);
  const className='todo-'+theme

  return (
   <div className={className} >
   <h2 className="text-right display-4">
     Gestor de tareas
   </h2>
   {
    todos.length===0?
      (
        <div className='alert alert-primary'>
          No hay tareas, por favor agrega una {":)"}
        </div>
      ):
      (   todos.map(todo=>(
                <Todo
                  todo={todo} 
                  key={todo.id}
                  todoDelete={todoDelete}
                  todoToogleComplete={todoToogleComplete}
                  setTodoEdit={setTodoEdit}
                />
              )
             )
      )
    }
   </div>
  )
}

export default TodoList