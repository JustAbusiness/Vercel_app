import React, { useState } from 'react';

const TodoApp = () => {
    const [work, setWork] = useState('')
    const [todos, setTodos] = useState([]);
  
    const handleAdd = () => {
      if (todos?.some(item => item.id === work?.replace(/\s+/, ''))) {
        console.log("Bị Trùng rồi");
      } else {
        setTodos(prev => [...prev, {id: work?.replace(/\s+/, ''), job: work }]);
        setWork('');
      }
    }
  
    const handleDelete = (id) => {
      setTodos(prev => prev.filter(item => item.id !== id));
    }
  
    return (
      <div className='flex flex-col gap-8 h-screen items-center border border-red-500 justify-center bg-purple-900'>
        <div className='flex gap-5'>
            <input
              type='text'
              name=''
              className='outline-none border-2 border-blue-400 py-2 w-[400px] rounded-lg '
              value={work}
              onChange={e => setWork(e.target.value)}
            />
  
            <button
              type='butto'
              className='outline-none px-4 py-2 bg-blue-500 rounded-lg text-white'
              onClick={handleAdd}
            >
              Add
            </button>
        </div>
  
        <div className='flex ' >
          <h3 className='text-red-500 font-bold'> Content :  </h3>
          <ul className=''>
            {todos.length !== '' &&  todos?.map((todo, index) => (
              <li className=' flex gap-4 text-white text-base py-2 px-2 w-auto text-center mb-4 rounded-md' key={todo.id}> 
                <span className='flex items-start px-3 py-2 border-2 border-purple-500'> {todo.job} </span> 
                <span className='flex items-end  px-3 py-2 bg-red-600 rounded-full cursor-pointer' onClick={() => handleDelete(todo.id)}> X </span>
               </li> 
      
            ))}
          </ul>
        </div>
  
      </div>
    )
};

export default TodoApp;