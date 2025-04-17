
import React, { useState, useEffect } from 'react';
import './AboutUs.css'; // Import CSS file for styling

const AboutUs = () => {

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://localhost:7051/api/Getemployee')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="about-us-container">
    <h2>About Us</h2>
    <p>This is the About Us page content.</p>
    <div className="team-members">
      <h3>Our Team</h3>
      {teamMembers.map((member, index) => (
        <div key={index} className="member">
          
          <p>{member.email}</p>
          <p>{member.username}</p>
          <p>{member.mobile_number}</p>
          <p>{member.email}</p>
          {/* Add more member details as needed */}
        </div>
      ))}
    </div>
  </div>

  );
};

export default AboutUs;
