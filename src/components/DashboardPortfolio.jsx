import React, { useState, useEffect } from 'react';

const DashboardPortfolio = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);

  // Mock data
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

  useEffect(() => {
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
                  Analytics Dashboard
                </h1>
                <p style={{ color: '#6b7280', fontSize: '18px', margin: 0 }}>
                  Professional performance metrics and insights
                </p>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              marginBottom: '24px'
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
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
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
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
                    {metric.label}
                  </div>
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
          </div>
        )}

        {/* Other Tabs */}
        {activeTab === 'skills' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
              Skills Analytics
            </h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>Technical expertise and proficiency levels</p>
          </div>
        )}

        {activeTab === 'experience' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
              Professional Experience
            </h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>15+ years career progression and key achievements</p>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
              Key Projects
            </h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>Major initiatives and their business impact</p>
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
              Get In Touch
            </h1>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>Let's discuss data analytics opportunities</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default DashboardPortfolio;
