import React from "react";

const AboutSection = () => {
  return (
    // <!-- About Section-->
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              Hello, I am Agustin Villarreal, I am 20 years old and I am from
              Argentina. I began to be interested in web development in 2020 and
              in a self-taught way I began to carry out my own projects
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              On the other hand, I am an engineering student at UTN. I am a
              developer working on the frontEnd side (React), I also have
              knowledge in backend. I am passionate about technology. I love
              listening to music, at the same time I investigate all kind of
              tools that relate to my professional career.
            </p>
          </div>
        </div>
        {/* <!-- About Section Button--> */}
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            target="_blank"
            rel="noopener noreferrer"
            href="/assets/img/portfolio/CV.pdf"
          >
            <i className="fas fa-download me-2"></i>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
