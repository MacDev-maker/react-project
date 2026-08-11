import './Skills.css';

type SkillProps = {
  name: string;
  description: string[];
  index: number; 
  icon: string;
}

function Skill({ name, description, index, icon }: SkillProps) {
  const positionClass = 
    (index === 0 || index === 2) ? 'pos-left' : 
    (index === 1) ? 'pos-right' : 
    'pos-center';

  return (
    <div className={`skill ${positionClass}`}>
      <div className="skill-header">
        <img src={icon} alt={`${name} icon`} className="skill-icon" />
        <h3 className='name-skill'>{name}</h3>
      </div>
      <div className='description'>
        {description.map((elem, i) => (
          <p key={i}>{elem}</p> 
        ))}
      </div>
    </div>
  );
}

export default Skill;