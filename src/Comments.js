import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function Comments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
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
            <th>PostId</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(comments => (
            <tr key={comments.id}>
              <td>{comments.postId}</td>
              <td>{comments.id}</td>
              <td>{comments.name}</td>
              <td>{comments.email}</td>
              <td>{comments.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Comments;
