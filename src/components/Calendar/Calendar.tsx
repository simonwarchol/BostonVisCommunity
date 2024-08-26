import React from 'react';
import './Calendar.css';

const Calendar = () => {
    return (
        <section id='calendar' className='section-offset'>
            <h2 className='section__title stroke shadow'>Calendar</h2>

            <iframe
                id='calendar-iframe'
                src="https://calendar.google.com/calendar/embed?src=55f5df34d4ed8555e7a9bfca5a66b023cf33601cce3fe9046d1c935795c0bb6f%40group.calendar.google.com&ctz=America%2FNew_York"
            >
            </iframe>
        </section>
    );
}

export default Calendar;