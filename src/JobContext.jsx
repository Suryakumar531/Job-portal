import React, { createContext, useState, useContext } from 'react';
import { Joblist } from './JobList';

 
const JobContext = createContext();
 
export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState(Joblist );
    const [onlineStatus, setOnlineStatus] = useState("yes");
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);
    const [activeChatId, setActiveChatId] = useState(1);
    
    const [chats, setChats] = useState([
        {
            id: 1,
            name: "Employer",
            role: "employer", 
            messages: [] 
        },
        {
            id: 2,
            name: "jobseeker",
            role: "jobseeker", 
            messages: []
        }
    ]);
    const [isChatEnded, setIsChatEnded] = useState(false);

    const isJobSaved = (jobId) => savedJobs.some((j) => j.id === jobId);
 
    const applyForJob = (originalJob) => {
        const newAppliedJob = {
            ...originalJob,
            appliedDate: `Applied on ${getFormattedDate()}`,
            status: { text: 'Hiring in Progress', type: 'progress' },
            applicationStatus: [
                { label: 'Application Submitted', sub: "Your profile, resume, and cover letter have successfully entered the company's database, and an acknowledgment has been sent.", status: 'completed' },
                { label: 'Resume Screening', sub: "Your resume is currently being reviewed...", status: 'pending' },
                { label: 'Recruiter Review', sub: "A hiring manager manually reviews your specific experience...", status: 'pending' },
                { label: 'Shortlisted', sub: "You have passed the initial review stages...", status: 'pending' },
                { label: 'Interview Called', sub: "The hiring team has officially reached out...", status: 'pending' },
            ]
        };
        setAppliedJobs((prev) => [...prev, newAppliedJob]);
        setJobs((prev) => prev.filter((j) => j.id !== originalJob.id));
        setSavedJobs((prev) => prev.filter((j) => j.id !== originalJob.id));
        alert(`Successfully applied to ${originalJob.title} at ${originalJob.company}!`);
    };
 
    const toggleSaveJob = (originalJob) => {
        if (isJobSaved(originalJob.id)) {
            setSavedJobs((prev) => prev.filter((j) => j.id !== originalJob.id));
        } else {
            const newSavedJob = {
                ...originalJob,
                savedDate: `Saved on ${getFormattedDate()}`
            };
            setSavedJobs((prev) => [...prev, newSavedJob]);
        }
    };
 
    return (
        <JobContext.Provider value={{
            jobs, appliedJobs, savedJobs, chats, setChats, 
            onlineStatus, setOnlineStatus, activeChatId, setActiveChatId, isJobSaved,isChatEnded, setIsChatEnded
        }}>
            {children}
        </JobContext.Provider>
    );
};
 
export const useJobs = () => useContext(JobContext);