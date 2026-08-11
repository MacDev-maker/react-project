import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './Skills.css';
import Skill from './Skill';

type SkillsProps = {
  skills: {
    key: string;
    name: string;
    description: string[];
    icon: string;
  }[]
}

function Skills({ skills }: SkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState('');

  useEffect(() => {
    if (!containerRef.current) return;
    const wrapper = containerRef.current;

    const calculatePaths = () => {
      const boxes = Array.from(wrapper.querySelectorAll('.skill')) as HTMLElement[];
      if (boxes.length === 0) return;

      let newPath = '';

      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        
        // Dynamically calculating the center of the boxes
        const boxCenterY = box.offsetTop + (box.offsetHeight / 2);
        const currentX = box.offsetLeft + (box.offsetWidth / 2);

        if (i === 0) {
          // Begining of path
          newPath += `M ${currentX} ${boxCenterY}`;
        } else {
          const prevBox = boxes[i - 1];
          const prevX = prevBox.offsetLeft + (prevBox.offsetWidth / 2);
          const prevBottom = prevBox.offsetTop + prevBox.offsetHeight;

          // Gap
          const gapCenterY = prevBottom + (box.offsetTop - prevBottom) / 2;

          newPath += ` L ${prevX} ${gapCenterY}`;
          newPath += ` L ${currentX} ${gapCenterY}`;
          newPath += ` L ${currentX} ${boxCenterY}`;
        }
      }

      setPath(newPath);
    };

    // Catches every change
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(calculatePaths);
    });

    observer.observe(wrapper);
    const skillBoxes = wrapper.querySelectorAll('.skill');
    skillBoxes.forEach(box => observer.observe(box));

    return () => observer.disconnect();
  }, [skills]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 90%"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className='skills-container'>
      <h2 className='skills-title'>Skills</h2>
      <div className='timeline-wrapper' ref={containerRef}>        
        
        <svg className="timeline-svg">
          {path && (
            <motion.path
              d={path}
              fill="none"
              stroke="#8787ff" 
              strokeWidth="6"
              strokeLinecap="square"
              strokeLinejoin="miter"
              style={{ pathLength: smoothProgress }} 
            />
          )}
        </svg>

        <div className='skills-list'>
          {skills.map((skill, index) => (
            <Skill 
              key={skill.key}
              name={skill.name}
              description={skill.description}
              index={index} 
              icon={skill.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;