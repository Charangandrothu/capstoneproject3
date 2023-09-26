import React, { useState } from 'react';

const TodoItem = ({ task, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const saveEdit = () => {
    // Implement save edit functionality here
  };

  return (
    <li>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
