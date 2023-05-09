import React, { useState } from 'react';
import './ActiveUsers.scss';

function ActiveUsersPage({ logout }) {
  const [activeUsers, setActiveUsers] = useState([
    {
      id: 1,
      username: 'Alice',
      loginTime: '0 minutes ago',
      lastUpdated: '1 minutes ago',
      prevLoginTime: '2 minutes ago',
      ip: '192.168.1.101',
      userAgent: 'chrome',
      registrationTime: '10 minutes ago',
      loginsCount: '100'
    },
    {
      id: 2,
      username: 'Bob',
      loginTime: '0 minutes ago',
      lastUpdated: '1 minutes ago',
      prevLoginTime: '2 minutes ago',
      ip: '192.168.1.102',
      userAgent: 'opera',
      registrationTime: '20 minutes ago',
      loginsCount: '200'
    },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="active-users-page">
      <h1>Welcome to the DASHBOARD</h1>
      <div className="user-list">
        {activeUsers.map((user) => (
          <div
            key={user.id}
            className={`user-item ${
              selectedUser && selectedUser.id === user.id ? 'selected' : ''
            }`}
            onClick={() => handleUserClick(user)}
          >
            <div className="user-name">{user.username}</div>
            <div className="user-activity">
              {user.loginTime}
            </div>
            <div className="user-activity">
              {user.lastUpdated}
            </div>
            <div className="user-last-active">{user.prevLoginTime}</div>
            <div className="user-ip">{user.ip}</div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <div className="user-detail-row">
            <div className="user-detail-label">Name:</div>
            <div className="user-detail-value">{selectedUser.username}</div>
          </div>
          <div className="user-detail-row">
            <div className="user-detail-label">City:</div>
            <div className="user-detail-value">{selectedUser.loginTime}</div>
          </div>
          <div className="user-detail-row">
            <div className="user-detail-label">Country:</div>
            <div className="user-detail-value">{selectedUser.lastUpdated}</div>
          </div>
          <div className="user-detail-row">
            <div className="user-detail-label">Last Active:</div>
            <div className="user-detail-value">{selectedUser.prevLoginTime}</div>
          </div>
          <div className="user-detail-row">
            <div className="user-detail-label">IP:</div>
            <div className="user-detail-value">{selectedUser.ip}</div>
          </div>
        </div>
      )}
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default ActiveUsersPage;
