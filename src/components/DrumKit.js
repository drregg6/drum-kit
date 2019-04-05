import React, { Component } from 'react';
import DrumPad from './DrumPad';
// redux
import { connect } from 'react-redux';
import { changeDisplay } from '../actions/displayActions';

class DrumKit extends Component {
    addRedBG = (obj) => {
        let node = document.querySelector(`#${obj.key}`);
        node.classList.add('play-background');
    }

    removeRedBG = () => {
        let nodes = document.querySelectorAll('.drum-pad');

        // remove the red background
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].classList.contains('play-background')) {
                nodes[i].classList.remove('play-background');
            }
        }
    }

    findAudio = (key) => {
        key = key.toUpperCase();
        for (let i = 0; i < this.props.sounds.length; i++) {
            if (this.props.sounds[i].key === key) {
                return this.props.sounds[i];
            }
        }
        return null;
    }

    handleKeyDown = (ev) => {
        let sound = (this.findAudio(ev.key) === null) ? ev.key : this.findAudio(ev.key);
        this.props.changeDisplay(sound.display);

        if (!sound.audio) return;
        sound.audio.currentTime = 0;
        sound.audio.play();

        this.addRedBG(sound);
    }
    handleKeyUp = (ev) => {
        this.props.changeDisplay();
        this.removeRedBG();
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        let { sounds } = this.props;
        let soundList = sounds.map(sound => {
            return <DrumPad
                key={sound.key}
                sound={sound}
                addRedBG={this.addRedBG}
                removeRedBG={this.removeRedBG}
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

export default connect(mapStateToProps, { changeDisplay })(DrumKit);