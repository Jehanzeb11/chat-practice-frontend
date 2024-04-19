import { FormEvent, useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import baseUrl from '../utils/api';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { userContext } from '../context/authContext';

const Login = () => {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const {username:loggedInName,setUserName:setLoggedInuserName,setUserId} = useContext(userContext)


const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault()
            try {
                const response = await axios.post(`${baseUrl}/login`,{email,password})
    
                if (response.status === 200) {
    
                   const user:any = jwtDecode(response?.data?.token)
                   
    console.log("user === ",user)
    
    setLoggedInuserName(user.user.username)
    setUserId(user.user.userId)
    console.log(loggedInName)
    
                }
                
            } catch (error) {
                console.error(error)
            }
    
        }

  return (
    <Container className='mt-5'>
      <Form onSubmit={handleSubmit}>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Login
