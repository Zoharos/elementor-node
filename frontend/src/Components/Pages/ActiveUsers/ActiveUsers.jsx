import React, { useState } from 'react';
import './ActiveUsers.scss';

function ActiveUsersPage({ logout, activeUsers }) {
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
            key={user._id}
            className={`user-item ${
              selectedUser && selectedUser._id === user._id ? 'selected' : ''
            }`}
            onClick={() => handleUserClick(user)}
          >
            <div className="user-name">{user.email}</div>
            <div className="user-activity">
              login time: {user.login_time}
            </div>
            <div className="user-activity">
              last update: {user.last_update_time}
            </div>
            <div className="user-last-active">last login: {user.last_login}</div>
            <div className="user-ip">ip: {user.ip}</div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <div className="user-detail-row">
            <div className="user-detail-label">Name:</div>
            <div className="user-detail-value">{selectedUser.email}</div>
          </div>
          <div className="user-detail-row">
            <div className="user-detail-label">User Agent:</div>
            <div className="user-detail-value">{selectedUser.user_agent}</div>
          </div>
          <div className="user-detail-row">
            <div className="user-detail-label">Login Count:</div>
            <div className="user-detail-value">{selectedUser.login_count}</div>
          </div>
          <div className="user-detail-row">
            <div className="user-detail-label">Register Time:</div>
            <div className="user-detail-value">{selectedUser.register_time}</div>
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
