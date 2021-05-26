import React from "react";

const Modal = ({ title, id, img, description, urlPage, urlGit }) => {
  {
    console.log(img);
  }
  return (
    <div
      className="portfolio-modal modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={id}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* <!-- Portfolio Modal - Title--> */}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {title}
                  </h2>
                  {/* <!-- Icon Divider--> */}
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  {/* <!-- Portfolio Modal - Image--> */}

                  <img
                    className="img-fluid rounded mb-5"
                    src={`assets/img/portfolio/${img}`}
                    alt="..."
                  />
                  {/* <!-- Portfolio Modal - Text--> */}
                  <p className="mb-4">{description}</p>
                  <div className="d-flex justify-content-around">
                    <a
                      className="btn btn-primary"
                      href={urlPage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Demo
                    </a>
                    <a
                      className="btn btn-secondary"
                      href={urlGit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      GitHub
                    </a>
                    <button
                      className="btn btn-danger"
                      href="#!"
                      data-bs-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
