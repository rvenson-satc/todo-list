import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';

export default function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/tarefas').then(
      response => {
        setTodoList(response.data)
      }
    )
  }, [todoList]);

  const handleAddTodo = (newTodo) => {
    newTodo.id = uuidv4()
    axios.post('http://localhost:3000/tarefas', newTodo)
  }

  const handleDeleteTodo = (id) => {
    axios.delete(`http://localhost:3000/tarefas/${id}`)
  }

  const handleConcluirTodo = (id) => {
    axios.patch(`http://localhost:3000/tarefas/${id}`, {concluido: true})
  }

  const handleEditarTodo = (id, newTodo) => {
    axios.patch(`http://localhost:3000/tarefas/${id}`, newTodo)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">📝 To-Do List</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todoList={todoList}
          onDelete={handleDeleteTodo}
          onConclude={handleConcluirTodo}
          onEdit={handleEditarTodo}
        />
      </div>
    </div>
  )
}
