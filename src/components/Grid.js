import React, {Component} from 'react'
import { Table, Button, Space } from 'antd';
import axios from 'axios';

const data = [
  {
    key: 'CEO',
    name: 'Producto',
    sub_name: 32,
    cola: 1,
    nivel: 1,
    sub_div: 1,
    embaj: 'nuevo'
  },
  {
    key: 'CEO',
    name: 'Producto',
    sub_name: 32,
    cola: 1,
    nivel: 1,
    sub_div: 1,
    embaj: 'nuevo'
  },
  {
    key: 'CEO',
    name: 'Producto',
    sub_name: 32,
    cola: 1,
    nivel: 1,
    sub_div: 1,
    embaj: 'nuevo'
  },
  {
    key: 'CEO',
    name: 'Producto',
    sub_name: 32,
    cola: 1,
    nivel: 1,
    sub_div: 1,
    embaj: 'nuevo'
  },
];

export default class Grid extends Component {



  state = {
    filteredInfo: null,
    sortedInfo: null,
    data:[]
  };

  componentDidMount(){
      axios.get('http://localhost:2014/api/v1/areas')
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.error(err); 
      })
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Division',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Division superior',
        dataIndex: 'sub_name',
        key: 'sub_name',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'sub_name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Colaboradores',
        dataIndex: 'cola',
        key: 'cola',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'cola' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Nivel',
        dataIndex: 'nivel',
        key: 'nivel',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'nivel' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Subdivisiones',
        dataIndex: 'sub_div',
        key: 'sub_div',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'sub_div' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Embajadores',
        dataIndex: 'embaj',
        key: 'embaj',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'embaj' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} pagination={{ pageSize: 2 }} />
      </>
    );
  }
}