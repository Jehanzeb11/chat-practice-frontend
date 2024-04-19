import Form from 'react-bootstrap/Form';

const ChatScreen = () => {
  return (
    <div className='w-75 bg-primary p-3 position-relative top-0'>

<Form className='d-flex gap-3 position-absolute bottom-0 w-75'>
      <Form.Group className="mb-3 w-100" controlId="formBasicMessage">
        <Form.Control type="text" placeholder="message" />
      </Form.Group>
   
      <button className='btn btn-dark text-white' style={{height:"40px"}} type="submit">
        send
      </button>
    </Form>

    </div>
  )
}

export default ChatScreen
