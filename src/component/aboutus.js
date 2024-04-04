import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>This is the About Us page content.</p>
      <div className="team-members">
        <h3>Our Team</h3>
        <div className="member">
          <img src="member1.jpg" alt="Team Member 1" />
          <p>John Doe</p>
          <p>CEO</p>
        </div>
        <div className="member">
          <img src="member2.jpg" alt="Team Member 2" />
          <p>Jane Smith</p>
          <p>CTO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
