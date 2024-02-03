import React from 'react'
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { useState } from 'react'




function Photos() {

  let [info, setinfo] = useState([])

  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
      // console.log(response.data);
      setinfo(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  return (
    <div className='App bg'>
         
   <div className='d-flex flex-wrap ms-4'>
   {
      info.map((ele,ind) => {
        return(
        <>
          
          <Card style={{ width: '18rem' }} className='mx-2 my-3'>
      <Card.Img variant="top" src={ele.url} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='fw-bold'>AlbumId:{ele.albumId}</ListGroup.Item>
        <ListGroup.Item className='fw-bold'>Id:{ele.id}</ListGroup.Item>
        <ListGroup></ListGroup>
      </ListGroup>
        <Card.Title> Title</Card.Title>
        <Card.Text>
          {ele.title}
        </Card.Text>
      </Card.Body>
          <img src={ele.thumbnailUrl}></img>
  
      
    </Card>
        </>
        )
      })
    }
   </div>
    </div>
  )
}

export default Photos;
