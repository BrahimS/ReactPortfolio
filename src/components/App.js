/* =================
 App Components
================= */

// @flow
import React from 'react';
import Header from './modules/Header';


class App extends React.Component {
  render() {
    return (
        <section className="grid container">
          <Header />
          { this.props.children }
        </section>
    );
  }
}

export default App;
