// Command rafce, then import useState and useEffect
import React, { useState, useEffect } from 'react'
// Import axios to fetch data from API
import axios from 'axios'

// Create new states
const UserList = () => {
    const [users, setUser] = useState([])

    // Use effect and call method getAllUsers
    useEffect(() => {
        getAllUsers()
    }, [])

    // Function to get all user data from API with axios
    const getAllUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        // Display all users in console
        // console.log(response.data)

        // Display all users in the table with setUser function
        setUser(response.data)
    }

    return (
        <div className="columns">
            <div className="column is-half"></div>
            <table className='table is-striped is-fullwidth mt-5'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop to display all users in respected columns */}
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button className='button is-info is-small'>Edit</button>
                                <button className='button is-danger is-small'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList