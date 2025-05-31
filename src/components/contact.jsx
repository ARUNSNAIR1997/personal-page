import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nruiept', 'template_9qjaz8w', form.current, {
        publicKey: 'Gf7AtYWQGMK7SDFkd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Successfully Submitted")
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        <>
        <section id="contact" className="contact section">
        <div className="container section-title">
            <h2>Contact</h2>
        </div>
        <div className="container">
        <div className="row gy-4">
            <div className="col-lg-5">
                <div className="info-wrap">
                    <div className="info-item d-flex">
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                        <h3>Address</h3>
                        <p>Kamala Vilas, Thelliyoor P O<br/>Vennikulam, Pathanamthitta<br/>Kerala</p>
                    </div>
                    </div>

                    <div className="info-item d-flex">
                    <i class="bi bi-telephone flex-shrink-0"></i>
                    <div>
                        <h3>Call Us</h3>
                        <p>+91 7907724394</p>
                    </div>
                    </div>

                    <div className="info-item d-flex">
                    <i class="bi bi-telephone flex-shrink-0"></i>
                    <div>
                        <h3>Email Us</h3>
                        <p>arunsnair0926@gmail.com</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7">
            <form action="" className="email-form" ref={form} onSubmit={sendEmail}>
                <div className="row gy-4">
                    <div className="col-md-6">
                        <label htmlFor="" className="pb-2">Your Name</label>
                        <input type="text" name="name" id="" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="pb-2">Your Email</label>
                        <input type="email" name="email" id="" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="" className="pb-2">Subject</label>
                        <input type="text" name="subject" id="" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="" className="pb-2">Message</label>
                        <textarea name="message" id="" className="form-control"></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                        {/* <button type="submit">Send Message</button> */}
                        <input type="submit" value="Send Message" className="sendmsg"/>
                    </div>
                </div>
            </form>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default Contact