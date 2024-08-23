import { about } from '../../data';
import './About.css';
import './../../App.css';
import Logo from '../Logo/Logo';

const About = () => {
  const { name, description, resume } = about;

  return (
    <section className='about-parent section-offset'>
      <h2 className="title stroke shadow">{name}</h2>
      <div className='about-container container-background about-text'>
        <div className='about-section'>
          <p className='about__desc'>
            {description && description}
          </p>

          <div className='about__contact center'>
            {resume && (
              <a href={resume}>
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            )}
          </div>
        </div>
        <div className='about-section'>
          <Logo />
        </div>
      </div>
    </section>
  );
};

export default About;