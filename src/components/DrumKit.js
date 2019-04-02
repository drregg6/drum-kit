import React, { Component } from 'react';
import DrumPad from './DrumPad';
import boom from '../audio/boom.wav';

class DrumKit extends Component {
    handleHover = (ev) => {
        console.log(this);
    }

    render() {
        let {sounds} = this.props;
        let soundList = sounds.map(sound => {
            return <DrumPad key={sound.key} sound={sound}/>
        });
        return (
            <div className="container" id="drum-machine">
                {soundList}
            </div>
        )
    }
}

export default DrumKit;