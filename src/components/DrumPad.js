import React from 'react';

export default function DrumPad({sound, addRedBG, removeRedBG}) {
    const handleMouseDown = (ev) => {
        // reset audio and play from the beginning
        if (!sound.audio) return;
        sound.audio.currentTime = 0;
        sound.audio.play();

        // add background
        addRedBG(sound);
    }
    const handleMouseUp = (ev) => {
        console.log('MOUSEUP');
        removeRedBG();
    }

    return (
        <div className="drum-pad" id={sound.key.toUpperCase()} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <audio url={sound.audio}></audio>
            {sound.key.toUpperCase()}
        </div>
    )
}