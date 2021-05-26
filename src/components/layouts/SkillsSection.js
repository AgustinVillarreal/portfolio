import React from "react";

const SkillsSection = () => {
  return (
    // <!-- Skills Section-->
    <section className="page-section" id="skills">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Skills
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h2 className='text-center'>Languages and Frameworks</h2>
            <div className="my-4">
              <h3 className ="fs-6">HTML5</h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">CSS3</h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">JavaScript</h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">React</h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="skill-item mb-4">
              <h3 className="fs-6">NodeJs</h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className='text-center'>Tools</h2>
            <div>
              <div className="my-4">
                <h3 className="fs-6">Firebase</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="fs-6">GitHub</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="fs-6">MongoDB</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="fs-6">Visual Studio Code</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  //   <div className="col-md-6 col-lg-4 mb-5">
  //   <p>HTML5</p>
  //   <i class="fab fa-html5"></i>
  // </div>
  /* <div>
            <p>ReactJs</p>
            <i class="fab fa-react"></i>
          </div>
          <div>
            <p>JavaScript</p>
            <i class="fab fa-js"></i>
          </div>
          <div>
            <p>CSS3</p>
            <i class="fab fa-css3-alt"></i>
          </div>
          <div>
            <p>NodeJs</p>
            <i class="fab fa-node-js"></i>
          </div> */
}

export default SkillsSection;
