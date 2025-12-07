import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm currently available for freelance work or full-time opportunities.
                            If you have a project that needs some creative touch, feel free to contact me.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+212 638 964 606</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:kamalelmaddini@gmail.com">kamalelmaddini@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Rabat, Morocco</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" action="mailto:kamalelmaddini@gmail.com" method="POST" encType="text/plain">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn">
                            Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
