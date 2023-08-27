import React from "react";
import "./Team.css";
import Institutes from "./Component/Institutes";
import MeetMentors from "./Component/MeetMentors";
import MentorAdviser from "./Component/MentorAdviser";

const TeamPage = () => {
  return (
    <div className="Page_Container">
      <Institutes />
      <MeetMentors />
      <MentorAdviser/>
    </div>
  );
};

export default TeamPage;
