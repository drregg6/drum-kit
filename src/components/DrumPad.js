import React, { Component } from 'react';
import Audio from './Audio';

class DrumPad extends Component {
    handleClick = (ev) => {
        console.log(this.props.sound.audio);
        this.props.sound.audio.play();
    }

    render() {
        let {sound} = this.props;
        return (
            <div className="drum-pad" id={sound.key.toUpperCase()} onClick={this.handleClick}>
                <Audio url={sound.url} />
                {sound.key.toUpperCase()}
            </div>
        )
    }
}

export default DrumPad;