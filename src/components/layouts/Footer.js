import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer--> */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                642 Coronel Dominguez
                <br />
                Buenos Aires, Ciudad Madero
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/agustin-villarreal-0b17b919b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Agustin Portfolio 2021</small>
        </div>
      </div>
    </>
  );
};

export default Footer;
