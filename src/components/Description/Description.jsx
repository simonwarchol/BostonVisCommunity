import { about } from '../../data';
import '../About/About.css';
import './../../App.css';

const { name, description, resume } = about;
const Description = () => {
    return (<div className='about-container container-background about-text'>
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
    </div>)
}
export default Description;