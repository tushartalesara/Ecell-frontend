import React, { useState } from 'react'
import './App.css';
import axios from 'axios'

function App() {

  /* React hooks for each attribute */
  const [name, setName] = useState('')
  const [branch, setBranch] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  /* Function to check if email is valid */
  function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  /* Function to handle submit */
  const handleSubmit = (e) => {
    e.preventDefault()

    /* Validation */
    //Email
    if (!isValidEmail(email)) {
      alert('Email is invalid')
      return
    }
    //Number
    if (!(number.match('[0-9]{10}'))) {
      alert('Please provide valid phone number');
      return
    }

    //Data
    const data = {
      name: name,
      branch: branch,
      email: email,
      number: number
    }

    /* Sending the data to backend (FireBase) */
    axios.post('http://localhost:5000/submit', data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    /* Creating a new object to store the data */
    setName('')
    setBranch('')
    setEmail('')
    setNumber('')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} action='POST'>
        <h1>Form</h1>
        <ul className="form-list">
          <li className="form-item">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" onChange={(e) => { setName(e.target.value) }} value={name} required />
          </li>
          <li className="form-item">
            <label htmlFor="branch">Branch *</label>
            <select id="branch" value={branch} onChange={(e) => { setBranch(e.target.value) }} required>
              <option hidden />
              <option>	Architecture , Planning and Design</option>
              <option>Bio-Chemical Engineering</option>
              <option>Bio-Medical Engineering</option>
              <option>Ceramic Engineering and Technology</option>
              <option>Chemical Engineering</option>
              <option>Civil Engineering</option>
              <option>Computer Science and Engineering</option>
              <option>Electrical Engineering</option>
              <option>Electronics Engineering</option>
              <option>Engineering Physics</option>
              <option>Industrial Chemistry</option>
              <option>Material Science & Technology</option>
              <option>Mathematics & Computing</option>
              <option>Mechanical Engineering</option>
              <option>Metallurgical Engineering</option>
              <option>Mining Engineering</option>
              <option>Pharmaceutical Engineering and Technology</option>
            </select>
          </li>
          <li className="form-item">
            <label htmlFor="email">Email *</label>
            <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }} value={email} required />
          </li>
          <li className="form-item">
            <label htmlFor="number">Phone Number *</label>
            <input type='text' id="number" onChange={(e) => { setNumber(e.target.value) }} value={number} required />
          </li>
          <button className="btn" type='submit'>Submit</button>
        </ul>
      </form>
    </div>
  );
}

export default App;
