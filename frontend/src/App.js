// Import component UserList
import UserList from './components/UserList'
// Import RRD consists of browser router, routes & route
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Import components AddUser, EditUser
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        {/* Add routes for user list & add user components
        Route has 2 parameters: path (directory) & element (component) */}
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add' element={<AddUser />} />
          {/* To edit/update user must provide id in path */}
          <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
