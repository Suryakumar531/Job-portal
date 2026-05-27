import React from 'react'
// import { useParams } from 'react-router-dom';
import { useJobs } from '../JobContext';
import starIcon from '../assets/Star_icon.png'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import { useNavigate } from 'react-router-dom';

export const JobMonitorOverview = ({jobId,setSelectedJobId}) => {

const {jobs,deleteJob,setAlluser,setCurrentEmployer}=useJobs();
const currentId = jobId
const selectedJob = jobs.find(Job => Job.id === currentId)
const navigate= useNavigate();

const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    
    if (confirmDelete) {
      deleteJob(currentId);
      setSelectedJobId(null);
    }
  };

//   if (!selectedJob) {
//     return (
//       <div className='opp-overview-main'>
//         <button onClick={() => setSelectedJobId(null)} style={{ background: '#a09f9f', padding:"7px 11px", border: 'none', color: '#fff', cursor: 'pointer' }}>Back to Monitoring</button>
//         <p style={{ marginTop: '20px' }}>Job not found or already deleted.</p>
//       </div>
//     );
//   }

  return (
    <div className='opp-overview-main'>
              <div className="opp-job-main">
                <div className="opp-overview-job-card">
                  <div className="Opportunities-job-header">
                    <div>
                      <h2 className="opp-topcard-job-title">{selectedJob.title}</h2>
                      <h5 className="Opportunities-job-company">
                        {selectedJob.company} <span className="Opportunities-divider">|</span>
                        <span className="star"><img src={starIcon} alt="star" /></span> {selectedJob.ratings} 
                        <span className="Opportunities-divider">|</span>
                        <span className="opp-reviews"> {selectedJob.reviewNo} Reviews</span>
                      </h5>
                    </div>
                    {selectedJob.logo ? (<img src={selectedJob.logo} alt={selectedJob.company} className="Opportunities-job-logo" />) : (<div className="Opportunities-job-logo-placeholder">{selectedJob.company.charAt(0).toUpperCase()}</div>)}
                  </div>
    
                  <div className="Opportunities-job-details">
                    <p className='Opportunities-detail-line'><img src={time} className='card-icons' alt="time" />{selectedJob.duration}<span className="Opportunities-divider">|</span>₹ {selectedJob.salary} Lpa</p>
                    <p className='Opportunities-detail-line'><img src={experience} className='card-icons' alt="exp" />{selectedJob.experience} years of experience</p>
                    <p className='Opportunities-detail-line'><img src={place} className='card-icons' alt="loc" />{selectedJob.location}</p>
                  </div>
    
                 <div className='Opportunities-details-bottom'>
                    <div className="Opportunities-job-tags">
                      {selectedJob.tags.map((tag, index) => (
                        <span key={index} className={`Opportunities-job-tag ${tag.toLowerCase()}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="Opportunities-job-type">
                      {selectedJob.WorkType}
                    </div>
                 </div>
                  <hr className="Opportunities-separator" />
                  <div className="opp-job-highlights">
                    <h3>Job Highlights</h3>
                    <ul>
                      {selectedJob.JobHighlights.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
    
                  <h3>Company Overview</h3>
                  <p>
                    {selectedJob.companyOverview}
                  </p>
    
                  <h3>Job Description</h3>
                  <p>
                    {selectedJob.jobDescription}
                  </p>
    
                  <h3>Responsibilities</h3>
                  <ul>
                    {selectedJob.Responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
    
                  <h3>Key Details:</h3>
                  <p><strong>Role:</strong> {selectedJob.title}</p>
                  <p><strong>Industry Type:</strong> {selectedJob.IndustryType.join(", ")}</p>
                  <p><strong>Department:</strong> {selectedJob.Department.join(", ")}</p>
                  <p><strong>Job Type:</strong> {selectedJob.WorkType}</p>
                  <p><strong>Location:</strong> {selectedJob.location}</p>
                  <p><strong>Shift:</strong> {selectedJob.Shift}</p>
    
                  <h3>Key Skills</h3>
                  <div className="opp-key-skills-container">
                    {selectedJob.KeySkills.map((item, i) => <span key={i}>{item}</span>)}
                  </div> 
                  <div className='Monitoring-Overview-Action'>
                      <button onClick={()=>handleDelete()} style={{background:"#f44d4d"}} >Delete</button>
                      <button style={{background:"#fdc01b"}}>Flag</button>
                      <button style={{background:"#b7b7b6"}}>Hold</button>
                    </div>              
                </div>
                
              </div>
                    
                 </div> 
       
  )
}
