import "./Header.css";

function Introduction() {
  return (
    <>
      <div className="header-container">
        <div className="section-container">
          <button className="header-button resume-button">
            <a 
              href="/CV_Węglarz_Maciej.pdf"
              download="CV_Węglarz_Maciej.pdf"
              className="download-resume"
            >
              Resume
            </a>
          </button>

          <a
            href="#my-projects"
            className="projects-button"
          >
            <button className="header-button">
              Projects
            </button>
          </a>

          <a
            href="#contact-section"
            className="contact-button"
          >
            <button className="header-button">
              Contact          
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Introduction