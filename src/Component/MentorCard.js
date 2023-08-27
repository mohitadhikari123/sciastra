import React from "react";

const MentorCard = ({item}) => {
  return (
    <div className="mentorCard_container">
      <div className="mentor_image">
        <img src={item.img} alt="" />
      </div>
      <div className="name">
        {item.name}
      </div>
      <div className="university">
        {item.university}
      </div>
    </div>
  );
};

export default MentorCard;
