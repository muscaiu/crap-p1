import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as staticPages from './staticPages';

class Switcher extends Component {
  render() {
    const { pageName } = this.props;
    let Page = staticPages[pageName];
    return (
      <div>
        <Page />
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    pageName: state.page
  };
}

export default connect(mapStateToProps)(Switcher);