import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';
import { useState } from '../../../todolist/src/contexts';

function TodoItem(todo) {

    const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

    const handleEdit = () => {
    if (newText.trim()) {
      dispatch(updateTodo({ id: todo.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={e => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)} style={{ marginLeft: 10 }}>
            Edit
          </button>
        </>
      )}
    </div>
  )
}

export default TodoItem
