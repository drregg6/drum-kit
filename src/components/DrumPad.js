import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDisplay } from '../actions/displayActions';

class DrumPad extends Component {
    constructor(props) {
        super(props);
    }

    handleMouseDown = (ev) => {
        this.props.changeDisplay(this.props.sound.display);

        if (!this.props.sound.audio) return;
        this.props.sound.audio.currentTime = 0;
        this.props.sound.audio.play();

        this.props.changeDisplay(this.props.sound.display);
        this.props.addRedBG(this.props.sound);

        this.props.playAudio(this.props.sound.key);
    }

    handleMouseUp = (ev) => {
        this.props.changeDisplay();
        this.props.removeRedBG();
        this.props.changeDisplay();
    }

    render() {
        const { sound, addRedBG, removeRedBG, playAudio } = this.props;
        return (
            <div className="drum-pad" id={sound.key.toUpperCase()} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
                <audio url={sound.audio}></audio>
                {sound.key.toUpperCase()}
            </div>
        )
    }
}

export default connect(null, { changeDisplay })(DrumPad);