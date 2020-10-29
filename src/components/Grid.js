import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Codigo',
    dataIndex: 'code',
    key: 'code',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Descripcion',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


export default class Grid extends Component {
  state = {
    data: []
  };

  componentDidMount(){
      axios.get('http://localhost:2014/api/v1/areas')
      .then(response => {
        console.log(response)
          this.setState({
            data: response.data.data
          });
      })
      .catch(err => {
          console.error(err); 
      });
  };

  render() {
    const {data} = this.state;
    return(
      <Table columns={columns} dataSource={data}  />
    )
  };
}