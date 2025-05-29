import { useState } from "react"

export default function TodoForm({onAddTodo}) {
    const [newTodo, setNewTodo] = useState({
        "titulo": "",
        "descricao": ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddTodo(newTodo)
        setNewTodo({
            "titulo": "",
            "descricao": ""
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            value={newTodo.titulo}
            onChange={e => setNewTodo({ ...newTodo, titulo: e.target.value })}
            placeholder="Título da Tarefa"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={newTodo.descricao}
            onChange={e => setNewTodo({ ...newTodo, descricao: e.target.value })}
            placeholder="Descrição da tarefa"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Adicionar
          </button>
        </form>
      )
}