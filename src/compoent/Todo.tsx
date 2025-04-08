import { useEffect } from 'react';
import { useTodoStore } from '../Store/Store';
const Todo = () => {

    const todos = useTodoStore((state) => state.todos);
    const loading = useTodoStore((state) => state.loading);
    const error = useTodoStore((state) => state.error);
    const fetchTodos = useTodoStore((state) => state.fetchTodos);

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <div className='mb-20'>
            {error != '' && <p className='text-center text-red-500'>{error}</p>}
            {loading && <p>Loading...</p>}
            <ul className='mx-10 my-5 max-h-96 overflow-auto'>
                {todos.map((todo) => (
                    <li className={`p-1 ${todo.completed ? 'bg-green-200' : 'bg-red-200'}`} key={todo.id}>{todo.id} - {todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;