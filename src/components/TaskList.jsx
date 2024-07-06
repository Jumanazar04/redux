import React from 'react'
import { useSelector } from 'react-redux'

function TaskList() {
    const tasks = useSelector((state) => state.tasks);

  return (
    <div>
        {tasks.map((el) => (
            <li key={el.id}>{el.text}</li>
        ))}
    </div>
  )
}

export default TaskList