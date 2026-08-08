import './Skills.css';

type SkillProps = {
  name: string;
  description: string[];
  index: number; 
}

function Skill({ name, description, index }: SkillProps) {
  const positionClass = index === 0 ? 'pos-left' : index === 1 ? 'pos-right' : 'pos-center';

  return (
    <div className={`skill ${positionClass}`}>
      <h6 className='name-skill'>{name}</h6>
      <div className='description'>
        {description.map((elem, i) => (
          <p key={i}>{elem}</p> 
        ))}
      </div>
    </div>
  );
}

export default Skill;