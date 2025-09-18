import React from 'react'
import './CompaniesTab.css'
import { useNavigate } from "react-router-dom";

export const CompaniesTab = () => {
  const navigate = useNavigate();
  return (
    <>
        <h1>Companies</h1>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
    </>
  )
}
