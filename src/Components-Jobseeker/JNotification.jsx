import React, { useState } from 'react'
import './JNotification.css'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'

/* Below Code is removed after backend integration*/
const notificationsData = [
    {
        id: 1,
        text: 'Recruiter viewed your profile',
        time: 'Today, 10:45 am',
        isNew: true,
    },
    {
        id: 2,
        text: 'You have an interview invitation from XYZ Pvt Ltd',
        time: 'Yesterday, 4:20 pm',
        isNew: true,
    },
    {
        id: 3,
        text: 'Application submitted successfully for UI/UX Designer',
        time: 'Yesterday, 4:20 pm',
        isNew: false,
    },
    {
        id: 4,
        text: 'Your profile is 90% complete — finish to get more calls',
        time: 'Yesterday, 4:20 pm',
        isNew: false,
    },
    {
        id: 5,
        text: '5 new jobs match your preferences',
        time: '17 Aug 2025, 9:30 am',
        isNew: false,
    },
    {
        id: 6,
        text: '5 new jobs match your preferences',
        time: '17 Aug 2025, 9:30 am',
        isNew: false,
    },
];

export { notificationsData };

const OverflowMenu = ({ notificationId, onMarkAsRead, onDelete }) => {
    return (
        <div className="overflow-menu">
            <button onClick={() => onMarkAsRead(notificationId)} className="menu-item">Mark as read</button>
            <button onClick={() => onDelete(notificationId)} className="menu-item delete-item">Delete</button>
        </div>
    );
};

export const JNotification = ({ notificationsData, showNotification, setShowNotification }) => {
    // State to track which notification's menu is open
    const [activeMenuId, setActiveMenuId] = useState(null);

    const newNotificationsCount = notificationsData.filter(n => n.isNew).length;

    // Handler to toggle the menu for a specific notification
    const toggleMenu = (id, event) => {
        // Stop event propagation to prevent the notification's click action
        event.stopPropagation();
        setActiveMenuId(activeMenuId === id ? null : id);
    };

    // Placeholder handlers for menu actions
    const handleMarkAsRead = (id) => {
        console.log(`Marking notification ${id} as read`);
        // you'd update notificationsData here
        setActiveMenuId(null);
    };

    const handleDelete = (id) => {
        console.log(`Deleting notification ${id}`);
        // you'd update notificationsData here
        setActiveMenuId(null);
    };

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
                    <div 
                        key={notification.id} 
                        className={notification.isNew ? "notification-new-item" : "notification-old-item"}
                    >
                        <div className="notification-content">
                            <p className="notification-text">{notification.text}</p>
                            <p className="notification-time">{notification.time}</p>
                        </div>
                        
                        <div className="more-options-wrapper">
                            <button 
                                className="more-options-btn" 
                                onClick={(e) => toggleMenu(notification.id, e)}
                            >
                                ⋮
                            </button>
                            {/* Conditionally render the menu */}
                            {activeMenuId === notification.id && (
                                <OverflowMenu 
                                    notificationId={notification.id}
                                    onMarkAsRead={handleMarkAsRead}
                                    onDelete={handleDelete}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
