import React from 'react';

export default function DrumPad({sound}) {
    const handleClick = (ev) => {
        console.log(sound);
        sound.audio.play();
    }

    return (
        <div className="drum-pad" id={sound.key.toUpperCase()} onClick={handleClick}>
            <audio url={sound.audio}></audio>
            {sound.key.toUpperCase()}
        </div>
    )
}