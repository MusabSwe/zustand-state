import { create } from "zustand";

// TS types
type CounterState = {
  count: number;
  increment: (num: number) => void;
  decrement: (num: number) => void;
}


type TodoState = {
  todos: Array<any>;
  loading: boolean;
  error: string;
  fetchTodos: () => void;
  addTodo: (todo: any) => void;
  removeTodo: (id: number) => void;
}

// Hooks

// counter custom hook
export const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: (num) => set((state) => ({ count: state.count + num })),
  decrement: (num) => set((state) => ({ count: state.count - num })),
}));


export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  loading: false,
  error: '',
  fetchTodos: async () => {
    try {
      set({ loading: true });
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      // console.log('res', res);
      const data = await res.json();
      // console.log('data:', data);
      set({ todos: data, loading: false });
    } catch (e: any) {
      console.log('e:', e.message);
      set({ error: e.message, loading: false });
    }
  },
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }))
}))