import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import MyProjects from './components/MyProjects';
import circle from './assets/circle.svg';
import './App.css';

function App() {
  return (
    <>
      <title>MW site</title>
      <link rel="icon" type="image/svg+xml" href={circle} />

      <Header />

      <WelcomeSection />  

      <MyProjects />
    </>
  )
}

export default App