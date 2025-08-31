import "./App.css";

function App() {
  return (
    <div className="App">
      <DashboardPortfolio />
    </div>
  );
}

// Complete dashboard component - all in one file
function DashboardPortfolio() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [loading, setLoading] = React.useState(true);

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

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return React.createElement('div', {
      style: {
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e0e7ff, #f3e8ff, #dbeafe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement('div', { style: { textAlign: 'center' } },
      React.createElement('div', {
        style: {
          width: '48px',
          height: '48px',
          border: '4px solid #e5e7eb',
          borderTop: '4px solid #4f46e5',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 16px'
        }
      }),
      React.createElement('p', { style: { color: '#6b7280' } }, 'Loading portfolio data...')
    ));
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'skills', label: 'Skills Analytics', icon: '📈' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const metrics = [
    { value: profileData.experience, label: 'Years Experience', color: '#4f46e5', icon: '👤' },
    { value: profileData.projects_completed, label: 'Projects Completed', color: '#06b6d4', icon: '🎯' },
    { value: profileData.cost_savings, label: 'Cost Savings Generated', color: '#10b981', icon: '💰' },
    { value: profileData.accuracy_rate, label: 'Accuracy Rate', color: '#f59e0b', icon: '📊' }
  ];

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #e0e7ff, #f3e8ff, #dbeafe)'
    }
  },
    // Sidebar
    React.createElement('div', {
      style: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '320px',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRight: '1px solid #e5e7eb',
        zIndex: 40
      }
    },
      React.createElement('div', { style: { padding: '24px' } },
        // Profile Section
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '32px' } },
          React.createElement('div', {
            style: {
              width: '96px',
              height: '96px',
              background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
              borderRadius: '24px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
          }, React.createElement('span', { style: { color: 'white', fontSize: '48px' } }, '👤')),
          React.createElement('h2', {
            style: {
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#111827',
              margin: '0 0 4px 0'
            }
          }, profileData.name),
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#4f46e5',
              fontWeight: '500',
              margin: 0
            }
          }, profileData.subtitle)
        ),
        // Navigation
        React.createElement('nav', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
          navItems.map(item => 
            React.createElement('button', {
              key: item.id,
              onClick: () => setActiveTab(item.id),
              style: {
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
              }
            },
              React.createElement('span', { style: { fontSize: '20px' } }, item.icon),
              React.createElement('span', { style: { fontWeight: '500' } }, item.label)
            )
          )
        )
      ),
      // Contact Info
      React.createElement('div', {
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
          color: 'white'
        }
      },
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
            React.createElement('span', null, '📞'),
            React.createElement('span', null, profileData.phone)
          ),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
            React.createElement('span', null, '📧'),
            React.createElement('span', { style: { overflow: 'hidden', textOverflow: 'ellipsis' } }, profileData.email)
          )
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { style: { marginLeft: '320px', padding: '32px' } },
      // Dashboard Content
      activeTab === 'dashboard' && React.createElement('div', null,
        React.createElement('div', { style: { marginBottom: '24px' } },
          React.createElement('h1', {
            style: {
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#111827',
              margin: '0 0 8px 0'
            }
          }, 'Analytics Dashboard'),
          React.createElement('p', {
            style: {
              color: '#6b7280',
              fontSize: '18px',
              margin: 0
            }
          }, 'Professional performance metrics and insights')
        ),
        // Metrics Cards
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }
        }, metrics.map((metric, index) =>
          React.createElement('div', {
            key: index,
            style: {
              backgroundColor: 'white',
              borderRadius: '12px',
              borderTop: `4px solid ${metric.color}`,
              padding: '24px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }
          },
            React.createElement('div', {
              style: {
                width: '56px',
                height: '56px',
                backgroundColor: metric.color,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }
            }, React.createElement('span', { style: { fontSize: '28px' } }, metric.icon)),
            React.createElement('div', {
              style: {
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '8px'
              }
            }, metric.value),
            React.createElement('div', {
              style: {
                fontSize: '14px',
                color: '#6b7280'
              }
            }, metric.label)
          )
        ))
      ),
      
      // Other tab contents
      activeTab === 'skills' && React.createElement('div', null,
        React.createElement('h1', { style: { fontSize: '36px', fontWeight: 'bold', color: '#111827' } }, 'Skills Analytics')
      ),
      activeTab === 'experience' && React.createElement('div', null,
        React.createElement('h1', { style: { fontSize: '36px', fontWeight: 'bold', color: '#111827' } }, 'Professional Experience')
      ),
      activeTab === 'projects' && React.createElement('div', null,
        React.createElement('h1', { style: { fontSize: '36px', fontWeight: 'bold', color: '#111827' } }, 'Key Projects')
      ),
      activeTab === 'contact' && React.createElement('div', null,
        React.createElement('h1', { style: { fontSize: '36px', fontWeight: 'bold', color: '#111827' } }, 'Get In Touch')
      )
    ),
    
    // CSS for animations
    React.createElement('style', null, `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `)
  );
}

export default App;
