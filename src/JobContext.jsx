import React, { createContext, useState, useContext } from 'react';
import { Joblist } from './JobList';



const JobContext = createContext();

export const JobProvider = ({ children }) => {
    // Total JobList
    const [jobs, setJobs] = useState(Joblist);

    // States to Toggle online status in chats
    const [onlineStatus, setOnlineStatus] = useState("yes");

    // Jobs to show when Applied
    const [appliedJobs, setAppliedJobs] = useState([]);

    // Jobs to show when Saved
    const [savedJobs, setSavedJobs] = useState([]);

    // Using Id to Toggle Menu in Notification Window
    const [activeMenuId, setActiveMenuId] = useState(null);

    // Chats/messages between Employer and Jobseeker 1:1;
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

    // Profile List from my profile
     const [allData, setAllData] = useState({
            profile: { fullName: '', gender: 'Select', dob: '', maritalStatus: 'Select', nationality: '' },
            currentDetails: { jobTitle: '', company: '', experience: '', currentLocation: '', prefLocation: '' },
            contact: { mobile: '', altMobile: '', email: '', altEmail: '', address: '', street: '', city: '', state: '', pincode: '', country: '' },
            resume: { size: '', portfolio: '' },
            education: { highestQual: 'Select', sslc: { institution: '', percentage: '', location: '', year: '' }, hsc: { stream: 'Select', institution: '', location: '', year: '', percentage: '' }, graduations: [{ id: 1, degree: '', status: 'Select', dept: '', percentage: '', startYear: '', endYear: '', college: '', city: '', state: '', country: '' }] },
            experience: { status: 'Fresher', hasExperience: 'No', entries: [{ id: 1, title: '', company: '', startDate: '', endDate: '', industry: 'Select', jobType: 'Select', location: '', responsibilities: '' }] },
            skills: ["User Research", "Problem solving", "Figma"],
            languages: [{ name: "English", proficiency: "Fluent" }, { name: "Tamil", proficiency: "Native" }],
            certs: [{ name: "Full-Stack Development", file: "cert1.pdf" }, { name: "UI/UX Design", file: "cert2.pdf" }],
            preferences: [{ currentCTC: '', expectedCTC: '', jobType: 'Select', role: '', ready: '', relocate: '' }]
        });

    const postJob = (newJobData) => {
        const newJob = {
            ...newJobData,
            id: jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1, 
            postedDate: getFormattedDate(),
        };
        setJobs((prev) => [newJob, ...prev]);
        alert(`Job "${newJob.title}" posted successfully!`);
    };

    // 2. Edit an Existing Job
    const editJob = (jobId, updatedData) => {
        setJobs((prev) => 
            prev.map((job) => (job.id === jobId ? { ...job, ...updatedData } : job))
        );
        
        // Also update saved jobs if the edited job was saved
        setSavedJobs((prev) => 
            prev.map((job) => (job.id === jobId ? { ...job, ...updatedData } : job))
        );
    };

    // Toggle End Conversation Logic In Employer Chat Window
    const [isChatEnded, setIsChatEnded] = useState(false);

    // NotificationData previously passed from AfterLoginLanding page
    const [notificationsData, setNotificationsData] = useState([{
        id: Date.now(),
        text: "Welcome to Job Portal",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRead: false,
    }]);
   
    // New Messages Notification Logic
    const [showNotification, setShowNotification] = useState(false);

    // to add NewNotification in NotificationData 
    const addNotification = (text) => {
        const newNotif = {
            id: Date.now(),
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isRead: false
        };
        setNotificationsData(prev => [newNotif, ...prev]);
    };

    
    const getFormattedDate = () => {
        return new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    };

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
    const addJob = (newJob) => {
        setJobs((prevJobs) => [...prevJobs, newJob]);
    };

    const deleteJob = (jobId) => {
        setJobs((prev) => prev.filter((j) => j.id !== jobId));
        setSavedJobs((prev) => prev.filter((j) => j.id !== jobId));
        addNotification("Job posting has been successfully deleted.");
    };
    

    return (
        <JobContext.Provider value={{
            jobs, appliedJobs, setAppliedJobs, savedJobs, chats, setChats, setJobs,
            onlineStatus, setOnlineStatus, isJobSaved, isChatEnded, setIsChatEnded,
            setNotificationsData, addNotification, toggleSaveJob, applyForJob, notificationsData, showNotification, setShowNotification,
            activeMenuId,setActiveMenuId,addJob,deleteJob,allData,setAllData,postJob,editJob
        }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobs = () => useContext(JobContext);