import React, { useState } from 'react'
import './JNotification.css'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'


export const JNotification = ({ notificationsData, showNotification, setShowNotification }) => {

    const newNotificationsCount = notificationsData.filter(n => n.isNew).length;
    return (
        <div className={`notifications-container ${showNotification ? "show-notification" : "hide-notification"}`}>
            <div className="notifications-header">
                <div className='notifications-heading-container'><img className='notification-header-icons' src={newNotificationsCount > 0 ? bell_dot: bell} alt='Notifications' /><h2>Notifications</h2></div>
                <button onClick={() => setShowNotification(false)} className="notifications-close-btn">&times;</button>
            </div>
            
            <div className="notifications-subheader">
                <div>
                    <span>Stay Up to Date</span>
                    {newNotificationsCount > 0 && (
                        <span className="new-notifications-count">{newNotificationsCount} New Notifications</span>
                    )}
                </div>
                <button className="clear-all-btn">Clear all</button>
            </div>

            <div className="notifications-list">
                {notificationsData.map((notification) => (
                    <div key={notification.id} className={notification.isNew ? "notification-new-item" : "notification-old-item"}>
                        <div className="notification-content">
                            <p className="notification-text">{notification.text}</p>
                            <p className="notification-time">{notification.time}</p>
                        </div>
                        <button className="more-options-btn">⋮</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
