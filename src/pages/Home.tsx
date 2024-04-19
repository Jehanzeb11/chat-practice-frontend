import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatScreen from '../components/ChatScreen'

const Home = () => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <ChatScreen/>
    </div>
  )
}

export default Home
