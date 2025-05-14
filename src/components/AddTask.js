import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAdd(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Добавьте новую задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTask;