import { Button, Input } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../Redux Toolkit/features/counter/counterSlice';

function Home() {
    let count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState()

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleAdd = () =>{
        dispatch(incrementByAmount(amount))
        setAmount('')
    }   


  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='max-w-80 flex flex-col text-center gap-4 items-center'>
            <Button onClick={() => dispatch( increment() )}>+</Button>
            <h1 className='text-3xl m-3 font-bold'>{count}</h1>
            <Button onClick={()=> dispatch(decrement())}>-</Button>
            <Input type='number' placeholder='Add number...' value={amount} onChange={handleChange} />
            <Button onClick={handleAdd}>Add Amount</Button>
        </div>
    </div>
  )
}

export default Home;