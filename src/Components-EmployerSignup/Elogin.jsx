import React from 'react'
import { Link } from 'react-router-dom'
import './Elogin.css'

export const Elogin = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          {/* use local image or an online placeholder */}
          <img
            src="https://www.corporatestalwarts.com/wp-content/uploads/al_opt_content/IMAGE/www.corporatestalwarts.com/wp-content/uploads/elementor/thumbs/Discover-the-Power-of-Our-Specialized-Recruitment-Solutions-1-qrc4chgxffz4iww5kgru6u85muy3c8xsxfd7prz1gs.png"
            alt="illustration"
            className="illustration"
          />
        </div>
          <h1 className="logo">Job Portal <span>Employers</span></h1>
        <div className="login-right">
          <div className="login-header">
            
            <div 
             className="top-right-container">
              <span>Don't have an account?</span>
              <button className="create-btn">Create</button>
              <Link to="/Job-portal">Job seekers login</Link>
            </div>
          </div>

          <h3 className="form-title">Login to continue</h3>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <label>User name / Company name</label>
            <input type="text" placeholder="Enter your User name / Company name" />

            <label>Password</label>
            <div className="password-input">
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="/" className="link">Forgot Password?</a>
            </div>
            
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
