import React, { useState } from "react"
// Import axios to interact with API
import axios from "axios"
// Import useNavigate to auto redirect to home after saving to db
import { useNavigate } from "react-router-dom"

const AddUser = () => {
  // All required data with initial values (name & email = empty string)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("Male")
  // Initialize variable navigate for redirect to home
  const navigate = useNavigate()

  // Function to save user to db with axios
  const saveUser = async(e) => {
    // Prevent default to prevent page reload after saving
    e.preventDefault()
    try {
        // Post have 2 parameters: endpoint & data to save
        await axios.post('http://localhost:5000/users', {
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
        <form onSubmit={saveUser}>
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
              <button type="submit" className="button is-success">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser
