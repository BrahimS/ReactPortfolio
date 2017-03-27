//=================
// Contact Form Component
//=================
//@flow
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class ContactForm extends React.Component {
  collectFormValue(event) {
    event.preventDefault();
    const formData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      message: this.message.value,
    }
    this.contactForm.reset();

   $.ajax({
      type: 'POST',
      url: 'your email here',
      data: formData,
    })
    .done(function() {
      $('#thanks').toggleClass('disp_true__success');
    })
    .fail(function() {
      $('#thanks').toggleClass('disp_true__success');
    });
}
  render() {
    return (
      <div>
      <section className="brahim_info">
        Your Name <br />
        <span>Phone:</span> your phone <br />
        <span>twitter:</span> <Link to="https://twitter.com/SournyB" target="_blank">Your twitter</Link>
      </section>
      <div>
        <form ref={(input) => this.contactForm = input} id="contactForm" className="grid_col__12 bio formBrahim" onSubmit={(e) => this.collectFormValue(e)}>
          <input ref={(input) => this.name = input} className="form_input" htmlFor="name" id="name" placeholder="Name*"/>
          <input ref={(input) => this.email = input}  className="form_input" htmlFor="email" id="email" placeholder="email@exemple.com*" />
          <input ref={(input) => this.phone = input}  className="form_input" htmlFor="phone" id="phone" placeholder="Phone*" />
          <textarea ref={(input) => this.message = input} className="form_input" id="m" placeholder="Message...*" rows="6"></textarea>
          <input className="form_btn zoom" type="submit" value="" />
        </form>
        <div id="thanks" className="disp_none slide_up ">
          <p> Thanks, for your message</p>
        </div>
          <div id="no_message" className="disp_none slide_up ">
          <p> Please fill all the fields!</p>
        </div>
      </div>
      </div>
    );
  }
}
export default ContactForm;
