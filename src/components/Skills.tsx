import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import './Skills.css';
import Skill from './Skill';

type SkillsProps = {
  skills: {
    key: string;
    name: string;
    description: string[];
  }[]
}

function Skills({ skills }: SkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1580);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const desktopPath = "M 375 150 L 375 900 L 825 900 L 825 2200 L 600 2200 L 600 2600";
  const mobilePath = "M 600 150 L 600 2900"; 

  return (
    <div className='skills-container'>
      <h1 className='skills-title'>Skills</h1>
      <div className='timeline-wrapper' ref={containerRef}>        
        <svg className="timeline-svg" viewBox="0 0 1200 3000" preserveAspectRatio="none">
          <motion.path
            d={isDesktop ? desktopPath : mobilePath}
            fill="none"
            stroke="#8787ff" 
            strokeWidth={isDesktop ? "6" : "12"}
            strokeLinecap="square"
            strokeLinejoin="miter"
            style={{ pathLength: scrollYProgress }} 
          />
        </svg>

        <div className='skills-list'>
          {skills.map((skill, index) => (
            <Skill 
              key={skill.key}
              name={skill.name}
              description={skill.description}
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;