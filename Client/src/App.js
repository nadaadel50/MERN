import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Badge,ListGroup,Form, Button, Col} from "react-bootstrap"
import Axios from "axios"
import {useState, useEffect} from 'react'

function App(){

  
  const api = "http://localhost:3001";

  const [users,serUsers] = useState([])
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [email,setEmail] = useState("")
  useEffect(()=>{
    Axios.get(`${api}/`)
  .then(res =>{
    serUsers(res.data)
  })
  },[users])

  const createUser = () =>{
    if(name && age && email){
      Axios.post(`${api}/createUser`, {
        name: name,
        age: age,
        email: email
      })
    .then(res =>res.data)
    }
  }

  return(
  
/*
    <>
  {users.map((user, index) => (
    <Container key={index} className='card'>
      <ListGroup>
        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
        <ListGroup.Item>Age: {user.age}</ListGroup.Item>
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
      </ListGroup>
    </Container>
  ))}

<Container className="container">
  <Form>
    <Form.Group controlId="formName" className="form-group">
      <Form.Label className="form-label">Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="formAge" className="form-group">
      <Form.Label className="form-label">Age</Form.Label>
      <Form.Control type="number" placeholder="Enter age" onChange={(e) => setAge(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="formEmail" className="form-group">
      <Form.Label className="form-label">Email</Form.Label>
      <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>

    <Button variant="primary" onClick={createUser} className="button-container">
      Create User
    </Button>
  </Form>
</Container>
</>
*/    

/*    <>
    {users.map(user => {
      return(
        <div className='card'>
          <ul>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      )
    })}

    <div>
      <input type="text" placeholder='Name' onChange={e=>setName(e.target.value)}></input>
      <input type="number" placeholder='Age' onChange={e=>setAge(e.target.value)}></input>
      <input type="text" placeholder='Email' onChange={e=>setEmail(e.target.value)}></input>
      <button onClick={createUser}>Create User</button>
    </div>
    </>
  */
    <>
    {users.map((user, index) => (
      <div key={index} className='user-card'>
        <ul>
          <li className='user-info'>Name: {user.name}</li>
          <li className='user-info'>Age: {user.age}</li>
          <li className='user-info'>Email: {user.email}</li>
        </ul>
      </div>
    ))}
  
    <div className='user-form'>
      <input type="text" className='form-input' placeholder='Name' onChange={e => setName(e.target.value)} />
      <input type="number" className='form-input' placeholder='Age' onChange={e => setAge(e.target.value)} />
      <input type="text" className='form-input' placeholder='Email' onChange={e => setEmail(e.target.value)} />
      <button className='form-button' onClick={createUser}>Create User</button>
    </div>
  </>
    
  );
}

export default App;
