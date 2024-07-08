import { message, Table, Typography } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux Toolkit/features/products/productSlice';

function Products() {
  const products = useSelector(store => store.product.value);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '25%',
      render: (imgurl) => <img width={100} src={imgurl} alt={imgurl} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      witdh: '25%'
    },
    {
        title: 'SubTitle',
        dataIndex: 'subtitle',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      render: (_, el) => 
      <Typography.Link type='primary' onClick={() => message.warning('Edit vaqtincha ishlamaydi, Noqulayliklar uchun uzur !!!')}>
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
    <div>
      <Table bordered  columns={columns} dataSource={products} size="middle" />
    </div>
  )
}

export default Products;