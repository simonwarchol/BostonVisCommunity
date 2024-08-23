import uniqid from 'uniqid'
import { events } from '../../data'
import './Events.css'
import '../../App.css'
import moment from 'moment'

const EventDetails = ({ event, isPast }) => {
  const eventClass = isPast ? 'event past' : 'event'
  return (
    <div className={`${eventClass} container-background`} key={uniqid()} >
      <div className='event-details'>
        <span className={`glyph ${event.glyph}`}></span>
        <h3>{event.title}</h3>
        <p>{event.location}</p>
        <p>{event.date}</p>
      </div>
      <div className='event-description' dangerouslySetInnerHTML={{ __html: event.description }} />
    </div >
  )
}

const Events = () => {
  if (!events.length) return null;
  const sortedEvents = events.sort((a, b) => {
    const dateA = moment(a.date.split('@')[0].trim())
    const dateB = moment(b.date.split('@')[0].trim())
    return dateB - dateA
  });
  const pastEvents = sortedEvents.filter(event => moment(event.date.split('@')[0].trim()) < moment())
  const upcomingEvents = sortedEvents.filter(event => moment(event.date.split('@')[0].trim()) >= moment())

  return (
    <section id='events' className='events-section events section-offset'>
      <h2 className='section__title'>Events</h2>

      <h2 className='section__title subtitle'>Upcoming</h2>

      <div className='events__grid'>
        {upcomingEvents.map((event) => (
          <EventDetails event={event} isPast={false} />
        ))}
      </div>


      <h2 className='section__title subtitle'>Past</h2>

      <div className='events__grid'>
        {pastEvents.map((event) => (
          <EventDetails event={event} isPast={true} />
        ))}
      </div>
    </section >
  )
}

export default Events