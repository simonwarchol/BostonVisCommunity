import { about } from '../../data';
import './About.css';
import './../../App.css';
import Logo from '../Logo/Logo';

const About = () => {
  const { name, description, resume } = about;

  return (
    <section id='about-parent' className='section-offset'>
      <div className='title-logo-container'>
        <h2 className="title stroke shadow">{name}</h2>
        {/* <div className='logo-container'>
          <Logo />
        </div> */}
      </div>
    
    </section>
  );
};

export default About;