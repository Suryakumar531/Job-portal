import React from 'react'
import './MyJobs.css'
import { Footer } from '../Components-LandingPage/Footer';
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'

export const MyJobs = () => {
    return (
        <>
            <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <a href="#" className="nav-item" >Home</a>
                    <a href="#" className="nav-item" >Jobs</a>
                    <a href="#" className="nav-item" >Companies</a>
                </nav>

                <div className="auth-links">
                    <div to="/Job-portal/jobseeker/myjobs" className="nav-icon-active"><img className='header-icons' src={breifcase} alt='My Jobs' /></div>
                    <div><img className='header-icons' src={chat} alt='Messages' /></div>
                    <div><img className='header-icons' src={bell} alt='Notifications' /></div>
                    <div><img className='header-icons' src={profile} alt='My Profile' /></div>
                </div>
            </header>

            <main>
                <div className='myjobs-main-info'>
                    <h1>"My Jobs"</h1>
                    <p>View and manage the jobs you've saved, applied for, or shortlisted—all in one place.</p>
                </div>

                <div>
                    <h4>Saved</h4>
                    <h4>Applied</h4>
                </div>
            </main>

            <Footer />
        </>
    )
}
