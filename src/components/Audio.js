import React, { Component } from 'react';

class Audio extends Component {
    render() {
        let {url} = this.props;
        const audioFile = `../audio/${url}.wav`;
        console.log(url);
        return (
            <React.Fragment>
                <audio url={audioFile}></audio>
            </React.Fragment>
        )
    }
}

export default Audio;