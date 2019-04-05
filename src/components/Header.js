import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { alterDisplay } from '../actions/displayActions';

class Header extends Component {
    handleMouseDown = (ev) => {
        console.log()
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

export default connect(mapStateToProps, { alterDisplay })(Header);