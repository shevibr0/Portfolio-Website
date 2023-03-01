import React from 'react'
import "./massage.css"
import { AiOutlineMail } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";

const Massage = () => {
  return (
    <div className="massage__container">
          <div className='contact__options'>
            <article className='contact__option'>
            <AiOutlineMail/>
              <h4>Email</h4>
              <h5>shevibr0@gmail.com</h5>
              <a href="mailto:shevibr0@gmail.com" target="_blank">Send a massage</a>
            </article>

            <article className='contact__option'>
            <AiFillLinkedin/>
              <h4>linkedin</h4>
              <h5>My linkedin</h5>
              <a href="https://www.linkedin.com/in/elisheva-einhoren-43b1b3220/" target="_blank">Send a massage</a>
            </article>

            <article className='contact__option'>
            <AiOutlineWhatsApp />
              <h4>WhatsApp</h4>
              <h5>0584137029</h5>
              <a href="https:web.whatsapp.com/send?phone=+0584137029" target="_blank">Send a massage</a>
            </article>
          </div>
        </div>
          
  )
}

export default Massage