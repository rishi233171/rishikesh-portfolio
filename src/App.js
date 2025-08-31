import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DashboardPortfolio />
    </div>
  );
}

// Complete dashboard component with ALL content
function DashboardPortfolio() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [loading, setLoading] = React.useState(true);

  // Complete mock data
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

  const experiences = [
    {
      id: 1,
      title: "Lead Supply Chain Data Analyst",
      company: "SGB Brandsafway Pvt Ltd",
      period: "July 2023 – Present",
      achievements: [
        "Conduct comprehensive PO/AP spend analysis and compliance tracking across multiple vendors and regions",
        "Developed Power BI dashboards for savings tracking and travel expense reporting, improving visibility by 40%",
        "Analyze vendor performance metrics and implement data-driven vendor management strategies",
        "Developed low-code apps using Power Apps for internal use cases including attendance tracking and QC audit processes",
        "Integrated Power Apps with SharePoint & Power BI for seamless data flow and real-time analytics"
      ]
    },
    {
      id: 2,
      title: "Senior Data Analyst",
      company: "Larsen & Toubro Infotech",
      period: "June 2021 – June 2023",
      achievements: [
        "Led end-to-end data analysis projects for Fortune 500 clients using SQL, Python, and Power BI",
        "Automated reporting processes reducing manual effort by 60% and improving accuracy by 25%",
        "Developed predictive models for demand forecasting achieving 92% accuracy rate",
        "Collaborated with cross-functional teams to deliver actionable insights for business optimization"
      ]
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Wipro Technologies",
      period: "August 2018 – May 2021",
      achievements: [
        "Performed data mining and statistical analysis on large datasets using SQL and Python",
        "Created interactive dashboards and reports for stakeholder decision-making",
        "Implemented data quality frameworks improving data accuracy by 30%",
        "Supported business intelligence initiatives across multiple client projects"
      ]
    },
    {
      id: 4,
      title: "Business Analyst",
      company: "Infosys Limited",
      period: "September 2015 – July 2018",
      achievements: [
        "Analyzed business requirements and translated them into technical specifications",
        "Developed process improvement recommendations saving $2M+ annually",
        "Created comprehensive documentation and training materials for end users",
        "Facilitated stakeholder meetings and requirements gathering sessions"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Supply Chain Optimization Dashboard",
      description: "Comprehensive Power BI dashboard for real-time supply chain visibility and performance tracking.",
      impact: "Reduced procurement costs by 15% and improved supplier performance visibility by 50%",
      technology: ["Power BI", "SQL", "DAX", "Power Query"]
    },
    {
      id: 2,
      title: "Automated Financial Reporting System",
      description: "End-to-end automation of monthly financial reports using Python and Power Apps.",
      impact: "Eliminated 40+ hours of manual work monthly and improved accuracy by 98%",
      technology: ["Python", "Power Apps", "SharePoint", "Power Automate"]
    },
    {
      id: 3,
      title: "Vendor Performance Analytics",
      description: "Data-driven vendor evaluation system with predictive scoring and risk assessment.",
      impact: "Improved vendor selection process and reduced procurement risks by 25%",
      technology: ["SQL", "Python", "Tableau", "Statistical Analysis"]
    },
    {
      id: 4,
      title: "Cost Savings Tracking Platform",
      description: "Integrated platform for tracking and validating cost savings across all business units.",
      impact: "Validated $5M+ in cost savings and improved reporting accuracy to 99.9%",
      technology: ["Power BI", "Excel VBA", "SQL Server", "SharePoint"]
    }
  ];

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
      {/* Sidebar */}
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
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h1 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#111827',
                margin: '0 0 8px 0'
              }}>Analytics Dashboard</h1>
              <p style={{
                color: '#6b7280',
                fontSize: '18px',
                margin: 0
              }}>Professional performance metrics and insights</p>
            </div>

            {/* Key Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}>
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
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '8px'
                  }}>{metric.value}</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Skills Analytics</h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>Technical expertise and proficiency levels</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '24px' }}>
              {[
                { name: 'Power BI', level: 95, color: '#4f46e5' },
                { name: 'SQL', level: 90, color: '#7c3aed' },
                { name: 'Python', level: 85, color: '#06b6d4' },
                { name: 'Tableau', level: 92, color: '#10b981' },
                { name: 'Excel/VBA', level: 98, color: '#f59e0b' },
                { name: 'SAP', level: 88, color: '#ef4444' }
              ].map((skill, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>{skill.name}</h3>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      backgroundColor: skill.color,
                      transition: 'width 0.5s ease'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Tab - NOW WITH FULL CONTENT */}
        {activeTab === 'experience' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Professional Experience</h1>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>15+ years career progression and key achievements</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experiences.map((exp) => (
                <div key={exp.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: '#4f46e5', fontWeight: '600', margin: 0 }}>{exp.company}</p>
                    </div>
                    <span style={{
                      backgroundColor: '#e0e7ff',
                      color: '#4338ca',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>{exp.period}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '8px',
                        color: '#374151'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: '#4f46e5',
                          borderRadius: '50%',
                          marginTop: '8px',
                          flexShrink: 0
                        }}></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Tab - NOW WITH FULL CONTENT */}
        {activeTab === 'projects' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Key Projects</h1>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>Major initiatives and their business impact</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {projects.map((project) => (
                <div key={project.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  borderLeft: '4px solid #4f46e5',
                  padding: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '20px' }}>💻</span>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                        {project.title}
                      </h3>
                    </div>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>{project.description}</p>
                  </div>

                  <div style={{
                    background: 'linear-gradient(to right, #dcfce7, #bbf7d0)',
                    borderLeft: '4px solid #10b981',
                    borderRadius: '8px',
                    padding: '12px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '16px' }}>📈</span>
                      <span style={{ fontWeight: '600', color: '#065f46', fontSize: '14px' }}>Impact & Results</span>
                    </div>
                    <p style={{ color: '#047857', fontWeight: '500', margin: 0, fontSize: '14px' }}>{project.impact}</p>
                  </div>

                  <div>
                    <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>
                      Technologies Used
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.technology.map((tech, index) => (
                        <span key={index} style={{
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500',
                          border: '1px solid #bfdbfe'
                        }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Get In Touch</h1>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>Let's discuss data analytics opportunities</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
              {/* Contact Info */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>Contact Information</h3>
                
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

                <div style={{
                  marginTop: '32px',
                  paddingTop: '24px',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '14px' }}>
                    I'm passionate about transforming complex data into actionable business insights. 
                    Let's discuss how data analytics can drive your organization's success.
                  </p>
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'transparent',
                    border: '2px solid #4f46e5',
                    borderRadius: '8px',
                    color: '#4f46e5',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>
                    📥 Download Resume
                  </button>
                </div>
              </div>

              {/* Message Form Placeholder */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>Send Message</h3>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>Ready to discuss your next data analytics project?</p>
                
                <button style={{
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
