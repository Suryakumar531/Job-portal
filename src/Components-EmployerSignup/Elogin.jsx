import React from 'react'
import { Link } from 'react-router-dom'
import './Elogin.css'

export const Elogin = () => {
  return (
    <div>
      <h1>Employer login</h1>
      <Link to="/Job-portal">Link back to homepage</Link>
      <p>=??</p>
      <Link to='/Job-portal/employer/signup'>want to signup</Link>
    </div>
  )
}