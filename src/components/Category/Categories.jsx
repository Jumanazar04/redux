import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../Redux Toolkit/features/categories/categorySlice';
import { message, Table, Typography } from 'antd';

function Categories() {
  const category = useSelector(state => state.category.value);
  const dispatch = useDispatch()
  console.log(category);

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '25%',
      render: (imgurl) => <img width={100} src={imgurl} alt={imgurl} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      render: (_, el) => 
      <Typography.Link type='primary' onClick={() => message.warning('Edit vaqtincha ishlamaydi, Noqulayliklar uchun uzur !!!')} >
        Edit
      </Typography.Link>,
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render: (_, el) => (
        <Typography.Link type='primary' onClick={ () => message.warning('Delete vaqtincha ishlamaydi, Noqulayliklar uchun uzur !!!')} >
          Delete
        </Typography.Link>
      ),
    },
  ];
  return (
    <div className=' container'>
        <Table bordered  columns={columns} dataSource={category} size="middle" />
    </div>
  )
}

export default Categories