import TodoItem from "./TodoItem";

export default function TodoList({todoList, onDelete, onConclude, onEdit}) {
    return (
        <div className="space-y-4">
          {todoList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onConclude={onConclude}
              onEdit={onEdit}
            />
          ))}
        </div>
      )
}