import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
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
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Table striped className='table-secondary'>
                  <thead>
                    <tr>
                      <th>Street</th>
                      <th>Suite</th>
                      <th>City</th>
                      <th>Zipcode</th>
                      <th>Geo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.address.street}</td>
                      <td>{user.address.suite}</td>
                      <td>{user.address.city}</td>
                      <td>{user.address.zipcode}</td>
                      <td>
                        <Table className='table-light'>
                          <thead>
                            <tr>
                              <th>Lat</th>
                              <th>Lng</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{user.address.geo.lat}</td>
                              <td>{user.address.geo.lng}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
