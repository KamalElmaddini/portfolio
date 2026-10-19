import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import './Contact.css';
import { shared } from '../data/content';
import { useLang } from '../i18n';

const Contact = () => {
    const { t } = useLang();
    const c = t.contact;

    const items = [
        { key: 'phone', Icon: Phone, label: c.phone, value: shared.phone, href: shared.socials.whatsapp, external: true },
        { key: 'email', Icon: Mail, label: c.email, value: shared.email, href: `mailto:${shared.email}` },
        { key: 'location', Icon: MapPin, label: c.location, value: c.locationValue, href: shared.mapsUrl, external: true },
    ];

    // Opens the visitor's email app with the message pre-filled.
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
        const url = `mailto:${shared.email}?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">{c.title}</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>{c.heading}</h3>
                        <p>{c.text}</p>

                        <div className="contact-details">
                            {items.map((item) => {
                                const { key, label, value, href, external } = item;
                                const ItemIcon = item.Icon;
                                return (
                                <a
                                    key={key}
                                    className="contact-item"
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    <span className="icon-box">
                                        <ItemIcon size={20} />
                                    </span>
                                    <span className="contact-text">
                                        <span className="contact-label">{label}</span>
                                        <span className="contact-value">{value}</span>
                                    </span>
                                    <ArrowUpRight className="contact-arrow" size={18} />
                                </a>
                                );
                            })}
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input id="contact-name" type="text" name="name" placeholder={c.form.name} aria-label={c.form.name} required />
                        </div>
                        <div className="form-group">
                            <input id="contact-email" type="email" name="email" placeholder={c.form.email} aria-label={c.form.email} required />
                        </div>
                        <div className="form-group">
                            <input id="contact-subject" type="text" name="subject" placeholder={c.form.subject} aria-label={c.form.subject} required />
                        </div>
                        <div className="form-group">
                            <textarea id="contact-message" name="message" placeholder={c.form.message} aria-label={c.form.message} rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn">
                            {c.form.send} <Send size={16} style={{ marginLeft: '8px' }} />
                        </button>
                        <p className="form-note">{c.form.note}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
