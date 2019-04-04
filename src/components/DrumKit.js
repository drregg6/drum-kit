import React, { Component } from 'react';
import DrumPad from './DrumPad';
import { connect } from 'react-redux';

class DrumKit extends Component {
    render() {
        let {sounds, addRedBG, removeRedBG, setDisplay} = this.props;
        let soundList = sounds.map(sound => {
            return <DrumPad
                key={sound.key}
                sound={sound}
                addRedBG={addRedBG}
                removeRedBG={removeRedBG}
                setDisplay={setDisplay}
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

export default connect(mapStateToProps)(DrumKit);