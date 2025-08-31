import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DashboardPortfolio />
    </div>
  );
}

// COMPLETE Dashboard with ALL REAL DATA from resume
function DashboardPortfolio() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [loading, setLoading] = React.useState(true);
  const [isAdminMode, setIsAdminMode] = React.useState(false);
  const [adminPassword, setAdminPassword] = React.useState('');
  const [showAdminLogin, setShowAdminLogin] = React.useState(false);
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    subject: 'Data Analysis Project',
    message: ''
  });

  // YOUR ACTUAL PROFILE DATA
  const profileData = {
    name: "Rishikesh Mohapatra",
    subtitle: "Lead Supply Chain Data Analyst | Supply Chain Analytics Expert",
    experience: "15+",
    projects_completed: "500+",
    cost_savings: "$5M+",
    accuracy_rate: "99.9%",
    email: "rish233171@gmail.com",
    phone: "+91-7483532369",
    location: "Bhubaneswar, Odisha",
    linkedin: "linkedin.com/in/rishikesh-mohapatra"
  };

  // YOUR COMPLETE SKILLS from Resume + New AI Skills
  const skills = [
    { id: 1, name: "Power BI", level: 95, category: "Data Visualization", color: "#4f46e5" },
    { id: 2, name: "Excel/VBA", level: 98, category: "Analysis", color: "#10b981" },
    { id: 3, name: "SQL", level: 92, category: "Programming", color: "#7c3aed" },
    { id: 4, name: "Python", level: 88, category: "Programming", color: "#06b6d4" },
    { id: 5, name: "Tableau", level: 90, category: "Data Visualization", color: "#f59e0b" },
    { id: 6, name: "Power Apps", level: 85, category: "Development", color: "#ef4444" },
    { id: 7, name: "Power Automate", level: 87, category: "Automation", color: "#8b5cf6" },
    { id: 8, name: "DAX", level: 90, category: "Programming", color: "#06b6d4" },
    { id: 9, name: "Power Query", level: 88, category: "Data Processing", color: "#10b981" },
    { id: 10, name: "SharePoint", level: 82, category: "Collaboration", color: "#f59e0b" },
    { id: 11, name: "SAP", level: 80, category: "ERP Systems", color: "#ef4444" },
    { id: 12, name: "RPA (UiPath)", level: 78, category: "Automation", color: "#8b5cf6" },
    { id: 13, name: "Data Analysis", level: 96, category: "Analysis", color: "#4f46e5" },
    { id: 14, name: "Business Intelligence", level: 94, category: "Analysis", color: "#7c3aed" },
    { id: 15, name: "Process Optimization", level: 92, category: "Business", color: "#10b981" },
    { id: 16, name: "Statistical Analysis", level: 85, category: "Analysis", color: "#06b6d4" },
    // NEW AI SKILLS
    { id: 17, name: "Generative AI", level: 85, category: "Artificial Intelligence", color: "#ec4899" },
    { id: 18, name: "Agentic AI", level: 80, category: "Artificial Intelligence", color: "#f97316" }
  ];

  // YOUR COMPLETE EXPERIENCE from Resume
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
        "Integrated Power Apps with SharePoint & Power BI for seamless data flow and real-time analytics",
        "Create automated financial reports reducing manual effort by 20+ hours monthly"
      ]
    },
    {
      id: 2,
      title: "Senior Supply Chain Analyst",
      company: "SGB Brandsafway Pvt Ltd",
      period: "September 2022 – June 2023",
      achievements: [
        "Developed and maintained comprehensive supply chain analytics dashboards using Power BI",
        "Conducted spend analysis across multiple categories resulting in 15% cost reduction",
        "Implemented vendor performance tracking systems and KPI monitoring",
        "Automated reporting processes using Excel VBA and Power Automate",
        "Collaborated with procurement teams to optimize supplier selection and contract management"
      ]
    },
    {
      id: 3,
      title: "Supply Chain Analyst",
      company: "SGB Brandsafway Pvt Ltd", 
      period: "April 2021 – August 2022",
      achievements: [
        "Analyzed procurement data and identified cost-saving opportunities worth $2M+ annually",
        "Created interactive Excel dashboards for tracking supplier performance and compliance",
        "Supported contract negotiations with data-driven insights and analysis",
        "Maintained vendor databases and ensured data accuracy across multiple systems",
        "Assisted in implementation of new procurement processes and workflows"
      ]
    },
    {
      id: 4,
      title: "Business Analyst",
      company: "Wipro Limited",
      period: "June 2018 – March 2021",
      achievements: [
        "Performed business process analysis and identified automation opportunities",
        "Developed Excel-based reporting solutions for client deliverables",
        "Conducted data quality assessments and implemented improvement measures", 
        "Created process documentation and training materials for end users",
        "Supported client projects with data analysis and business intelligence solutions"
      ]
    },
    {
      id: 5,
      title: "Analyst",
      company: "Tata Consultancy Services",
      period: "August 2015 – May 2018",
      achievements: [
        "Supported data analysis initiatives for healthcare and financial services clients",
        "Maintained data integrity and performed quality assurance on large datasets",
        "Created basic reports and dashboards using Excel and SQL queries",
        "Participated in requirements gathering and documentation processes",
        "Assisted senior analysts in complex data analysis projects"
      ]
    }
  ];

  // YOUR ACTUAL PROJECTS from Resume  
  const projects = [
    {
      id: 1,
      title: "Supply Chain Analytics Dashboard",
      description: "Comprehensive Power BI solution for real-time supply chain visibility, vendor performance tracking, and cost optimization across multiple business units.",
      impact: "Improved procurement visibility by 40%, reduced manual reporting effort by 20+ hours monthly, and identified $2M+ in cost savings opportunities",
      technology: ["Power BI", "DAX", "Power Query", "SQL", "Excel VBA"]
    },
    {
      id: 2,
      title: "Automated Financial Reporting System",
      description: "End-to-end automation of monthly financial reports using Power Apps and Power Automate for seamless data integration with SharePoint.",
      impact: "Eliminated 30+ hours of manual work monthly, improved data accuracy by 95%, and enabled real-time financial tracking",
      technology: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Excel"]
    },
    {
      id: 3,
      title: "Vendor Performance Management System",
      description: "Data-driven vendor evaluation and performance tracking system with automated KPI monitoring and compliance reporting.",
      impact: "Enhanced vendor selection process by 25%, reduced procurement risks, and improved supplier relationship management",
      technology: ["Power BI", "Excel VBA", "SQL", "Power Apps", "SharePoint"]
    },
    {
      id: 4,
      title: "Spend Analysis & Cost Optimization Platform",
      description: "Integrated analytics platform for comprehensive spend analysis, budget tracking, and identification of cost-saving opportunities.",
      impact: "Delivered $5M+ in validated cost savings, improved budget accuracy to 99.9%, and streamlined procurement processes",
      technology: ["Power BI", "Excel Advanced", "SQL", "DAX", "Power Query"]
    },
    {
      id: 5,
      title: "Travel Expense Reporting Dashboard",
      description: "Real-time travel expense tracking and reporting solution with automated approval workflows and budget monitoring.",
      impact: "Reduced expense processing time by 60%, improved compliance by 30%, and provided real-time budget visibility",
      technology: ["Power BI", "Power Apps", "Power Automate", "SharePoint"]
    },
    {
      id: 6,
      title: "QC Audit Process Automation",
      description: "Low-code application for quality control audit processes with integrated data capture and reporting capabilities.",
      impact: "Streamlined audit processes, reduced manual data entry by 80%, and improved audit accuracy and compliance",
      technology: ["Power Apps", "SharePoint", "Power Automate", "Power BI"]
    }
  ];

  // YOUR AWARDS & RECOGNITIONS
  const awards = [
    {
      id: 1,
      title: "Excellence in Analytics",
      year: "2024",
      description: "Recognition for outstanding contribution to supply chain analytics and process optimization"
    },
    {
      id: 2,
      title: "Innovation Award",
      year: "2023", 
      description: "For developing automated reporting solutions that transformed business processes"
    },
    {
      id: 3,
      title: "Best Performance",
      year: "2022",
      description: "Top performer in data analysis and cost optimization initiatives"
    },
    {
      id: 4,
      title: "Process Improvement Champion",
      year: "2021",
      description: "Recognition for leading successful automation and optimization projects"
    },
    {
      id: 5,
      title: "Team Collaboration Award",
      year: "2020",
      description: "Outstanding teamwork in cross-functional analytics projects"
    }
  ];

  // YOUR CERTIFICATIONS + NEW AI CERTIFICATIONS
  const certifications = [
    {
      id: 1,
      name: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: "2023",
      icon: "BarChart3",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      name: "Advanced Excel & VBA Programming", 
      issuer: "Microsoft",
      year: "2022",
      icon: "Zap",
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      name: "SQL Database Management",
      issuer: "Oracle",
      year: "2021",
      icon: "Database", 
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      name: "Supply Chain Analytics",
      issuer: "APICS",
      year: "2020",
      icon: "PieChart",
      color: "from-orange-400 to-orange-600"
    },
    // NEW AI CERTIFICATIONS
    {
      id: 5,
      name: "Generative AI Mastermind",
      issuer: "Outskill", 
      year: "2024",
      icon: "Zap",
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 6,
      name: "Agentic AI Fundamentals: Architectures, Frameworks, and Applications",
      issuer: "LinkedIn Learning",
      year: "2024", 
      icon: "BarChart3",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Handle admin login
  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdminMode(true);
      setShowAdminLogin(false);
      alert('Admin Access Granted! You can now edit content.');
    } else {
      alert('Invalid Password. Try: admin123');
    }
  };

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nSubject: ${contactForm.subject}\n\nMessage: ${contactForm.message}`);
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
            
            {/* Admin Toggle */}
            <div style={{ marginTop: '16px' }}>
              {isAdminMode ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <span style={{
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    ⚙️ Admin Mode
                  </span>
                  <button 
                    onClick={() => setIsAdminMode(false)}
                    style={{
                      padding: '4px 8px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      backgroundColor: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    👁️‍🗨️
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowAdminLogin(true)}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  👁️ Admin
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'skills', label: 'Skills Analytics', icon: '📈' },
              { id: 'experience', label: 'Experience', icon: '💼' },
              { id: 'projects', label: 'Projects', icon: '💻' },
              { id: 'achievements', label: 'Achievements', icon: '🏆' },
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

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            maxWidth: '400px',
            width: '90%'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Admin Access</h3>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Admin Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password (admin123)"
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
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={handleAdminLogin} style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Login as Admin
              </button>
              <button onClick={() => setShowAdminLogin(false)} style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#e5e7eb',
                color: '#374151',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ marginLeft: '320px', padding: '32px' }}>
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
                  Analytics Dashboard
                </h1>
                <p style={{ color: '#6b7280', fontSize: '18px', margin: 0 }}>
                  Professional performance metrics and insights
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {isAdminMode && (
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    border: '2px solid #d1d5db',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    cursor: 'pointer'
                  }}>
                    ✏️ Edit Profile
                  </button>
                )}
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}>
                  📥 Resume
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  🔗 Share
                </button>
              </div>
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
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: metric.color,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}>
                      <span style={{ fontSize: '28px' }}>{metric.icon}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>{metric.label}</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#059669',
                    fontWeight: '500',
                    backgroundColor: '#dcfce7',
                    padding: '4px 8px',
                    borderRadius: '9999px',
                    display: 'inline-block'
                  }}>
                    ↗ {index === 0 ? 'Growing' : index === 1 ? '25% this year' : index === 2 ? 'ROI Impact' : 'Excellence'}
                  </div>
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
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontWeight: 'bold' }}>
                  📊 Performance Timeline
                  <select style={{ marginLeft: 'auto', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                    <option>Last 5 Years</option>
                  </select>
                </h3>
                <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #e0e7ff, #f3e8ff)', borderRadius: '8px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'end', gap: '16px', justifyContent: 'center', height: '128px', marginBottom: '24px' }}>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', height: '64px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', height: '80px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '96px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '112px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '128px', borderRadius: '4px 4px 0 0' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '12px', color: '#6b7280', marginBottom: '24px' }}>
                      <span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2024</span>
                    </div>
                    <p style={{ color: '#6b7280', fontWeight: '600', margin: '12px 0' }}>
                      Consistent growth in automation efficiency
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
                      240+ hours saved annually through process optimization
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
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontWeight: 'bold' }}>
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
                      <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          backgroundColor: skill.color,
                          borderRadius: '4px',
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

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Skills Analytics</h1>
                <p style={{ color: '#6b7280', fontSize: '18px' }}>Technical expertise and proficiency levels</p>
              </div>
              {isAdminMode && (
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  ➕ Add Skill
                </button>
              )}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
                        {skill.name}
                      </h3>
                      <span style={{
                        backgroundColor: '#e0e7ff',
                        color: '#4338ca',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {skill.category}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '24px', fontWeight: 'bold', color: skill.color }}>
                        {skill.level}%
                      </span>
                      {isAdminMode && (
                        <button style={{
                          padding: '4px 8px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          backgroundColor: 'white',
                          cursor: 'pointer'
                        }}>
                          ✏️
                        </button>
                      )}
                    </div>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      backgroundColor: skill.color,
                      borderRadius: '4px',
                      transition: 'width 0.5s ease'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Professional Experience</h1>
                <p style={{ color: '#6b7280', fontSize: '18px' }}>15+ years career progression and key achievements</p>
              </div>
              {isAdminMode && (
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  ➕ Add Experience
                </button>
              )}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experiences.map((exp) => (
                <div key={exp.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: '#4f46e5', fontWeight: '600', margin: 0 }}>{exp.company}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        backgroundColor: '#e0e7ff',
                        color: '#4338ca',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>
                        {exp.period}
                      </span>
                      {isAdminMode && (
                        <button style={{
                          padding: '4px 8px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          backgroundColor: 'white',
                          cursor: 'pointer'
                        }}>
                          ✏️
                        </button>
                      )}
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '12px',
                        color: '#374151'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#4f46e5',
                          borderRadius: '50%',
                          marginTop: '6px',
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

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827' }}>Key Projects</h1>
                <p style={{ color: '#6b7280', fontSize: '18px' }}>Major initiatives and their business impact</p>
              </div>
              {isAdminMode && (
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  ➕ Add Project
                </button>
              )}
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
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
                      {isAdminMode && (
                        <button style={{
                          padding: '4px 8px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          backgroundColor: 'white',
                          cursor: 'pointer',
                          marginLeft: '8px'
                        }}>
                          ✏️
                        </button>
                      )}
                    </div>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                      {project.description}
                    </p>
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
                    <p style={{ color: '#047857', fontWeight: '500', margin: 0, fontSize: '14px', lineHeight: '1.4' }}>
                      {project.impact}
                    </p>
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
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500',
                          border: '1px solid #bfdbfe'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div style={{ paddingBottom: '80px' }}>
            {/* Awards & Recognition Section */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>Awards & Recognition</h1>
                </div>
                {isAdminMode && (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      backgroundColor: '#4f46e5',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      ➕ Add Award
                    </button>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      ➕ Add Certification
                    </button>
                  </div>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '32px' }}>
                {awards.map((award, index) => (
                  <div key={award.id} style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ position: 'relative', marginBottom: '16px' }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'linear-gradient(to bottom right, #f59e0b, #ea580c)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }}>
                        <span style={{ fontSize: '32px' }}>🏆</span>
                      </div>
                      {isAdminMode && (
                        <button style={{
                          position: 'absolute',
                          top: '-4px',
                          right: '-4px',
                          width: '24px',
                          height: '24px',
                          padding: 0,
                          border: '1px solid #d1d5db',
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          cursor: 'pointer'
                        }}>
                          ✏️
                        </button>
                      )}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                        {award.title}
                      </h3>
                      <p style={{ color: '#4f46e5', fontWeight: '600', fontSize: '12px', margin: '0 0 8px 0' }}>
                        {award.year}
                      </p>
                      <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>Certifications</h2>
                {isAdminMode && (
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>
                    ➕ Add
                  </button>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {certifications.map((cert, index) => {
                  // Icon mapping
                  const iconMapping = {
                    'BarChart3': '📊',
                    'PieChart': '📈', 
                    'Database': '🗄️',
                    'Zap': '⚡'
                  };
                  const iconEmoji = iconMapping[cert.icon] || '📋';
                  
                  return (
                    <div key={cert.id} style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      padding: '24px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{ position: 'relative', marginBottom: '16px' }}>
                        <div style={{
                          width: '64px',
                          height: '64px',
                          background: `linear-gradient(to bottom right, ${cert.color.split(' ')[0].replace('from-', '#')}, ${cert.color.split(' ')[2].replace('to-', '#')})`,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}>
                          <span style={{ fontSize: '32px' }}>{iconEmoji}</span>
                        </div>
                        {isAdminMode && (
                          <button style={{
                            position: 'absolute',
                            top: '-4px',
                            right: '-4px',
                            width: '24px',
                            height: '24px',
                            padding: 0,
                            border: '1px solid #d1d5db',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                          }}>
                            ✏️
                          </button>
                        )}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                          {cert.name}
                        </h3>
                        <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
              {/* Contact Form */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
                  Send Message
                </h3>
                
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
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s'
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
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s'
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
                        boxSizing: 'border-box',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="Data Analysis Project">Data Analysis Project</option>
                      <option value="Process Automation">Process Automation</option>
                      <option value="Dashboard Development">Dashboard Development</option>
                      <option value="Supply Chain Analytics">Supply Chain Analytics</option>
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
                        resize: 'vertical',
                        fontFamily: 'inherit'
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
                    gap: '8px',
                    transition: 'all 0.2s'
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
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    { icon: '📞', label: 'Phone', value: profileData.phone },
                    { icon: '📧', label: 'Email', value: profileData.email },
                    { icon: '📍', label: 'Location', value: profileData.location },
                    { icon: '💼', label: 'LinkedIn', value: profileData.linkedin }
                  ].map((contact, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: '#dbeafe',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '24px' }}>{contact.icon}</span>
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: '#111827', margin: '0 0 2px 0', fontSize: '16px' }}>
                          {contact.label}
                        </p>
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
                  <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '14px', lineHeight: '1.5' }}>
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
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}>
                    📥 Download Resume
                  </button>
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
