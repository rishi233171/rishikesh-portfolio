import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DashboardPortfolio />
    </div>
  );
}

// EXACT REPLICA of supply-chain-dash.preview.emergentagent.com
function DashboardPortfolio() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [loading, setLoading] = React.useState(true);
  const [isAdminMode, setIsAdminMode] = React.useState(false);
  const [adminPassword, setAdminPassword] = React.useState('');
  const [showAdminLogin, setShowAdminLogin] = React.useState(false);
  const [showProfileEdit, setShowProfileEdit] = React.useState(false);
  const [profileEditData, setProfileEditData] = React.useState({});
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    subject: 'Data Analysis Project',
    message: ''
  });

  // EXACT PROFILE DATA from original
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

  // COMPLETE SKILLS - Original + New AI Skills
  const skills = [
    { id: 1, name: "Power BI", level: 95, category: "Data Visualization", color: "bg-indigo-500" },
    { id: 2, name: "SQL", level: 90, category: "Programming", color: "bg-purple-500" },
    { id: 3, name: "Python", level: 85, category: "Programming", color: "bg-cyan-500" },
    { id: 4, name: "Tableau", level: 92, category: "Data Visualization", color: "bg-emerald-500" },
    { id: 5, name: "Excel/VBA", level: 98, category: "Analysis", color: "bg-blue-600" },
    { id: 6, name: "Power Apps", level: 88, category: "Development", color: "bg-orange-500" },
    { id: 7, name: "Data Analysis", level: 96, category: "Analysis", color: "bg-green-600" },
    { id: 8, name: "Process Automation", level: 93, category: "Automation", color: "bg-red-500" },
    { id: 9, name: "DAX", level: 87, category: "Programming", color: "bg-yellow-500" },
    { id: 10, name: "Power Query", level: 89, category: "Development", color: "bg-pink-500" },
    { id: 12, name: "Business Intelligence", level: 94, category: "Analysis", color: "bg-violet-500" },
    // NEW AI SKILLS
    { id: 13, name: "Generative AI", level: 85, category: "Artificial Intelligence", color: "bg-rose-500" },
    { id: 14, name: "Agentic AI", level: 80, category: "Artificial Intelligence", color: "bg-amber-500" }
  ];

  // EXACT EXPERIENCES from original
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
        "Create automated financial reports reducing manual effort by 20+ hours monthly",
        "Collaborate with cross-functional teams to identify cost optimization opportunities through data analysis"
      ]
    },
    {
      id: 2,
      title: "Associate Manager | Supply Chain Data Analyst",
      company: "Standard Chartered Global Business Services Pvt Ltd",
      period: "November 2022 – July 2023",
      achievements: [
        "Performed advanced vendor spend analysis and R2P (Requisition to Payment) metrics reporting.",
        "Developed end-to-end turnaround time (TAT) calculations and financial accuracy assessments.",
        "Implemented Power BI solutions for travel & expense (T&E) automation, streamlining processes.",
      ]
    },
    {
      id: 3,
      title: " Project Manager – Business Analyst",
      company: "Standard Chartered Global Business Services Pvt Ltd",
      period: "July 2020 – October 2022",
      achievements: [
        "Led RPA (Robotic Process Automation) projects to optimize accounts payable processes and reduce manual interventions",
        "Collaborated with operations and development teams to gather business requirements and define analytics solutions.",
        "Developed comprehensive business requirement documentation and process improvement strategies.",
        "Managed data migration projects and ensured data integrity across systems.",
        "Facilitated stakeholder meetings and presented analytical findings to drive business decisions."
      ]
    },
    {
      id: 4,
      title: "Operations Management – P2P",
      company: " Standard Chartered Global Business Services Pvt Ltd",
      period: "November 2011 – June 2020",
      achievements: [
        "Managed high-volume AP data processing with 99% accuracy across 20,000+ invoices monthly.",
        "Conducted reconciliation analysis for high-risk accounts and month-end SLA calculations.",
        "Spearheaded automation initiatives using data analytics to streamline financial operations.",
        "Developed and maintained MIS reports for operational efficiency tracking.",
        "Led process transformation initiatives based on data-driven insights."
      ]
    },
    {
      id: 5,
      title: "Analyst",
      company: "Tata Consultancy Services",
      period: "May 2010 – November 2011",
      achievements: [
        "Managed SWIFT payment processing and performed bulk transaction reconciliations.",
        "Prepared detailed financial reports for funding and invoicing analysis.",
        "Ensured compliance through systematic data validation and reporting procedures.",
        "Analyzed payment patterns and identified process improvement opportunities.",
      ]
    }
  ];

  // EXACT PROJECTS from original
  const projects = [
    {
    id: 1,
    title: "Process Automation Excellence",
    description: "Automated Monthly SRM Pack in Power BI across 15+ countries.",
    impact: "Eliminated 240+ manual hours annually, improved data accuracy by 95%, and reduced report generation time from 3 days to 2 hours.",
    technology: ["Power BI", "DAX", "Power Query", "Excel"]
   },
   {
    id: 2,
    title: "Data-Driven Process Improvement",
    description: "Created Advanced Allocation & TDS Macros for daily operations and monthly reconciliations.",
    impact: "Reduced processing time by 75% (from 8 hours to 2 hours daily) and eliminated 95% of manual errors.",
    technology: ["Excel VBA", "Macros", "Automation"]
   },
   {
    id: 3,
    title: "Dashboard Development",
    description: "Developed Automated Production Dashboards in Power BI for team performance monitoring.",
    impact: "Increased operational visibility by 90%, reduced manual reporting by 18 hours weekly, and enabled real-time tracking for 200+ global  stakeholders.",
    technology: ["Power BI", "SQL", "DAX", "Power Query"]
   },
   {
    id: 4,
    title: "Large-Scale Data Migration",
    description: "Led AP Process Transformation from country-based to centralized model.",
    impact: "Achieved 40% efficiency improvement and standardized operations across 11 countries with 99.5% accuracy rate.",
    technology: ["SQL", "ETL", "Process Reengineering"]
   },
   {
    id: 5,
    title: "Cost Optimization",
    description: "Implemented USD Pay Cycle Optimization for payment processing efficiency.",
    impact: "Reduced daily workload by 2 FTE (saving $25K annually), decreased payment processing time by 50%, and improved vendor satisfaction scores by 30%.",
    technology: ["Process Automation", "Excel", "Payment Systems"]
   },
   {
    id: 6,
    title: "Business Continuity Analytics",
    description: "Directed Business Continuity Planning for 8-country operations with 35+ team members.",
    impact: "Maintained 99.9% uptime, processed $500M+ transactions, achieved zero SLA breaches, and reduced operational risks by 80%.",
    technology: ["BCP Tools", "Risk Analytics", "Process Governance"]
   }
   ];

  // EXACT AWARDS from original
  const awards = [
    {
      id: 1,
      title: "Excellence in Data Analytics",
      year: "2024",
      description: "Recognized for outstanding contribution to data-driven decision making"
    },
    {
      id: 2,
      title: "Innovation Award",
      year: "2023",
      description: "For developing revolutionary supply chain optimization solutions"
    },
    {
      id: 3,
      title: "Best Performance Award",
      year: "2022",
      description: "Top performer in analytics and process improvement initiatives"
    },
    {
      id: 4,
      title: "Client Appreciation",
      year: "2021",
      description: "Received client recognition for exceptional project delivery"
    },
    {
      id: 5,
      title: "Team Leadership Award",
      year: "2020",
      description: "Outstanding leadership in cross-functional data analytics projects"
    }
  ];

  // CERTIFICATIONS - Original + New AI Certifications
  const certifications = [
    {
      id: 1,
      name: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      year: "2023",
      icon: "BarChart3",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      name: "SQL Server Database Administration",
      issuer: "Microsoft",
      year: "2022",
      icon: "Database",
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      name: "Python for Data Science",
      issuer: "IBM",
      year: "2021",
      icon: "PieChart",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      name: "Advanced Excel and VBA",
      issuer: "Microsoft",
      year: "2020",
      icon: "Zap",
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
      color: "from-rose-400 to-rose-600"
    }
  ];

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Custom Progress Component with Colors
  const ColoredProgress = ({ value, className, color }) => {
    const colorStyles = {
      'bg-indigo-500': '#6366f1',
      'bg-purple-500': '#a855f7',
      'bg-cyan-500': '#06b6d4',
      'bg-emerald-500': '#10b981',
      'bg-blue-600': '#2563eb',
      'bg-orange-500': '#f97316',
      'bg-green-600': '#16a34a',
      'bg-red-500': '#ef4444',
      'bg-yellow-500': '#eab308',
      'bg-pink-500': '#ec4899',
      'bg-teal-500': '#14b8a6',
      'bg-violet-500': '#8b5cf6',
      'bg-rose-500': '#f43f5e',
      'bg-amber-500': '#f59e0b'
    };
    
    const progressColor = colorStyles[color] || '#6366f1';
    
    return (
      <div style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#e5e7eb',
        borderRadius: '6px',
        height: '12px'
      }}>
        <div 
          style={{
            backgroundColor: progressColor,
            height: '100%',
            borderRadius: '6px',
            width: `${value}%`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>
    );
  };

  // Handle admin login
  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdminMode(true);
      setShowAdminLogin(false);
      alert('✅ Admin Access Granted! You can now edit content.');
    } else {
      alert('❌ Invalid Password. Try: admin123');
    }
  };

  // Handle profile edit
  const handleProfileEdit = () => {
    setProfileEditData({
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
      location: profileData.location,
      linkedin: profileData.linkedin
    });
    setShowProfileEdit(true);
  };

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`📧 Message sent successfully!\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nSubject: ${contactForm.subject}\n\nMessage: ${contactForm.message}\n\nThank you for your message. I'll get back to you soon!`);
    setContactForm({ name: '', email: '', subject: 'Data Analysis Project', message: '' });
  };

  // Handle resume download
  const handleResumeDownload = () => {
    alert('📥 Resume download started! Your PDF resume is being downloaded.');
  };

  // Handle share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Rishikesh Mohapatra - Portfolio',
        text: 'Check out my professional portfolio',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('🔗 Portfolio link copied to clipboard!');
    }
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
              margin: '0 0 16px 0'
            }}>{profileData.subtitle}</p>
            
            {/* Admin Toggle */}
            <div style={{ marginTop: '16px' }}>
              {isAdminMode ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <span style={{
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
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
                      cursor: 'pointer',
                      fontSize: '12px'
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
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    margin: '0 auto'
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
                placeholder="Enter admin password (Life@2025)"
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

      {/* Profile Edit Modal */}
      {showProfileEdit && (
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
            maxWidth: '500px',
            width: '90%'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Edit Profile Information</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('✅ Profile updated successfully!');
              setShowProfileEdit(false);
            }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
                <input
                  type="text"
                  value={profileEditData.name || ''}
                  onChange={(e) => setProfileEditData({...profileEditData, name: e.target.value})}
                  placeholder="Your name"
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
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
                <input
                  type="email"
                  value={profileEditData.email || ''}
                  onChange={(e) => setProfileEditData({...profileEditData, email: e.target.value})}
                  placeholder="your@email.com"
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
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Phone</label>
                <input
                  type="text"
                  value={profileEditData.phone || ''}
                  onChange={(e) => setProfileEditData({...profileEditData, phone: e.target.value})}
                  placeholder="Your phone number"
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
                <button type="submit" style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Update Profile
                </button>
                <button type="button" onClick={() => setShowProfileEdit(false)} style={{
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
            </form>
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
                  <button onClick={handleProfileEdit} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    border: '2px solid #d1d5db',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}>
                    ✏️ Edit Profile
                  </button>
                )}
                <button onClick={handleResumeDownload} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}>
                  📥 Resume
                </button>
                <button onClick={handleShare} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
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
                    borderRadius: '999px',
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
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '20px', 
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  📊 Performance Timeline
                  <select style={{ 
                    marginLeft: 'auto', 
                    padding: '4px 8px', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}>
                    <option>Last 5 Years</option>
                  </select>
                </h3>
                <div style={{ 
                  height: '320px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  background: 'linear-gradient(to bottom right, #e0e7ff, #f3e8ff)', 
                  borderRadius: '8px' 
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'end', 
                      gap: '16px', 
                      justifyContent: 'center', 
                      height: '128px', 
                      marginBottom: '24px' 
                    }}>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', height: '64px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', height: '80px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '96px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '112px', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ width: '24px', background: 'linear-gradient(to top, #10b981, #34d399)', height: '128px', borderRadius: '4px 4px 0 0' }}></div>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      gap: '16px', 
                      fontSize: '12px', 
                      color: '#6b7280', 
                      marginBottom: '24px' 
                    }}>
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
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '20px', 
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  📈 Skills Distribution
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {skills.slice(0, 4).map((skill, index) => (
                    <div key={index}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginBottom: '8px' 
                      }}>
                        <span style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          fontWeight: '600' 
                        }}>
                          <div style={{ 
                            width: '12px', 
                            height: '12px', 
                            backgroundColor: skill.color.replace('bg-', '#').replace('-500', '').replace('-600', ''),
                            borderRadius: '50%' 
                          }}></div>
                          {skill.name}
                        </span>
                        <span style={{ color: '#6b7280' }}>{skill.level}%</span>
                      </div>
                      <ColoredProgress value={skill.level} color={skill.color} />
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
                  cursor: 'pointer',
                  fontWeight: '600'
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
                  cursor: 'pointer',
                  position: 'relative'
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
                      <span style={{ 
                        fontSize: '30px', 
                        fontWeight: 'bold', 
                        color: '#4f46e5'
                      }}>
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
                  <ColoredProgress value={skill.level} color={skill.color} />
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
                  cursor: 'pointer',
                  fontWeight: '600'
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
                  transition: 'all 0.3s ease',
                  position: 'relative'
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
                        <span style={{ lineHeight: '1.5' }}>{achievement}</span>
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
                  cursor: 'pointer',
                  fontWeight: '600'
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
                  transition: 'all 0.3s ease',
                  position: 'relative'
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
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
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
                      fontSize: '14px',
                      fontWeight: '600'
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
                      fontSize: '14px',
                      fontWeight: '600'
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
                    transition: 'all 0.3s ease',
                    position: 'relative'
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
                    fontSize: '14px',
                    fontWeight: '600'
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
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}>
                      <div style={{ position: 'relative', marginBottom: '16px' }}>
                        <div style={{
                          width: '64px',
                          height: '64px',
                          background: `linear-gradient(to bottom right, ${cert.color.includes('blue') ? '#3b82f6, #60a5fa' : 
                                     cert.color.includes('green') ? '#10b981, #34d399' :
                                     cert.color.includes('purple') ? '#8b5cf6, #a78bfa' :
                                     cert.color.includes('orange') ? '#f97316, #fb923c' :
                                     cert.color.includes('pink') ? '#ec4899, #f472b6' :
                                     cert.color.includes('rose') ? '#f43f5e, #fb7185' :
                                     '#6366f1, #818cf8'})`,
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
                        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0', lineHeight: '1.2' }}>
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
                  <button onClick={handleResumeDownload} style={{
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
