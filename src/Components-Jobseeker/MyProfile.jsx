import React, { useState } from 'react'
import './MyProfile.css'
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import { notificationsData } from './Afterloginlanding';
import { JNotification } from './JNotification';

// --- Placeholder Content Components ---
// These are simple components for sections without detailed content.
const PlaceholderContent = ({ title }) => (
    <div className="content-card">
        <h2>{title}</h2>
        <p>This is the placeholder for the {title} section.</p>
        <div className="form-actions">
            <button type="button" className="btn btn-secondary">Reset</button>
            <button type="button" className="btn btn-primary">Save & Continue</button>
        </div>
    </div>
);

// --- Profile Component ---
const Profile = () => (
    <div className="content-card">
        <div className="profile-header">
            <h2>Profile</h2>
            <button className="reset-link">Reset</button>
        </div>
        <div className="profile-layout">
            <div className="photo-uploader">
                <div className="photo-placeholder">
                    <span>📷</span>
                    <p>Upload photo</p>
                </div>
                <small>Allowed format: JPG, JPEG, and PNG</small>
                <div className="photo-actions">
                    <button className="photo-btn remove">Remove Photo</button>
                    <button className="photo-btn upload">Upload Photo</button>
                </div>
            </div>
            <div className="profile-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" id="fullName" placeholder="Enter full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="text" id="dob" placeholder="DD/MM/YYYY" />
                </div>
                <div className="form-group">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select id="maritalStatus">
                        <option>Select</option>
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="nationality">Nationality</label>
                    <input type="text" id="nationality" placeholder="Enter nationality" />
                </div>
            </div>
        </div>
        <div className="form-actions profile-actions">
            <button type="button" className="btn btn-secondary">Reset</button>
            <button type="button" className="btn btn-primary">Save & Continue</button>
        </div>
    </div>
);


// --- Current Details Component---
const CurrentDetails = () => (
    <div className="content-card">
        <h2>Current Details</h2>
        <div className="form-grid">
            <div className="form-group">
                <label htmlFor="jobTitle">Current Job Title</label>
                <input type="text" id="jobTitle" placeholder="e.g., Software Engineer" />
            </div>
            <div className="form-group">
                <label htmlFor="company">Current Company</label>
                <input type="text" id="company" placeholder="e.g., XYZ Company" />
            </div>
            <div className="form-group">
                <label htmlFor="experience">Total Experience</label>
                <select id="experience"><option>Select</option></select>
            </div>
            <div className="form-group">
                <label htmlFor="noticePeriod">Notice Period</label>
                <select id="noticePeriod"><option>Select</option></select>
            </div>
            <div className="form-group full-width">
                <label htmlFor="location">Current Location</label>
                <input type="text" id="location" placeholder="e.g., Bangalore" />
            </div>
            <div className="form-group full-width">
                <label htmlFor="preferredLocation">Preferred Location(s)</label>
                <input type="text" id="preferredLocation" placeholder="e.g., Bangalore, Chennai, Coimbatore" />
            </div>
        </div>
        <div className="form-actions">
            <button type="button" className="btn btn-secondary">Reset</button>
            <button type="button" className="btn btn-primary">Save & Continue</button>
        </div>
    </div>
);

// --- Contact Details Component ---
const ContactDetails = () => (
    <div className="content-card">
        <h2>Contact Details</h2>
        <div className="form-grid">
            <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input type="tel" id="mobile" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
                <label htmlFor="altMobile">Alternate Number (optional)</label>
                <input type="tel" id="altMobile" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input type="email" id="email" placeholder="Enter email address" />
            </div>
            <div className="form-group">
                <label htmlFor="altEmail">Alternate Email (optional)</label>
                <input type="email" id="altEmail" placeholder="Enter email address" />
            </div>
            <div className="form-group full-width">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Street, City, State, Pincode, Country" />
            </div>
            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input type="text" id="street" placeholder="e.g., Flat 402" />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="e.g., Green Park" />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" id="state" placeholder="e.g., Bangalore" />
            </div>
            <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input type="text" id="pincode" placeholder="e.g., 560025" />
            </div>
            <div className="form-group full-width">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" placeholder="e.g., India" />
            </div>
        </div>
        <div className="form-actions">
            <button type="button" className="btn btn-secondary">Reset</button>
            <button type="button" className="btn btn-primary">Save & Continue</button>
        </div>
    </div>
);

