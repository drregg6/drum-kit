import React, { Component } from 'react';

class DrumPad extends Component {
    handleClick = (ev) => {
        this.props.sound.audio.play();
    }

    render() {
        let {sound} = this.props;
        return (
            <div className="drum-pad" id={sound.key.toUpperCase()} onClick={this.handleClick}>
                <audio url={sound.audio}></audio>
                {sound.key.toUpperCase()}
            </div>
        )
    }
}

export default DrumPad;