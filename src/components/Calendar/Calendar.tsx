import React from 'react';
import './Calendar.css';

const Calendar = () => {
    return (
        <section id='calendar' className='section-offset'>
            <h2 className='section__title stroke shadow'>Calendar</h2>

            <iframe
                id='calendar-iframe'
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=NTVmNWRmMzRkNGVkODU1NWU3YTliZmNhNWE2NmIwMjNjZjMzNjAxY2NlM2ZlOTA0NmQxYzkzNTc5NWMwYmI2ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
            >
            </iframe>
        </section>
    );
}

export default Calendar;