import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-2xl font-bold bg-black text-white p-5'>helo </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
