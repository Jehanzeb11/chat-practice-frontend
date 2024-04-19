import axios from 'axios';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import baseUrl from '../utils/api.js'
import { userContext } from '../context/authContext.js';
import { jwtDecode } from "jwt-decode";

const Register = () => {

const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const {username:loggedInName,setUserName:setLoggedInuserName,setUserId} = useContext(userContext)

    const handleSubmit = async (e:FormEvent)=>{
e.preventDefault()
        try {
            const response = await axios.post(`${baseUrl}/register`,{username,email,password})

            if (response.status === 201) {

               const user:any = jwtDecode(response?.data?.token)
               
console.log("user === ",user)

setLoggedInuserName(user.username)
setUserId(user.userId)
console.log(loggedInName)

            }
            
        } catch (error) {
            console.error(error)
        }

    }


  return (
    <Container className='mt-5'>
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
    \
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Register
