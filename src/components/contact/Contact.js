//=================
// Contact Component
//=================
//@flow
import React from 'react';


// Custom Copmonents
import ContactForm from '../modules/ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div className="wrapper slide_up">
        <section className="grid container">
          <section className="grid_col__12 content_margin mainBrahim">
              <ContactForm />
          </section>
        </section>
      </div>
    );
  }
}

export default Contact;
