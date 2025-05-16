import React, { useState } from 'react';

function Task({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
          />
          <button type="submit">Сохранить</button>
        </form>
      ) : (
        <>
          <span className="task-text" onClick={() => onToggle(task.id)}>
            {task.text}
          </span>
          <div>
            <button onClick={() => setIsEditing(true)}>Редактировать</button>
            <button onClick={() => onDelete(task.id)}>Удалить</button>
          </div>
        </>
      )}
    </li>
  );
}

export default Task;