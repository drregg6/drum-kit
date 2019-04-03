import React, { Component } from 'react';
import DrumPad from './DrumPad';

class DrumKit extends Component {
    render() {
        let {sounds} = this.props;
        let soundList = sounds.map(sound => {
            return <DrumPad
                key={sound.key}
                sound={sound}
                addRedBG={this.props.addRedBG}
                removeRedBG={this.props.removeRedBG}
            />
        });
        return (
            <div className="container" id="drum-machine">
                {soundList}
            </div>
        )
    }
}

export default DrumKit;