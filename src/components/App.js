//=================
// App Components
//=================
import React from 'react';


// Custom Components
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
