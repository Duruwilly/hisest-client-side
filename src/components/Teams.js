import React, { useEffect } from "react";
import HisestMd from "../assets/images/hisest-md.jpeg";
import staff1 from "../assets/images/Godspower.jpg";
import staff2 from "../assets/images/hisest-secretary.jpeg";
import HisestChairman from "../assets/images/hisest-chief.jpeg";
import OwlCarousel from "react-owl-carousel";
import "../assets/vendors/owl-carousel/owl.carousel.min.css";
import "../assets/vendors/owl-carousel/owl.theme.default.min.css";
import "owl.carousel";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import WOW from "wowjs";
import "../assets/vendors/animate/animate.min.css";
import "../assets/vendors/animate/custom-animate.css";

const Teams = () => {
  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true,
      live: true,
    }).init();
  });
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1100: {
        items: 3,
      },
      1350: {
        items: 4,
      },
    },
  };
  return (
    <section className="team">
      <div className="container-fluid">
        <div className="sec-title text-center">
          <div className="sec-title__tagline">
            <span className="left"></span>
            <h6>Our Team</h6> <span className="right"></span>
          </div>
          <h2 className="sec-title__title">Our Team At Hisest</h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <OwlCarousel
              className="project-three__carousel owl-carousel owl-theme"
              {...options}
            >
              {/* team 1 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={HisestChairman} alt="" />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>
                        Chairman: High Chief Engr. Bankole Akintemihin B.sc Eng,
                        MNSE, COREN Reg
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* team 2 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={HisestMd} alt="" style={{ height: "24.5rem" }} />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>
                        Managing Director: Surv. Olaseni Adebola Emmanuel. BSc,
                        Surv&Geo,ANIS, OSHA(UK)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* team 3 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={staff1} alt="" style={{ height: "27rem" }} />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>Godspower Osarumese</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* team 4 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={staff2} alt="" style={{ height: "27rem" }} />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>General Secretary</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* teams ends */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
