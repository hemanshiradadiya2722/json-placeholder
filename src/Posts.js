import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/Posts')
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
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(Posts => (
            <tr key={Posts.id}>
              <td>{Posts.userId}</td>
              <td>{Posts.id}</td>
              <td>{Posts.title}</td>
              <td>{Posts.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Posts;
