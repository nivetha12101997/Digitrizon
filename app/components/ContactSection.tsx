import './CTASection.css';
export default
function ContactSection() {
    return (
                <div className="contact-content">
          <h2 className="contact-title">Ready to Transform Your Business?</h2>
          <p className="contact-text">Get in touch with our team today to discuss your digital transformation journey and discover how we can help you achieve your business goals.</p>
          <div className="contact-buttons">
            <button className="contact-button contact-button-primary">Schedule a Demo</button>
            <button className="contact-button contact-button-secondary">Contact Us</button>
          </div>
          {/* <div className="contact-footer">
            <p>Email: <a href="mailto:info@company.com" className="contact-link">info@company.com</a> | Phone: <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a></p>
          </div> */}
        </div>
    )
}