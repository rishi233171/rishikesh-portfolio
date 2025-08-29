import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="portfolio-container">
          <h1 className="name-title">Rishikesh Mohapatra</h1>
          <h2 className="job-title">Lead Supply Chain Data Analyst</h2>
          <p className="tagline">15+ Years of Data Analytics Excellence</p>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="metric-card">
              <h3>$5M+</h3>
              <p>Cost Savings</p>
            </div>
            <div className="metric-card">
              <h3>99.9%</h3>
              <p>Accuracy Rate</p>
            </div>
            <div className="metric-card">
              <h3>500+</h3>
              <p>Projects</p>
            </div>
          </div>

          <div className="contact-section">
            <h3>Contact Information</h3>
            <p>📧 rishi233171@gmail.com</p>
            <p>📱 +91-7483532369</p>
            <p>📍 Bhubaneswar, Odisha</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
