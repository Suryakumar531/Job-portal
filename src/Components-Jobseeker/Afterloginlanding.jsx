import React from 'react'
import './Afterloginlanding.css'
import { Link } from 'react-router-dom';
import { JHeader } from './JHeader';
import { JMainsection } from './JMainsection';
import { Jobsbycompany } from './Jobsbycompany';
import { Opportunities } from './Opportunities';
import { Jfooter } from './Jfooter';

export const Afterloginlanding = () => {
    return (
        <>
        <JHeader />
           <JMainsection />
           <Opportunities />
           <Jobsbycompany />
        <Jfooter />
        </>
    )
}