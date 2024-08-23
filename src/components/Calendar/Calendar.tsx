import React from 'react';

const Calendar = () => {
    return (
        <section id='calendar' className='section-offset'>
            <h2 className='section__title'>Calendar</h2>

            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=NTVmNWRmMzRkNGVkODU1NWU3YTliZmNhNWE2NmIwMjNjZjMzNjAxY2NlM2ZlOTA0NmQxYzkzNTc5NWMwYmI2ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
                style={{ border: 'solid 1px #777', margin: '1em' }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no">
            </iframe>
        </section>
    );
}

export default Calendar;