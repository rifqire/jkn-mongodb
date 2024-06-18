import React, { useState, useEffect } from "react"
// Import axios to interact with API
import axios from "axios"
// Import useNavigate to auto redirect to home after saving to db
// Import useParams to get parameters
import { useNavigate, useParams } from "react-router-dom"

// Function to edit (update) user
const EditUser = () => {
  // All required data with initial values (name & email = empty string)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("Male")
  // Initialize variable navigate for redirect to home
  const navigate = useNavigate()
  // Initialize ID
  const {id} = useParams()

  // Function to get user data by ID
  const getUserById = async() => {
    const response = await axios.get(`http://localhost:5000/users/${id}`)
    setName(response.data.name)
    setEmail(response.data.email)
    setGender(response.data.gender)
  }

  // Call the getUserById function in useEffect
  useEffect(() => {
    getUserById()
  }, [])

  // Function to save user to db with axios
  const updateUser = async(e) => {
    // Prevent default to prevent page reload after saving
    e.preventDefault()
    try {
        // Post have 2 parameters: endpoint & data to save
        await axios.patch(`http://localhost:5000/users/${id}`, {
            name,
            email,
            gender
        })
        // Redirect to home
        navigate("/")
    } catch (error) {
        console.log(error)
    }
  }

  return (
    // .columns>.column>.field
    <div className="columns">
      <div className="column is-half">
        {/* Use function saveUser after submitting the form */}
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              {/* Add value and onChange parameters in input tag */}
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                {/* If in selector, add value and onChange parameters inside select tag */}
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser
