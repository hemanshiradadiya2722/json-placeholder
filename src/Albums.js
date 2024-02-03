import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function Albums() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
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
          </tr>
        </thead>
        <tbody>
          {data.map(album => (
            <tr key={album.id}>
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Albums;
