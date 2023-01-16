import React from "react";
import roof1 from "../assets/images/roofing1.jpeg";
import roof2 from "../assets/images/roofing2.jpeg";
import roof3 from "../assets/images/roofing3.jpeg";
import roof4 from "../assets/images/roofing4.jpeg";

const CivilTab = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof1} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Installation</p>
            </div>
          </div>
        </div>
      </div>

      {/* project two */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof2} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Restoration and maintenance</p>
            </div>
          </div>
        </div>
      </div>

      {/* project three */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof3} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Installation</p>
            </div>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof4} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Restoration and maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CivilTab;
