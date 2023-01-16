import React from "react";
import survery2 from "../assets/images/survey2.jpeg";
import survery3 from "../assets/images/survey4.jpeg";
import survery4 from "../assets/images/survey6.jpeg";
import survery5 from "../assets/images/survey10.jpeg";
import survery6 from "../assets/images/survey9.jpeg";

const SurveyTab = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={survery2} alt="" />
            </div>
            <div className="content-box">
              <h2>Surveying</h2>
              <p>Land Surveying</p>
            </div>
          </div>
        </div>
      </div>

      {/* project two */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={survery6} alt="" />
            </div>
            <div className="content-box">
              <h2>Surveying</h2>
              <p>Land Surveying</p>
            </div>
          </div>
        </div>
      </div>

      {/* project three */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={survery5} alt="" />
            </div>
            <div className="content-box">
              <h2>Surveying</h2>
              <p>Land Surveying</p>
            </div>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={survery4} alt="" />
            </div>
            <div className="content-box">
              <h2>Surveying</h2>
              <p>Land Surveying</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyTab;
