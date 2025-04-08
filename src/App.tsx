import './App.css'
import Counter from './compoent/Counter'
import Todo from './compoent/Todo'
function App() {

  return (
    <div className='font-mono'>
      <h1 className='text-center font-bold pt-3'>Zustand Examples</h1>
      <Counter />
      <hr />
      <Todo />
    </div>
  )
}

export default App
