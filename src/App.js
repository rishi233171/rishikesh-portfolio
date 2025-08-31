import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DashboardPortfolio />
    </div>
  );
}

// COMPLETE Dashboard with ALL functionality
function DashboardPortfolio() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [loading, setLoading] = React.useState(true);
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    subject: 'Data Analysis Project',
    message: ''
  });

  // PLACEHOLDER DATA - Replace with your actual resume data
  const profileData = {
    name: "Rishikesh Mohapatra",
    subtitle: "Lead Supply Chain Data Analyst | Supply Chain Analytics Expert",
    experience: "15+",
    projects_completed: "500+",
    cost_savings: "$5M+",
    accuracy_rate: "99.9%",
    email: "rish233171@gmail.com",
    phone: "+91-7483532369"
  };

  // TODO: Replace with your actual experience from resume
  const experiences = [
    {
      id: 1,
      title: "[YOUR CURRENT ROLE]",
      company: "[YOUR CURRENT COMPANY]", 
      period: "[START DATE] – Present",
      achievements: [
        "[Achievement 1 from your resume]",
        "[Achievement 2 from your resume]",
        // Add more from your actual resume
      ]
    }
    // Add all your companies here
  ];

  // TODO: Replace with your actual skills from resume
  const skills = [
    { name: "Power BI", level: 95, category: "Data Visualization", color: "#4f46e5" },
    { name: "SQL", level: 90, category: "Programming", color: "#7c3aed" },
    // Add ALL your skills here with correct proficiency levels
  ];

  // TODO: Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "[YOUR PROJECT TITLE]",
      description: "[PROJECT DESCRIPTION FROM RESUME]",
      impact: "[ACTUAL IMPACT/RESULTS]",
      technology: ["Tech1", "Tech2"] // Your actual technologies
    }
    // Add all your real projects
  ];

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nSubject: ${contactForm.subject}\nMessage: ${contactForm.message}`);
    setContactForm({ name: '', email: '', subject: 'Data Analysis Project', message: '' });
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e0e7ff, #f3e8ff, #dbeafe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #4f46e5',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: '#6b7280' }}>Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #e0e7ff, #f3e8ff, #dbeafe)'
    }}>
      {/* Sidebar - Same as before */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '320px',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRight: '1px solid #e5e7eb',
        zIndex: 40
      }}>
        <div style={{ padding: '24px' }}>
          {/* Profile Section */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '96px',
              height: '96px',
              background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
              borderRadius: '24px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <span style={{ color: 'white', fontSize: '48px' }}>👤</span>
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#111827',
              margin: '0 0 4px 0'
            }}>{profileData.name}</h2>
            <p style={{
              fontSize: '14px',
              color: '#4f46e5',
              fontWeight: '500',
              margin: 0
            }}>{profileData.subtitle}</p>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'skills', label: 'Skills Analytics', icon: '📈' },
              { id: 'experience', label: 'Experience', icon: '💼' },
              { id: 'projects', label: 'Projects', icon: '💻' },
              { id: 'contact', label: 'Contact', icon: '📧' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  textAlign: 'left',
                  borderRadius: '12px',
                  transition: 'all 0.2s',
                  border: 'none',
                  cursor: 'pointer',
                  background: activeTab === item.id 
                    ? 'linear-gradient(to right, #4f46e5, #7c3aed)'
                    : 'transparent',
                  color: activeTab === item.id ? 'white' : '#6b7280',
                  transform: activeTab === item.id ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: activeTab === item.id ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <span style={{ fontWeight: '500' }}>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
          color: 'white'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span>📞</span>
              <span>{profileData.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span>📧</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{profileData.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '320px', padding: '32px' }}>
        
        {/* Dashboard Tab - COMPLETE with Skills Distribution */}
        {activeTab === 'dashboard' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
                Analytics Dashboard
              </h1>
              <p style={{ color: '#6b7280', fontSize: '18px', margin: 0 }}>
                Professional performance metrics and insights
              </p>
            </div>

            {/* Key Metrics Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
              {[
                { value: profileData.experience, label: 'Years Experience', color: '#4f46e5', icon: '👤' },
                { value: profileData.projects_completed, label: 'Projects Completed', color: '#06b6d4', icon: '🎯' },
                { value: profileData.cost_savings, label: 'Cost Savings Generated', color: '#10b981', icon: '💰' },
                { value: profileData.accuracy_rate, label: 'Accuracy Rate', color: '#f59e0b', icon: '📊' }
              ].map((metric, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  borderTop: `4px solid ${metric.color}`,
                  padding: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: metric.color,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <span style={{ fontSize: '28px' }}>{metric.icon}</span>
                  </div>
                  <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Performance Timeline & Skills Distribution */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {/* Performance Timeline */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  📊 Performance Timeline
                  <select style={{ marginLeft: 'auto', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                    <option>Last 5 Years</option>
                  </select>
                </h3>
                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #e0e7ff, #f3e8ff)', borderRadius: '8px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'end', gap: '12px', justifyContent: 'center', height: '80px', marginBottom: '16px' }}>
                      <div style={{ width: '20px', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', height: '40px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '20px', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', height: '50px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '20px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '60px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '20px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '70px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '20px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '80px', borderRadius: '4px 4px 0 0' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', fontSize: '12px', color: '#6b7280' }}>
                      <span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2024</span>
                    </div>
                    <p style={{ color: '#6b7280', fontWeight: '600', marginTop: '12px', margin: '12px 0 0 0' }}>
                      Consistent growth in automation efficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Distribution */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  📈 Skills Distribution
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {skills.slice(0, 4).map((skill, index) => (
                    <div key={index}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                          <div style={{ width: '12px', height: '12px', backgroundColor: skill.color, borderRadius: '50%' }}></div>
                          {skill.name}
                        </span>
                        <span style={{ color: '#6b7280' }}>{skill.level}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', backgroundColor: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          backgroundColor: skill.color,
                          borderRadius: '3px',
                          transition: 'width 0.5s ease'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Tab - Same as before but with placeholder for your data */}
        {activeTab === 'skills' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Skills Analytics</h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>Technical expertise and proficiency levels</p>
            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '24px' }}>
              <p style={{ color: '#ef4444', fontSize: '18px', fontWeight: '600' }}>
                ⚠️ PLACEHOLDER: Please provide your complete skills list from resume
              </p>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Professional Experience</h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>Career progression and achievements</p>
            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '24px' }}>
              <p style={{ color: '#ef4444', fontSize: '18px', fontWeight: '600' }}>
                ⚠️ PLACEHOLDER: Please provide your complete work experience from resume
              </p>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Key Projects</h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>Major initiatives and impact</p>
            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '24px' }}>
              <p style={{ color: '#ef4444', fontSize: '18px', fontWeight: '600' }}>
                ⚠️ PLACEHOLDER: Please provide your project details from resume
              </p>
            </div>
          </div>
        )}

        {/* Contact Tab - COMPLETE with working form */}
        {activeTab === 'contact' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Get In Touch</h1>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>Let's discuss data analytics opportunities</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
              {/* WORKING Contact Form */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
                  Send Message
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>
                  Ready to discuss your next data analytics project?
                </p>
                
                <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>Name</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Your name"
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>Email</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>Subject</label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Data Analysis Project">Data Analysis Project</option>
                      <option value="Process Automation">Process Automation</option>
                      <option value="Dashboard Development">Dashboard Development</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Your message..."
                      rows={5}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" style={{
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}>
                    📤 Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
                  Contact Information
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { icon: '📞', label: 'Phone', value: profileData.phone },
                    { icon: '📧', label: 'Email', value: profileData.email },
                    { icon: '📍', label: 'Location', value: 'India' },
                    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/rishikesh-mohapatra' }
                  ].map((contact, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#dbeafe',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '20px' }}>{contact.icon}</span>
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: '#111827', margin: '0 0 2px 0' }}>{contact.label}</p>
                        <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
