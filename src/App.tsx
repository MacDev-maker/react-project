import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import MyProjects from './components/MyProjects';
import { useState } from 'react';
import circle from './assets/circle.svg';
import './App.css';

function App() {
  const projectsData = [
    {
      id: "1",
      name: "Ecommerce",
      hrefGithub: "https://github.com/MacDev-maker/ecommerce-project",
      srcImg: "https://api.iconify.design/lucide:shopping-basket.svg?color=%2328a745"
    }, {
      id: "2",
      name: "Chatbot",
      hrefGithub: "https://github.com/MacDev-maker/chatbot-project'",
      srcImg: "https://icones.pro/wp-content/uploads/2022/10/icone-robot-vert.png"
    }, {
      id: "3",
      name: "Workout app",
      hrefGithub: "https://github.com/MacDev-maker/WorkoutPlan",
      srcImg: "https://cdn-icons-png.flaticon.com/512/38/38464.png"
    }, {
      id: "4",
      name: "Kahoot game",
      hrefGithub: "https://github.com/MacDev-maker/projekt_zaliczeniowy",
      srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8UZQwtC0CCwP-ifhRGehA8WG67h1vYU2Iz6VaS9Qyg&s=10"
    }, {
      id: "5",
      name: "Mealapp",
      hrefGithub: "https://github.com/MacDev-maker/Mealapp",
      srcImg: "https://cdn-icons-png.flaticon.com/512/2046/2046670.png"
    }
  ];

  localStorage.setItem('myProjects', JSON.stringify(projectsData));

  const [myProjects] = useState(
    JSON.parse(localStorage.getItem('myProjects') || '[]')
  );

  return (
    <>
      <title>MW site</title>
      <link rel="icon" type="image/svg+xml" href={circle} />

      <Header />

      <WelcomeSection />  

      <MyProjects 
        myProjects={myProjects}
      />
    </>
  )
}

export default App