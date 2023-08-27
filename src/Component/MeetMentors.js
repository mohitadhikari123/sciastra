import React from "react";
import "../Team.css";
import MentorCard from "./MentorCard";

const MeetMentors = () => {
  const data = [
    {
      id: 1,
      name: "Rohit Kumar",
      img: "https://www.sciastra.com/teams/profilepic2.jpg",
      university: "Cambridge University",
    },
    {
      id: 2,
      name: "Piyush Verma",
      img: "http://www.sciastra.com/new_admin/teams/files/Piyush_Verma_biology.jpg",
      university: "IISER Pune",
    },
    {
      id: 3,
      name: "Aditya Nayak",
      img: "http://www.sciastra.com/new_admin/teams/files/Aditya%20Nayak_Biology.jpeg",
      university: "IISER Mohali",
    },
    {
      id: 4,
      name: "Tiasha Das",
      img: "http://www.sciastra.com/new_admin/teams/files/TIASHA_DAS_Biology.jpg",
      university: "IISER Berhampur",
    },
    {
      id: 5,
      name: "Mandar Tornekar",
      img: "http://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
      university: "GMC Dhule",
    },
    {
      id: 6,
      name: "Siddhart Bhatt",
      img: "http://www.sciastra.com/new_admin/teams/files/Siddharth_Bhatt_physics.jpg",
      university: "IISER Thiruvananthapuram",
    },
    {
      id: 7,
      name: "Ripunjay Dwivedi",
      img: "http://www.sciastra.com/new_admin/teams/files/Ripunjay.JPG",
      university: "CMI",
    },
    {
      id: 8,
      name: "Sehasree Mohanta",
      img: "http://www.sciastra.com/new_admin/teams/files/Sehasree_Mohanta.jpg",
      university: "NISER",
    },
    {
      id: 9,
      name: "Sagar Rathore",
      img: "http://www.sciastra.com/new_admin/teams/files/Sagar_Rathore_physics.jpg",
      university: "IISER Berhampur",
    },
    {
      id: 10,
      name: "Abhay Gupta",
      img: "http://www.sciastra.com/new_admin/teams/files/Abhay_Gupta_physics.jpg",
      university: "IIT Bombay",
    },
    {
      id: 11,
      name: "Saumya Prakash",
      img: "http://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
      university: "NISER",
    },
    {
      id: 12,
      name: "Saumya Shisodiya",
      img: "http://www.sciastra.com/new_admin/teams/files/Saumya_Shisodiya_mathematics.jpg",
      university: "HBTU Kanpur",
    },
  ];
  return (
    <div className="mentor_container">
      <div className="heading_container">
        <div className="heading">
          <span>Meet Your Mentor</span>
        </div>
      </div>
      <div className="mentor_card_container">
        {data?.map((item) => 
          <MentorCard item={item} key={item.id}/>
        )}
      </div>
    </div>
  );
};

export default MeetMentors;
