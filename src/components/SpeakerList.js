import React from 'react';

import { speakers } from '../../data/speakers.js';
import { sessions } from '../../data/sessions';
import { speakerSessions } from '../../data/speakerSessions';

function SpeakerList() {
    function sessionsBySpeaker(speakerId) {
        const sessionIds = speakerSessions
            .filter((speakerSession) => {
                return speakerSession.speakerId === speakerId;
            })
            .map((a) => {
                return a.sessionId;
            });

        const sessionsBySpeaker = sessions.filter((session) =>
            sessionIds.includes(session.id),
        );

        return sessionsBySpeaker;
    }

    return (
        <div className="container">
            {speakers.map(({ id, name, company, sessions, cursor }) => {
                //const speakerSrc = `https://www.siliconvalley-codecamp.com/attendeeimage/32604.jpg?height=100`;
                const speakerSrc = `http://ddrt7tzfkdwdf.cloudfront.net/attendeeimage/${id}.jpg?height=40`;
                return (
                    <div className="row justify-content-start" key={id}>
                        <b>{name} </b>&nbsp;&nbsp;{company} &nbsp;&nbsp;{' '}
                        <img src={speakerSrc} alt={name} />
                        <div className="container">
                            {sessionsBySpeaker(id)
                                .slice(0, 3)
                                .map((session) => {
                                    return (
                                        <div className="row" key={session.id}>
                                            &nbsp;&nbsp;{session.title}{' '}
                                            &nbsp;&nbsp;&nbsp;Year:
                                            {session.eventYear}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SpeakerList;
