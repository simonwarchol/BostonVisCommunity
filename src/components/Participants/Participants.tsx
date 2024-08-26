import React from 'react';
import { participants } from '../../data';
import uniqid from 'uniqid';
import './Participants.css'; // Ensure you have the CSS file imported

const Participants = () => {
    return (
        <section id='participants' className='section-offset'>
            <h2 className="section__title stroke shadow">Participants</h2>
            <div className='about-container container-background about-text'>
                {participants.map(participant => (
                    <div key={uniqid()} className='participant'>
                        <h3 className='participant__name'>{participant.name}</h3>
                        <p className='participant__affiliation'>{participant.affiliation}</p>
                        <a href={participant.website} className='participant__website' target='_blank' rel='noopener noreferrer'>
                            {participant.website}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Participants;