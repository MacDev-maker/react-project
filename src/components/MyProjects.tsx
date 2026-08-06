import './MyProjects.css';
import robot from '../assets/circle.svg'

function MyProjects() {
  return(
    <>
      <div className='projects-container'>
        <div className='section-title'>
          My Projects
        </div>
        
        <div className='projects-list'>
          <a
            className='project'
            target='_blank' 
            href='https://github.com/MacDev-maker/ecommerce-project'
          >
            <img 
              src="https://api.iconify.design/lucide:shopping-basket.svg?color=%2328a745"
              alt="Ecommerce project"
            />

            <p className='description-project'>
              Ecommerce
            </p>
          </a>

           <a
            className='project'
            target='_blank' 
            href='https://github.com/MacDev-maker/chatbot-project'
          >
            <img 
              className='project chatbot-project'
              src="https://icones.pro/wp-content/uploads/2022/10/icone-robot-vert.png"
              alt="Chatbot project"
            />

            <p className='description-project'>
              Chatbot
            </p>
          </a>

           <a
            className='project'
            target='_blank' 
            href='https://github.com/MacDev-maker/WorkoutPlan'
          >
            <img 
              className='project workout-plan-project'
              src="https://cdn-icons-png.flaticon.com/512/38/38464.png"
              alt="Ecommerce project"
            />

            <p className='description-project'>
              Workout app
            </p>
          </a>

           <a
            className='project'
            target='_blank' 
            href='https://github.com/MacDev-maker/projekt_zaliczeniowy'
          >
            <img 
              className='project kahoot-project'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8UZQwtC0CCwP-ifhRGehA8WG67h1vYU2Iz6VaS9Qyg&s=10"
              alt="Kahoot"
            />

            <p className='description-project'>
              Kahoot game
            </p>
          </a>

           <a
            className='project'
            target='_blank' 
            href='https://github.com/MacDev-maker/Mealapp'
          >
            <img 
              className='project mealapp-project'
              src="https://cdn-icons-png.flaticon.com/512/2046/2046670.png"
              alt="Mealapp project"
            />

            <p className='description-project'>
              Mealapp
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default MyProjects