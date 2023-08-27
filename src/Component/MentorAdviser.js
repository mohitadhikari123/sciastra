import React from "react";
import "../Team.css";

const MentorAdviser = () => {
  return (
    <div className="adviser_container">
      <div className="adviser_heading">
        <span>Mentor & Advisor</span>
      </div>
      <div className="adviser_card_container">
        <div className="adviser_card_1 mentorCard_container">
          <div className="mentor_image">
            <img src="https://www.sciastra.com/teams/dr_omkar.jpg" alt="" />
          </div>
          <div className="name">
            <span>Dr. Omkar</span>
          </div>
          <div className="university">
            <span>Principal Project Scientist at IIT Madras</span>
          </div>
        </div>
        <div className="adviser_card_2 mentorCard_container">
          <div className="mentor_image">
            <img
              src="https://www.sciastra.com/teams/akhil_tripathi_niser.jpg"
              alt=""
            />
          </div>
          <div className="name">
            <span>Akhil Tripathi</span>
          </div>
          <div class="name_btn" id="inner2">
            <a class="button" href="mailto:support@sciastra.com">
              <span>Message him now</span>
            </a>
          </div>
        </div>
        <div className="adviser_card_2 mentorCard_container">
          <div className="mentor_image">
            <img
              src="https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg"
              alt=""
            />
          </div>
          <div className="name">
            <span>Vivek Dwivedi</span>
          </div>
          <div class="name_btn" id="inner2">
            <a class="button" href="mailto:support@sciastra.com">
              <span>Message him now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorAdviser;
