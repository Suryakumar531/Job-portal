import React from 'react'
import './Afterloginlanding.css'
import { Link } from 'react-router-dom';
import { JHeader } from './JHeader';
import { JMainsection } from './JMainsection';
import { Jobsbycompany } from './Jobsbycompany';
import { Opportunities } from './Opportunities';
import { Footer } from '../Components-LandingPage/Footer';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'

export const Afterloginlanding = () => {
    return (
        <>
            <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <a href="#" className="nav-item nav-active" >Home</a>
                    <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
                    <Link to="/Job-portal/jobseeker/companies" className="nav-item" >Companies</Link>   
                </nav>

                <div className="auth-links">
                    <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
                    <div><img className='header-icons' src={chat} alt='Messages' /></div>
                    <div><img className='header-icons' src={bell} alt='Notifications' /></div>
                    <div><img className='header-icons' src={profile} alt='My Profile' /></div>
                </div>
            </header>
            <JMainsection />
            <Opportunities />
            <Jobsbycompany />
            <Footer />
        </>
    )
}