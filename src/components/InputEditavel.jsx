import { useState } from "react"

export default function InputEditavel({ texto, onEdit }) {
    const [editando, setEditando] = useState(false)

    if (editando) {
        return <input
            type="text"
            defaultValue={texto}
            autoFocus
            onBlur={(e) => {
                onEdit(e.target.value)
                setEditando(false)
            }}
        ></input>
    }
    
    return <p onDoubleClick={() => setEditando(true) }>{texto}</p>
}