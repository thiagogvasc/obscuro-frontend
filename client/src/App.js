import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Box from '@mui/material/Box'
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { UserProvider } from './contexts/userContext'
import { SocketProvider } from './contexts/socketContext'
import { ChatProvider } from './contexts/chatContext'

import './App.css'
import { grey } from '@mui/material/colors/'
import CreateConversation from './pages/CreateConversation'
import SignUp from './pages/SignUp'

function App() { 
  const theme = createTheme({
  
  })
  return (
    <BrowserRouter>
      <SocketProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              width: "100vw", 
              height: "100vh", 
              backgroundColor: grey[900],
              padding: '2vh 5vw' 
            }}>
              <Navbar />
              <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/chat" element={ <ProtectedRoute> <ChatProvider> <Chat /> </ChatProvider></ProtectedRoute> } />
                <Route path='/create-conversation' element={ <CreateConversation /> } />
              </Routes>
            </Box>
          </ThemeProvider>
        </UserProvider>
      </SocketProvider>
    </BrowserRouter>
  );
}

export default App;
