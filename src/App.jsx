import { Routes, Route } from 'react-router'
import { useContext } from 'react'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm'
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

import { UserContext } from './context/UserContext';

const App = () => {

  const {user} = useContext(UserContext)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/' element={ user ? <Dashboard /> :<Landing />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  )
}

export default App