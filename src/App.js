import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Albums from './Albums';
import Photos from './Photos';
import Posts from './Posts';
import Todos from './Todos';
import Users from './Users';
import Comments from './Comments';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Menu from './Menu';




function App() {
  return (
    <>
     
     <Menu></Menu>
        <Routes>
          <Route path='/Posts' element={<Posts></Posts>}></Route>
          <Route path='/Comments' element={<Comments></Comments>}></Route>
          <Route path='/Albums' element={<Albums></Albums>}></Route>
          <Route path='/Photos' element={<Photos></Photos>}></Route>
          <Route path='/Todos' element={<Todos></Todos>}></Route>
          <Route path='/Users' element={<Users></Users>}></Route>
        </Routes>
        
           
            {/* <Users></Users> */}
    </>
  );
}

export default App;
