import React, { useEffect, useState } from 'react'
const initialFormValues={
    title:'',
    description:''
}
const TodoForm = ({todoAdd,todoEdit,todoUpdate,setTodoEdit}) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit)
        }else{
            setFormValues(initialFormValues)
        }
    }, [todoEdit])
    

    const{title, description}=formValues;



    const handleInputChange=(e)=>{
        const changedFormValues={
            ...formValues,
            [e.target.name]:e.target.value
        }
        setFormValues(changedFormValues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        if(title.trim()===''){
            setError('Debes indicar un titulo')
            return
        }
        if(description.trim()===''){
            setError('Debes indicar una descipcion')

            return
        }
        if (todoEdit) {
            console.log("aqui editando")
            console.log(formValues)
            todoUpdate(formValues)
            setSuccess('Tarea Actualizado con exito');

        }else{
            todoAdd(formValues)
            setSuccess('Tarea agregada con exito');
            setFormValues(initialFormValues)
        }
        setTimeout(()=>{
            setSuccess(null)
        },2000)
        setError(null)
    }
  return (
        <div className='container'>
            <h4 className='text-center display-4'>
                {todoEdit?'Editar tarea':'Nueva tarea'}
            </h4>
            {
                todoEdit&&
                    <button
                    onClick={()=>setTodoEdit(null)}
                        className='btn btn-sm btn-warning mb-2'
                    >
                    Cancelar edicion
                    </button>
            }
             
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titulo"
                    className='form-control'
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='Descripcion'
                    className='form-control mt-2'
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                >
                </textarea>
                <button
                    className='btn btn-primary btn-block mt-2'
                >
                  {todoEdit?'Actualizar tarea':'Agregar tarea'}

                </button>
            </form>
            {
                error &&
                (
                    <div className='alert alert-danger mt-2'>
                        {error}
                    </div>
                )
            }
           {
            success && 
            (
                <div className='alert alert-success mt-2'>
                    {success}
                </div>
            )
           }
        </div>
    )
}

export default TodoForm