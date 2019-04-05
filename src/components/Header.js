import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { changeDisplay } from '../actions/displayActions';

class Header extends Component {
    handleMouseDown = (ev) => {
        changeDisplay('Dave Regg')
    }

    render() {
        return (
          <div className="display">
            <h1 onMouseDown={this.handleMouseDown}>{this.props.display}</h1>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        display: state.display.display
    }
}

export default connect(mapStateToProps, { changeDisplay })(Header);