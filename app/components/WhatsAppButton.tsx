import React from 'react';
import { MessageCircle } from 'lucide-react'; // Optional: Use an icon library

const WhatsAppButton = () => {
  const phoneNumber = "7397460813"; // Replace with your phone number (include country code, no +)
const message = "Hi! I'm interested in a quote. [Auto-Reply Trigger]";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50px',
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
        zIndex: 1000,
        fontWeight: 'bold',
        textDecoration: 'none'
      }}
    >
      <MessageCircle size={24} />
      {/* <span>Chat with us</span> */}
    </a>
  );
};

export default WhatsAppButton;