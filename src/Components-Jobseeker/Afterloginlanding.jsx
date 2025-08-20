import React from 'react'
import './Afterloginlanding.css'
import { Link } from 'react-router-dom';
import { JHeader } from './JHeader';
import { JMainsection } from './JMainsection';
import { Jobsbycompany } from './Jobsbycompany';
import { Opportunities } from './Opportunities';
import { Footer } from '../Components-LandingPage/Footer';

export const Afterloginlanding = () => {
    return (
        <>
        <JHeader />
           <JMainsection />
           <Opportunities />
           <Jobsbycompany />
        <Footer />
        </>
    )
}