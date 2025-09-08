import React from 'react'
import { JHeader } from './JHeader';
import { Footer } from '../Components-LandingPage/Footer';
import { useNavigate } from "react-router-dom";
import './OpportunityOverview.css'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import starIcon from '../assets/Star_icon.png'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'

export const OpportunityOverview = () => {
  const navigate = useNavigate();

  return (
    <>
      <JHeader />
      <div className='opp-overview-content'>
        <div className='search-backbtn-container'>
          <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

          <div className="search-bar">
            <div className="search-field">
              <span><img src={search} className="icon-size" alt="search_icon" /></span>
              <input type="text" placeholder="Search by Skills, company or job title" />
            </div>
            <div className="separator"></div>

            <div className="search-field">
              <span><img src={location} className="icon-size" alt="location_icon" /></span>
              <input type="text" placeholder="Enter Location" />
            </div>
            <div className="separator"></div>

            <div className="search-field">
              <span><img src={tick} className="icon-size" alt="search_tick" /></span>
              <select defaultValue="" required>
                <option value="" disabled hidden>Enter Experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>

            <button className="search-button">Search</button>
          </div>
        </div>

        <div className='opp-overview-main'>
          <div className="opp-job-main">
            {/* Job Header */}
            <div className="opp-job-header card">
              <div className="opp-job-title-section">
                <h2>UX/UI Designer</h2>
                <p className="opp-company-name">Creative Minds Studio</p>
                <p className="opp-rating">
                  <span className="star"><img src={starIcon} /></span> 3.4 <span className="opp-reviews">| 522 Reviews</span>
                </p>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'><img src={time} className='card-icons' />3 months duration<span className="Opportunities-divider">|</span>₹ 20,000 - 25,000</p>
                <p className='Opportunities-detail-line'><img src={experience} className='card-icons' />0 to 1 year of experience</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="opp-job-tags">
                <span className="opp-tag opp-fulltime">Full-Time</span>
                <span className="opp-tag opp-internship">Internship</span>
              </div>
              <div className="opp-job-actions">
                <button className="opp-btn opp-save">Save</button>
                <button className="opp-btn opp-apply">Apply</button>
              </div>
            </div>

            {/* Job Highlights */}
            <div className="opp-job-highlights card">
              <h3>Job Highlights</h3>
              <ul>
                <li>Freshers can also apply.</li>
                <li>Proven work experience as a UI/UX Designer.</li>
                <li>Good time-management skills.</li>
              </ul>
              <div className="opp-match-score">
                <span className="opp-score early">Early Applicant</span>
                <span className="opp-score keys">Key Skills</span>
                <span className="opp-score location">Location</span>
                <span className="opp-score exp">Work Experience</span>
              </div>
            </div>

            {/* Job Description */}
            <div className="opp-job-desc opp-card">
              <h3>Company Overview</h3>
              <p>
                Finding customers made easy through vast profile database...
              </p>

              <h3>Job Description</h3>
              <p>
                We are looking for a UI/UX Designer to turn our software...
              </p>

              <h3>Responsibilities</h3>
              <ul>
                <li>Gather and evaluate user requirements...</li>
                <li>Illustrate design ideas using storyboards...</li>
                <li>Design UI elements like menus, tabs, widgets...</li>
                <li>Build prototypes and test layouts...</li>
              </ul>

              <h3>Key Details</h3>
              <p><strong>Role:</strong> UI/UX Designer</p>
              <p><strong>Industry Type:</strong> IT Services</p>
              <p><strong>Department:</strong> UX, UI, Design</p>
              <p><strong>Job Type:</strong> Full-Time - On-site - Permanent</p>
              <p><strong>Location:</strong> Chennai</p>

              <h3>Key Skills</h3>
              <div className="opp-skills">
                <span>UX Research</span>
                <span>Wireframes</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

              <div className="opp-share-job">
                <button>🔗 LinkedIn</button>
                <button>📘 Facebook</button>
                <button>✉️ Email</button>
                <button className="opp-report-btn">Report this job</button>
              </div>
            </div>
          </div>
          {/* Right Side - Similar Jobs */}
          <div className="opp-job-sidebar">
            <h3>Similar Jobs</h3>
            <div className="opp-similar-job card">
              <h4>UX / UI Developer</h4>
              <p>Data Insights Ltd.</p>
              <p><span className="star"><img src={starIcon} /></span> 3.4 | 522 reviews</p>
              <p><img src={place} className='card-icons' /> Chennai</p>
              <a href="#">View details</a>
            </div>

            <div className="similar-job card">
              <h4>Senior UX Designer</h4>
              <p>Global Brands Co.</p>
              <p><span className="star"><img src={starIcon} /></span> 3.5 | 514 reviews</p>
              <p><img src={place} className='card-icons' /> Bengaluru</p>
              <a href="#">View details</a>
            </div>

            <div className="similar-job card">
              <h4>UI Designer</h4>
              <p>Tech Solutions Inc.</p>
              <p><span className="star"><img src={starIcon} /></span> 3.2 | 1k+ reviews</p>
              <p><img src={place} className='card-icons' /> Chennai</p>
              <a href="#">View details</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
