import jsIcon from './assets/JavaScript-icon.png';
import reactIcon from './assets/react.svg';
import toolBoxIcon from './assets/tool-box-icon.png';
import aiIcon from './assets/ai-icon.png';

export const projectsData = [
  {
    key: "1",
    name: "Ecommerce",
    hrefGithub: "https://github.com/MacDev-maker/ecommerce-project",
    srcImg: "https://api.iconify.design/lucide:shopping-basket.svg?color=%2328a745"
  }, {
    key: "2",
    name: "Chatbot",
    hrefGithub: "https://github.com/MacDev-maker/chatbot-project'",
    srcImg: "https://icones.pro/wp-content/uploads/2022/10/icone-robot-vert.png"
  }, {
    key: "3",
    name: "Workout app",
    hrefGithub: "https://github.com/MacDev-maker/WorkoutPlan",
    srcImg: "https://cdn-icons-png.flaticon.com/512/38/38464.png"
  }, {
    key: "4",
    name: "Kahoot game",
    hrefGithub: "https://github.com/MacDev-maker/projekt_zaliczeniowy",
    srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8UZQwtC0CCwP-ifhRGehA8WG67h1vYU2Iz6VaS9Qyg&s=10"
  }, {
    key: "5",
    name: "Mealapp",
    hrefGithub: "https://github.com/MacDev-maker/Mealapp",
    srcImg: "https://cdn-icons-png.flaticon.com/512/2046/2046670.png"
  }
];

export const skillsData = [
  {
    key: "react",
    name: "React & Ecosystem",
    description: [ "React.js", "JSX", "Custom Hooks", "React Router", "State Management"],
    icon: reactIcon,
  }, {
    key: "frontend",
    name: "Frontend & Web Foundations",
    description: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Semantic Web"],
    icon: jsIcon
  }, {
    key: "ai",
    name: "AI & Fundamentals",
    description: ["AI Capabilities", "Business AI Applications", "Networking Basics", "Computer Networks"],
    icon: aiIcon,
  },
  {
    key: "tools",
    name: "Tools, Testing & Cloud",
    description: ["Vite", "Git", "Vitest", "REST API", "AWS Deployment", "Jasmine"],
    icon: toolBoxIcon,
  },
];