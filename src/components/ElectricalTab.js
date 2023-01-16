import React from "react";
import electrical1 from "../assets/images/electrical4.jpeg";
import electrical2 from "../assets/images/electrical5.jpeg";
import electrical3 from "../assets/images/electrical6.jpeg";
import electrical4 from "../assets/images/electrical7.jpeg";

const ElectricalTab = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={electrical1} alt="" />
            </div>
            <div className="content-box">
              <h2>Civil Construction</h2>
              <p>Casting of Reinforced floor</p>
            </div>
          </div>
        </div>
      </div>

      {/* project two */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={electrical2} alt="" />
            </div>
            <div className="content-box">
              <h2>Civil Construction</h2>
              <p>Casting of Reinforced floor</p>
            </div>
          </div>
        </div>
      </div>

      {/* project three */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={electrical3} alt="" />
            </div>
            <div className="content-box">
              <h2>Civil Construction</h2>
              <p>Construction of retaining wall for trailer Park</p>
            </div>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={electrical4} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Installation of public pipes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricalTab;
