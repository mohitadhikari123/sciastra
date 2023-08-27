import React from "react";
import "../Team.css";
const Institutes = () => {
  const data = [
    {
      id: 1,
      title: "Cambridge University",
    },
    {
      id: 2,
      title: "Harvard University",
    },
    {
      id: 3,
      title: "University of California",
    },
    {
      id: 4,
      title: "ETH Zürich",
    },
    {
      id: 5,
      title: "Max Planck Institute",
    },
    {
      id: 6,
      title: "University of Edinburgh",
    },
    {
      id: 7,
      title: "John's Hopkins",
    },
    {
      id: 8,
      title: "Michigan State University",
    },
    {
      id: 9,
      title: "University of Illinois",
    },
    {
      id: 10,
      title: "Humboldt University of Berlin",
    },
  ];
  return (
    <div className="institutes_container">
      <div className="heading_container">
        <div className="heading">
          <span>Team Page</span>
        </div>
        <div className="desc">
          <span>
            Learn From Scientist, Research Scholars From the Top Institutes in
            the World
          </span>
        </div>
      </div>
      <div className="university_container">
        <div className="university_container_1">
          {data?.map((item) => (
            <div className="university_card_container">
              <p>{item.title}</p>
            </div>
          ))}
          <span className="desc">..... And So on</span>
        </div>
      </div>
    </div>
  );
};

export default Institutes;
