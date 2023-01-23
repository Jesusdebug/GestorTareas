import React from 'react'

const Todo = ({todo,todoDelete,todoToogleComplete,setTodoEdit}) => {
    return (
    <div className='container' >
     <div className='card mt-2'>
        <div className='card-body'>
            <h1 className='card-title text-right'>
                {todo.title}
                <button 
                onClick={()=>todoToogleComplete(todo.id)}
                className={`btn btn-sm ${todo.complete?'btn-outline-success':'btn-success'} ml-2`}>
                   {todo.complete?'Terminado':'Terminar'}
                </button>
            </h1>
            <p className='card-text text-right'>
                {todo.description}
            </p>
            <hr/>
            <div className='d-flex justify-content-end'>
                <button 
                onClick={()=>setTodoEdit(todo)}
                className='btn btn-sm btn-outline-primary mr-2'>
                    Editar
                </button>
                <button 
                onClick={()=>todoDelete(todo.id)}
                className='btn btn-sm btn-outline-danger mr-2'>
                    Eliminar
                </button>
            </div>
        </div>
   </div>
    </div>
  )
}

export default Todo