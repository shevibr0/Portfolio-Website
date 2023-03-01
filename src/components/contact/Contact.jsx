import React from 'react'
import "./contact.css"
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form=useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rnvzfp', 'template_lfrvfn4', form.current, '6no79izXNNDe1YECd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (


    <section className="contact container section" id='contact'>
   <h2 className='section__title'>Get in Touch</h2>
      <div className="contact__container grid">
        <div className="contact___info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact-_details">Send me an email.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact___form-div">
              <input type="name" name="name"className="contact__form-input"
              placeholder='insert your name' required/>
            </div>

            <div className="contact___form-div">
              <input type="email" name="email" className="contact__form-input"
              placeholder='insert your email' required/>
            </div>
            </div>

            <div className="contact___form-div">
              <input type="subject" name="subject"className="contact__form-input"
              placeholder='insert your subject' required/>
            </div>

            <div className="contact___form-div">
             <textarea name='massage' id='' cols='30' rows='10' className='contact__form-input contact form-area' 
             placeholder='Write your massage' required></textarea>
            </div>
<button type="submit"className='btn'>Send massage</button>

        </form>
      </div>

      
        
    </section>
  )
}

export default Contact