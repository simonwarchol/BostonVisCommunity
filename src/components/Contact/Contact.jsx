import { contact } from '../../data'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center ' id='contact'>
      <h2 className='section__title stroke shadow'>Contact</h2>
      <p className='contact__desc'>
        If you have any questions or would like to get in touch, please feel free to send us an email.
      </p>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email us
        </span>
      </a>
    </section>
  )
}

export default Contact
