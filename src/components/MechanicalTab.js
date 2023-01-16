import React from "react";
import mechanincal1 from "../assets/images/mechanical3.jpeg";
import Project1 from "../assets/images/project1.jpeg";
import installation from "../assets/images/installation2.jpeg";
import mechanincal2 from "../assets/images/mechanical4.jpeg"

const MechanicalTab = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={Project1} alt="" />
            </div>
            <div className="content-box">
              <h2>Welding</h2>
              <p>Welding of polines</p>
            </div>
          </div>
        </div>
      </div>
      {/* project 2 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={mechanincal1} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Installation</p>
            </div>
          </div>
        </div>
      </div>
      {/* project 3 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={installation} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Installation of panel mesh</p>
            </div>
          </div>
        </div>
      </div>
      {/* project 4 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={mechanincal2} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Installation of storm water pipe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MechanicalTab;
