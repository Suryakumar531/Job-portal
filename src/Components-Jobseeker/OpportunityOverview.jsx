import React from 'react'
import { JHeader } from './JHeader';
import { Footer } from '../Components-LandingPage/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './OpportunityOverview.css'
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import starIcon from '../assets/Star_icon.png'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import twitter from '../assets/socials-x.png'
import linkedin from '../assets/socials-linkedin.png'
import facebook from '../assets/socials-facebook.png'

const job = {
  id: "1",
  title: "Data Analyst",
  company: "Tech Solutions Inc.",
  ratings: 3.4,
  reviewNo: 533,
  duration: "3 months duration",
  salary: "3.5",
  experience: "1",
  location: "Coimbatore",
  tags: ["Internship"],
  posted: "2025-11-12",
  openings: 5,
  applicants: 40,
  workType: "On-site",
  logo: "",
  JobHighlights: [
    "Freshers can also apply",
    "Proven work experience as a UI/UX Designer",
    "Good time-management skills"
  ],
  companyOverview: "Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
  jobDescription: "We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
  Responsibilities: [
    "Gather and evaluate user requirements in collaboration with product managers and engineers",
    "Illustrate design ideas using storyboards, process flows, and sitemaps",
    "Design graphic user interface elements such as menus, tabs, and widgets.",
    "Build page navigation buttons and search fields",
    "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
    "Create original graphic designs (e.g. images, sketches, and tables).",
    "Prepare and present rough drafts to internal teams and key stakeholders.",
    "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
    "Conduct layout adjustments based on user feedback.",
    "Adhere to style standards on fonts, colors, and images."
  ],
  IndustryType: "IT Services",
  Department: "UI-UX Design",
  KeySkills: ["UX Research", "Wireframes", "Figma", "Photoshop", "HTML", "CSS"]
}

export const OpportunityOverview = () => {
  const navigate = useNavigate();
  const logoContent = job.logo ? (<img src={job.logo} alt={job.company} className="Opportunities-job-logo" />) : (<div className="Opportunities-job-logo-placeholder">{job.company.charAt(0).toUpperCase()}</div>)
  function formatPostedDate(dateString) {
    const postedDate = new Date(dateString);
    const today = new Date();

    const diffInMs = today - postedDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Posted: today";
    if (diffInDays === 1) return "Posted: 1 day ago";
    if (diffInDays > 1 && diffInDays <= 30) return `Posted: ${diffInDays} days ago`;
    if (diffInDays > 30 && diffInDays <= 60) return `Posted: more than 1 month ago`;
    if (diffInDays > 60 && diffInDays <= 90) return `Posted: more than 2 months ago`;

    return `Posted: Long ago`;
  }
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
          <div><img className='header-icons' src={bell} alt='Notifications' /></div>
          <div><img className='header-icons' src={profile} alt='My Profile' /></div>
        </div>
      </header>

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
            {/* Job Header  */}
            <div className="opp-overview-job-card">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="opp-topcard-job-title">{job.title}</h2>
                  <h5 className="Opportunities-job-company">{job.company} <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> {job.ratings} <span className="Opportunities-divider">|</span><span className="opp-reviews"> {job.reviewNo} Reviews</span></h5>
                </div>
                {logoContent}
              </div>

              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'><img src={time} className='card-icons' />{job.duration}<span className="Opportunities-divider">|</span>₹ {job.salary} Lpa</p>
                <p className='Opportunities-detail-line'><img src={experience} className='card-icons' />{job.experience} years of experience</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />{job.location}</p>
              </div>

              <div className='Opportunities-details-bottom'>
                <div className="Opportunities-job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className={`Opportunities-job-tag ${tag.toLowerCase()}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="Opportunities-job-type">
                  {job.workType}
                </div>
              </div>

              <hr className="Opportunities-separator" />

              <div className="Opportunities-job-footer">
                <div className="Opportunities-job-meta">
                  <p>{formatPostedDate(job.posted)} <span className="Opportunities-divider">|</span> Openings: {job.openings} <span className="Opportunities-divider">|</span> Applicants: {job.applicants}</p>
                </div>

                <div className="Opportunities-job-actions">
                  <button className="Opportunities-save-btn">Save</button>
                  <button className="Opportunities-apply-btn">Apply</button>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="opp-job-details-card">
              {/* Job Highlights */}
              <div className="opp-job-highlights">
                <h3>Job Highlights</h3>
                <ul>
                  {job.JobHighlights.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <h3>Company Overview</h3>
              <p>
                {job.companyOverview}
              </p>

              <h3>Job Description</h3>
              <p>
                {job.jobDescription}
              </p>

              <h3>Responsibilities</h3>
              <ul>
                {job.Responsibilities.map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h3>Key Details:</h3>
              <p><strong>Role:</strong> {job.title}</p>
              <p><strong>Industry Type:</strong> {job.IndustryType}</p>
              <p><strong>Department:</strong> {job.Department}</p>
              <p><strong>Job Type:</strong> {job.workType}</p>
              <p><strong>Location:</strong> {job.location}</p>

              <h3>Key Skills</h3>
              <div className="opp-key-skills-container">
                {job.KeySkills.map((item, i) => <span key={i}>{item}</span>)}
              </div>

              <hr className="Opportunities-separator" />

              <div className="opp-share-job">
                <div>
                  <p>Share This job</p>
                  <div className='opp-socials'>
                    <div><img src={linkedin} className='opp-socials-icon' alt="linkedin" /></div>
                    <div><img src={facebook} className='opp-socials-icon' alt="facebook" /></div>
                    <div><img src={twitter} className='opp-socials-icon' alt="twitter" /></div>
                  </div>
                </div>
                <button className="opp-report-btn">Report this job</button>
              </div>
            </div>
          </div>
          {/* Similar Jobs */}
          <div className="opp-job-sidebar">
            <h3>Similar Jobs</h3>
            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">UI/UX Designer</h2>
                  <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">C</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">UI Designer</h2>
                  <p className="similar-job-company">Tech Solutions Inc. <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.2 <span className="Opportunities-divider">|</span><span> 1k Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">T</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . On-Site, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">UI/UX Designer</h2>
                  <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">C</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">UI/UX Designer</h2>
                  <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">C</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">UI/UX Designer</h2>
                  <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">C</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
