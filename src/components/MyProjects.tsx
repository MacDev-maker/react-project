import './MyProjects.css';
import MyProject from './MyProject';

type myProjectsProps = {
  myProjects: {
    id:string;
    name:string;
    hrefGithub:string;
    srcImg:string;
  }[]
}

function MyProjects({myProjects}: myProjectsProps) {

  return(
    <>
      <div className='projects-container'>
        <div className='section-title'>
          My Projects
        </div>
        
        <div className='projects-list'>
          {myProjects.map((myProject) => {
            return(
              <MyProject 
                id = {myProject.id}
                name = {myProject.name}
                hrefGithub = {myProject.hrefGithub}
                srcImg = {myProject.srcImg}
              />
            );
          })};
        </div>
      </div>
    </>
  );
}

export default MyProjects