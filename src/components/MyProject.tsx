type ProjectProps = {  name: string;
  hrefGithub: string;
  srcImg: string;
}

function Project({name, hrefGithub, srcImg}: ProjectProps) {
  return(
    <>
       <a
          className='project'
          target='_blank' 
          href={hrefGithub}
        >
          <img 
            src={srcImg}
            alt="Ecommerce project"
          />

          <p className={name}>
          </p>
        </a>
    </>
  );
}

export default Project