import { useEffect, useRef } from 'react';
import { useTodoStore } from '../Store/Store';
const Todo = () => {

    const todos = useTodoStore((state) => state.todos);
    const loading = useTodoStore((state) => state.loading);
    const error = useTodoStore((state) => state.error);
    const fetchTodos = useTodoStore((state) => state.fetchTodos);
    const removeTodo = useTodoStore((state) => state.removeTodo);
    const addTodo = useTodoStore((state) => state.addTodo);

    const input: any = useRef(null);
    const handleTodo = () => {
        console.log(input?.current?.value);
        const todo = {
            userId: '11',
            id: todos.length + 1,
            title: input.current.value,
            completed: true
        }
        addTodo(todo);
        input.current.value = '';
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <>
            <div className='mb-20'>
                {error != '' && <p className='text-center text-red-500'>{error}</p>}
                {loading ? <p className='p-3 text-center'>Loading...</p>
                    :
                    <>
                        <div className='flex justify-center mt-4'>
                            <div className='space-y-4 bg-gray-300 p-4 rounded shadow-2xs'>
                                <div>
                                    <label>Todo: </label>
                                    <input
                                        ref={input}
                                        type="text"
                                        className='border-1 px-2 rounded focus:outline-0'
                                    />
                                </div>
                                <div className='flex justify-end'>
                                    <button onClick={handleTodo} className='p-1 rounded border-2 border-amber-300 hover:bg-amber-300 transition ease-in-out hover:text-white cursor-pointer focus:outline-0'>Add todo</button>
                                </div>
                            </div>
                        </div>
                        <ul className='mx-10 my-5 max-h-96 overflow-auto customScroll'>
                            {todos.map((todo) => (
                                <div key={todo.id} className={`flex justify-between pe-3 oy-1 ${todo.completed ? 'bg-green-200' : 'bg-red-200'}`} >
                                    <li className={`p-1`} >{todo.id} - {todo.title}</li>
                                    {todo.completed &&
                                        <button onClick={() => removeTodo(todo.id)} className='bg-white rounded my-1 px-2 py-1 hover:bg-red-600 hover:text-white transition-all ease-in-out cursor-pointer'>Remove</button>
                                    }
                                </div>
                            ))}
                        </ul>
                    </>
                }
            </div>
            <style>
                {`
                .customScroll::-webkit-scrollbar {
                    width: 6px;
                    
                }

                .customScroll::-webkit-scrollbar-track {
                    background: transparent;
                }

                .customScroll::-webkit-scrollbar-thumb {
                    background-color: gray;
                    border-radius: 3px;
                }

                .customScroll::-webkit-scrollbar-button {
                    display: none;
                }
                `}
            </style>
        </>
    );
}

export default Todo;