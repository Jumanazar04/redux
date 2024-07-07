import { Button, Input } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../Redux Toolkit/features/counter/counterSlice';

function Porduct() {
    const count = useSelector(state => state.counter.value);
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
    <div>
        <div className='mt-12'>
            <Button onClick={() => dispatch( increment() )}>+</Button>
            <h1 className='text-3xl m-3 font-bold'>{count}</h1>
            <Button onClick={()=> dispatch(decrement())}>-</Button>
            <Input type='number' value={amount} onChange={handleChange} />
            <Button onClick={handleAdd}>Add Amount</Button>
        </div>
    </div>
  )
}

export default Porduct