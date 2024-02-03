import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/Todos')
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 

  return (
    <>
      <Table striped bordered hover className='table-secondary'>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map(Todos => (
            <tr key={Todos.id}>
              <td>{Todos.userId}</td>
              <td>{Todos.id}</td>
              <td>{Todos.title}</td>
              <td>{Todos.completed}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Todos;