// --- Key Skills Component ---
const KeySkills = () => {
    const skills = ["User Research", "Problem solving", "Wireframing & Prototyping", "Figma"];
    return (
        <div className="content-card">
            <h2>Key Skills</h2>
            <div className="skills-list">
                {skills.map(skill => (
                    <div className="skill-item" key={skill}>
                        <span>{skill}</span>
                        <button className="edit-skill-btn">✎</button>
                    </div>
                ))}
            </div>
            <button className="add-skill-link">+ Add another skill</button>
            <div className="form-actions">
                <button type="button" className="btn btn-secondary">Reset</button>
                <button type="button" className="btn btn-primary">Save & Continue</button>
            </div>
        </div>
    );
};

export const MyProfile = () => {
    const [showNotification, setShowNotification] = useState(false);
    const newNotificationsCount = notificationsData.filter(n => n.isNew).length;

    // State to manage which dropdown is open and which sub-item is active
    const [openDropdown, setOpenDropdown] = useState('Basic Details');
    const [activeItem, setActiveItem] = useState('Profile');

    const handleDropdownClick = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    const handleItemClick = (title, parent = null) => {
        setActiveItem(title);
        if (parent) {
            setOpenDropdown(parent);
        }
    };

    // Data structure for the sidebar menu
    const menuItems = [
        { title: 'Basic Details', subItems: ['Profile', 'Current Details', 'Contact Details'] },
        { title: 'Resume' },
        { title: 'Education Details' },
        { title: 'Work Experience' },
        { title: 'Skills & Certifications', subItems: ['Key Skills', 'Languages Known', 'Certifications'] },
        { title: 'Preferences / Career Details' },
    ];

    // Function to render the correct content component
    const renderContent = () => {
        switch (activeItem) {
            case 'Profile':
                return <Profile />;
            case 'Current Details':
                return <CurrentDetails />;
            case 'Contact Details':
                return <ContactDetails />;
            case 'Key Skills':
                return <KeySkills />;
            // For other items, render a placeholder
            default:
                return <PlaceholderContent title={activeItem} />;
        }
    };
    return (
        <>
            <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <Link to="/Job-portal/jobseeker/" className="nav-item" >Home</Link>
                    <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
                    <Link to="/Job-portal/jobseeker/companies" className="nav-item" >Companies</Link>
                </nav>

                <div className="auth-links">
                    <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
                    <div><img className='header-icons' src={chat} alt='Messages' /></div>
                    <div onClick={() => setShowNotification(!showNotification)}><img className='header-icons' src={newNotificationsCount > 0 ? bell_dot : bell} alt='Notifications' /></div>
                    <Link to="/Job-portal/jobseeker/myprofile" className="nav-icon-active"><img className='header-icons' src={profile} alt='My Profile' /></Link>
                </div>
                <JNotification notificationsData={notificationsData} showNotification={showNotification} setShowNotification={setShowNotification} />
            </header>

            <main>
                <div className='profile-main-desc'>
                    <h1>My Profile</h1>
                    <p>Build and update your profile with personal, education, and career details to connect with the right opportunities.</p>
                </div>

                <div className="profile-main-content">
                    <aside className="sidebar">
                        {menuItems.map(item => (
                            <div key={item.title}>
                                <div
                                    className={`sidebar-item ${item.subItems ? 'has-submenu' : ''} ${item.subItems && openDropdown === item.title ? 'open' : ''} ${!item.subItems && activeItem === item.title ? 'active-main' : ''}`}
                                    onClick={() => item.subItems ? handleDropdownClick(item.title) : handleItemClick(item.title)}
                                >
                                    {item.title}
                                    {item.subItems && <span className="arrow"></span>}
                                </div>
                                {item.subItems && openDropdown === item.title && (
                                    <div className="submenu">
                                        {item.subItems.map(subItem => (
                                            <div
                                                key={subItem}
                                                className={`submenu-item ${activeItem === subItem ? 'active' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent parent onClick
                                                    handleItemClick(subItem, item.title);
                                                }}
                                            >
                                                <span className="dot">•</span> {subItem}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </aside>
                    <section className="content-area">
                        {renderContent()}
                    </section>
                </div>
            </main>

            <footer className='myprofile-footer'>© 2025 JobPortal. All rights reserved.</footer>
        </>
    )
}
