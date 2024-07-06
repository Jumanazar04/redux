import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/actions';
import { Button, Input } from 'antd';

function TaskForm() {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }


    const handleSave = () => {
            dispatch(addTodo(taskName));
            setTaskName(''); 
        
    };
    return (
        <div className='w w-screen mt-40 mb-5 flex justify-center items-center'>
            <div className=' w-1/3 flex flex-col gap-4 p-4 border rounded-lg'>
                <label htmlFor="name">Task Name</label>
                <Input type="text" id='name' placeholder='Task...' value={taskName} onChange={handleChange} />
                <Button onClick={handleSave}>Send</Button>
            </div>
        </div>
    );
}

export default TaskForm;
