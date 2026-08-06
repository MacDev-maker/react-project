import { useEffect, useState, useRef } from 'react';
import './MyProjects.css';
import MyProject from './MyProject';

type MyProjectsProps = {
  myProjects: {
    key: string;
    name: string;
    hrefGithub: string;
    srcImg: string;
  }[]
};

function MyProjects({ myProjects }: MyProjectsProps) {
  // Stan przechowujący indeks aktualnie widocznego projektu
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Pobieramy indeks z atrybutu i ustawiamy jako aktywny
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Aktywuje się, gdy karta jest w 50% widoczna
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='projects-container'>
      
      {/* LEWA STRONA - PRZYKLEJONA */}
      <div className='left-sticky-panel'>
        <div className='section-title'>
          My Projects
        </div>
        
        <div className='dynamic-titles-container'>
          {myProjects.map((project, index) => (
            <h2 
              key={`title-${project.key}`} 
              className={`dynamic-title ${activeIndex === index ? 'active' : ''}`}
            >
              {project.name}
            </h2>
          ))}
        </div>
      </div>

      {/* PRAWA STRONA - SCROLLOWANA */}
      <div className='projects-list'>
        {myProjects.map((Myproject, index) => (
          <div 
            key={Myproject.key}
            className="image-section"
            data-index={index}
            ref={(el) => {(sectionsRef.current[index] = el)}}
          >
            <MyProject 
              name={Myproject.name}
              hrefGithub={Myproject.hrefGithub}
              srcImg={Myproject.srcImg}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MyProjects;