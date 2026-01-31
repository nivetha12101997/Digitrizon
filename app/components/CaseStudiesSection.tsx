export default function CaseStudiesSection() {
    return(
                <div className="case-studies-content">
          <h2 className="section-title-center">Success Stories</h2>
          <div className="case-grid">
            <div className="case-card">
              <h3 className="case-title">Enterprise Migration Project</h3>
              <p className="case-text">A Fortune 500 company successfully migrated their legacy systems to cloud infrastructure, reducing operational costs by 40% and improving system uptime to 99.99%.</p>
              <p className="case-results">Results: $2.3M annual savings</p>
            </div>
            <div className="case-card">
              <h3 className="case-title">Data-Driven Transformation</h3>
              <p className="case-text">Implemented advanced analytics platform enabling real-time business intelligence and predictive modeling, leading to improved decision-making and strategic planning.</p>
              <p className="case-results">Results: 25% increase in operational efficiency</p>
            </div>
          </div>
        </div>

    )
}