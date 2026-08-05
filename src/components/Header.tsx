import './Header.css';

function Introduction() {
  return (
    <>
      <div className='header-container'>
        <div className='section-container'>
          <button className='header-button resume-button'>
            Resume
          </button>

          <button className='header-button'>
            Projects
          </button>

          <button className='header-button'>
            Contact          
          </button>
        </div>
      </div>
    </>
  );
}

export default Introduction