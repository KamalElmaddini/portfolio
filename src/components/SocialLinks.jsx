import React from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook, MessageCircle, Youtube, Twitter } from 'lucide-react';
import { shared } from '../data/content';

const links = [
    { key: 'github', label: 'GitHub', Icon: Github },
    { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
    { key: 'youtube', label: 'YouTube', Icon: Youtube },
    { key: 'instagram', label: 'Instagram', Icon: Instagram },
    { key: 'facebook', label: 'Facebook', Icon: Facebook },
    { key: 'x', label: 'X', Icon: Twitter },
    { key: 'whatsapp', label: 'WhatsApp', Icon: MessageCircle },
];

const SocialLinks = () => (
    <div className="footer-social">
        {links.map((link) => {
            const Icon = link.Icon;
            return (
                <a key={link.key} href={shared.socials[link.key]} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label}>
                    <Icon size={20} />
                </a>
            );
        })}
        <a href={`mailto:${shared.email}`} aria-label="Email" title="Email"><Mail size={20} /></a>
    </div>
);

export default SocialLinks;
