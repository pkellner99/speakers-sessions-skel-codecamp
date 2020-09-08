import React from 'react';
import SpeakerList from './SpeakerList';
import SpeakersToolbar from './SpeakersToolbar';

const Speakers = () => {

    return (
        <>
            <div className="container mt-2 mb-3">
                <h1>Speakers List</h1>
            </div>
            <SpeakersToolbar
            />
            <SpeakerList />
            <br />
            <br />
        </>
    );
};

export default Speakers;
