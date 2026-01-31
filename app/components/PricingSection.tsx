export default function PricingSection() {
    return (
               <div className="pricing-content">
          <h2 className="section-title-center">Flexible Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-name">Starter</h3>
              <p className="pricing-price">$999<span className="pricing-price-suffix">/mo</span></p>
              <ul className="pricing-features">
                <li>✓ Up to 5 users</li>
                <li>✓ 100 GB storage</li>
                <li>✓ Email support</li>
                <li>✓ Basic analytics</li>
              </ul>
              <button className="pricing-button pricing-button-basic">Choose Plan</button>
            </div>
            <div className="pricing-card pricing-card-featured">
              <h3 className="pricing-name">Professional</h3>
              <p className="pricing-price">$2,999<span className="pricing-price-suffix">/mo</span></p>
              <ul className="pricing-features">
                <li>✓ Up to 25 users</li>
                <li>✓ 1 TB storage</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
              </ul>
              <button className="pricing-button pricing-button-featured">Choose Plan</button>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-name">Enterprise</h3>
              <p className="pricing-price">Custom</p>
              <ul className="pricing-features">
                <li>✓ Unlimited users</li>
                <li>✓ Unlimited storage</li>
                <li>✓ 24/7 support</li>
                <li>✓ Custom integrations</li>
              </ul>
              <button className="pricing-button pricing-button-basic">Contact Sales</button>
            </div>
          </div>
        </div>
    )
}