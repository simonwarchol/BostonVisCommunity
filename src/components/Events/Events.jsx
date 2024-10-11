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

const parseDateText = (text) => {
  let trimmedDate = text.split('@')?.[0].trim() || text;

  // Regex to identify date ranges (e.g., "Oct 13-18, 2024")
  const rangeRegex = /(\b[A-Za-z]+\s\d{1,2})-(\d{1,2}),\s(\d{4})/;
  const singleDateRegex = /\b[A-Za-z]+\s\d{1,2},\s\d{4}/;

  // If date is in format like "Oct 13-18, 2024", pick the later date
  let rangeMatch = trimmedDate.match(rangeRegex);
  if (rangeMatch) {
    let monthDay2 = moment(`${rangeMatch[1].split(' ')[0]} ${rangeMatch[2]}, ${rangeMatch[3]}`, "MMM D, YYYY"); // Later date in the range
    return monthDay2;
  }

  // If it's a single date format like "Oct 13, 2024"
  let singleDateMatch = trimmedDate.match(singleDateRegex);
  if (singleDateMatch) {
    return moment(singleDateMatch[0], "MMM D, YYYY").format('MMMM D, YYYY');
  }

  // If nothing matched, return the original text (or further logic can be added)
  return moment(trimmedDate);
};

const Events = () => {
  if (!events.length) return null;
  const sortedEvents = events.sort((a, b) => {

    return parseDateText(b.date) - parseDateText(a.date);
  });
  const pastEvents = sortedEvents.filter(event => parseDateText(event.date) < moment())
  const upcomingEvents = sortedEvents.filter(event => parseDateText(event.date) >= moment())

  return (
    <section id='events' className='events-section events section-offset'>
      <h2 className='section__title stroke shadow'>Events</h2>

      <h2 className='section__subtitle'>Upcoming</h2>

      <div className='events__grid'>
        {upcomingEvents.map((event) => (
          <EventDetails event={event} isPast={false} />
        ))}
      </div>


      <h2 className='section__subtitle'>Past</h2>

      <div className='events__grid'>
        {pastEvents.map((event) => (
          <EventDetails event={event} isPast={true} />
        ))}
      </div>
    </section >
  )
}

export default Events