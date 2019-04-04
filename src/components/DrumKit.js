import React, { Component } from 'react';
import DrumPad from './DrumPad';
// redux
import { connect } from 'react-redux';
import { playAudio } from '../actions/audioActions';

class DrumKit extends Component {
    // handleClick = (ev) => {
    //     this.props.playAudio();
    // }

    render() {
        let {sounds, addRedBG, removeRedBG, setDisplay} = this.props;
        let soundList = sounds.map(sound => {
            return <DrumPad
                key={sound.key}
                sound={sound}
                addRedBG={addRedBG}
                removeRedBG={removeRedBG}
                setDisplay={setDisplay}
                playAudio={this.props.playAudio}
            />
        });
        return (
            <div className="container" id="drum-machine">
                {soundList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sounds: state.audio.sounds
    }
}

export default connect(mapStateToProps, { playAudio })(DrumKit);