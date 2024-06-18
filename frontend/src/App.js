// Import component UserList
import UserList from './components/UserList'
// Import RRD consists of browser router, routes & route
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Import component AddUser
import AddUser from './components/AddUser'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        {/* Add routes for user list & add user components
        Route has 2 parameters: path (directory) & element (component) */}
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add' element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
