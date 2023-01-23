import React,{useEffect, useState} from 'react'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'
const initialTodos=[
    {
        id:1,
        title:'Tarea # 1',
        description:'Descripción tarea 1',
        complete:false
    },
    {
        id:2,
        title:'Tarea # 2',
        description:'Descripción tarea 2',
        complete:false
    }
]
const localTodos=JSON.parse(localStorage.getItem('todos'));
export const App = () => {
    const [todos, setTodos] = useState(localTodos||initialTodos)
    const [todoEdit, setTodoEdit] = useState(null)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));   
    }, [todos])


    const todoDelete=(todoId)=>{
        if (todoEdit && todoId===todoEdit.id) {
            setTodoEdit(null)
        }
        const changedTodos=todos.filter(todo=>todo.id!==todoId)
        setTodos(changedTodos)
    }
// cambiar el estado
    const todoToogleComplete=(todoId)=>{
        // forma extenida
        // const changedTodos=todos.map(todo => {

        //     const todoEdit={
        //         ...todo,
        //         complete:!todo.complete
        //     }
        //     if (todo.id===todoId) {
        //         return todoEdit
        //     }else{
        //        return todo
        //     }
        // })
        const changedTodos= todos.map(todo=>(
            todo.id===todoId?{...todo, complete:!todo.complete}:todo
        ))
        setTodos(changedTodos)
    }
    const todoAdd=(todo)=>{
        const newTodo={
            id:Date.now(),
            ...todo,
            complete:false
        }
        const changedTodos=[
            newTodo,
            ...todos
        ]
        setTodos(changedTodos)
    }
    const todoUpdate=(todoEdit)=>{
        const changedTodos= todos.map(todo=>(
            todo.id===todoEdit.id ? todoEdit:todo
        ))
        setTodos(changedTodos);
    }
    
  return (
    <div className="Container mt-4">
        <div className='row'>
            <div className='col-8 '>
                <TodoList
                todos={todos}
                todoDelete={todoDelete}
                todoToogleComplete={todoToogleComplete}
                setTodoEdit={setTodoEdit}
                />
            </div>
            <div className='col-4'>
                <TodoForm
                todoEdit={todoEdit}
                todoAdd={todoAdd}
                todoUpdate={todoUpdate}
                setTodoEdit={setTodoEdit}
                />
            </div>
            <div className='text-center fw-semibold' style={{backgroundColor:'black',color:'white'}}>
           <strong>
            Mis redes
            <br/> 
            <a href='https://www.instagram.com/jesus_antonio97/'>Histagram</a>
            <br/>
            <a href='https://www.facebook.com/jesusantonio.rozozapata'>Facebook</a>
            <a href='https://github.com/Jesusdebug'>github</a>
           </strong>
            <footer>
            Este es un proyecto que sé ira construyendo a la medida para la comunidad, se integrará a  los servicios de Google calendar, también sé ira mejorando la experiencia en la interfaz del usuario
            </footer>
            </div>
        </div>
    </div>
  )
}
