// Command rafce, then import useState and useEffect
import React, {useState, useEffect} from 'react'
// Import axios to fetch data from API
import axios from 'axios'

const UserList = () => {
    // Create new states
    const [users, setUser] = useState([])

    // Use effect dan panggil method getAllUsers
    useEffect(() => {
        getAllUsers()
    }, [])

    // Function to get all user data from API with axios
    const getAllUsers = async() => {
        const response = await axios.get('http://localhost:5000/users')
        console.log(response.data)
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserList