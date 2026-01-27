import React, { createContext, useState, useContext } from 'react';
import {JobList} from './JobList';

const JobContext = createContext();

export const JobProvider = ({ children }) => {

    const [jobs, setJobs] = useState(JobList);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);

    const getFormattedDate = () => {
        return new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    };

    const isJobSaved = (jobId) => savedJobs.some((j) => j.id === jobId);

    const applyForJob = (originalJob) => {
        const newAppliedJob = {
            ...originalJob,
            appliedDate: `Applied on ${getFormattedDate()}`,
            status: { text: 'Hiring in Progress', type: 'progress' }
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
            jobs,
            appliedJobs,
            savedJobs,
            applyForJob,
            toggleSaveJob,
            isJobSaved
        }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobs = () => useContext(JobContext);