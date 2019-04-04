import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
          <div className="display">
            <h1>{this.props.display}</h1>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        display: state.display.display
    }
}

export default connect(mapStateToProps)(Header);