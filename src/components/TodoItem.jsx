import TodoEditableText from "./TodoEditableText";

export default function TodoItem({todo, onDelete, onConclude, onEdit}) {

    const handleEdit = (atributo, novoValor) => {
        onEdit(todo.id, { [atributo]: novoValor })
    }

    return (
        <div className="flex flex-col gap-2 border p-4 rounded shadow-sm bg-gray-50">
          <TodoEditableText
            id="titulo"
            text={todo.titulo}
            onEdit={(valor) => handleEdit("titulo", valor)}
          />
          <TodoEditableText
            id="descricao"
            text={todo.descricao}
            onEdit={(valor) => handleEdit("descricao", valor)}
          />
          <div className="flex justify-between mt-2">
            <button onClick={() => onDelete(todo.id)} className="text-red-600 hover:underline">
              Deletar
            </button>
            {todo.concluido ? (
              <span className="text-green-600 font-semibold">Concluído</span>
            ) : (
              <button onClick={() => onConclude(todo.id)} className="text-blue-600 hover:underline">
                Concluir
              </button>
            )}
          </div>
        </div>
      )
}
