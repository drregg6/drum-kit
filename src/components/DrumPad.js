import React from 'react';

export default function DrumPad({sound}) {
    const handleClick = (ev) => {
        console.log(sound);
        if (!sound.audio) return;
        sound.audio.currentTime = 0;
        sound.audio.play();
    }

    return (
        <div className="drum-pad" id={sound.key.toUpperCase()} onClick={handleClick}>
            <audio url={sound.audio}></audio>
            {sound.key.toUpperCase()}
        </div>
    )
}