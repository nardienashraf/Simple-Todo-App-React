import React from 'react'

function TodoList({ todos, setTodos , setEditTodo}) {

    const handleComplete = (todo) => {
        setTodos(todos.map(item => {
            if(item.id == todo.id){
                return {...item, completed: !todo.completed}
            }
            return item;
        }))
    }

    const handleEdit = ({id})=>{
        const findTodo = todos.find(todo => todo.id == id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
       setTodos(todos.filter((todo)=> todo.id !== id));
    }

    return (
        <div>
            {todos.map((todo) => {
                return <li className='list-item' key={todo.id}>
                    <input className={`list ${(todo.completed)? 'complete': ''}`} type='text' value={todo.title}  />

                    <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>
                        <i class="fa-solid fa-circle-check"></i>
                    </button>

                    <button className='button-edit task-button'>
                        <i class="fa-solid fa-pen-to-square" onClick={()=>{handleEdit(todo)}}></i>
                    </button>

                    <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </li>
            })}
        </div>
    )
}

export default TodoList;
