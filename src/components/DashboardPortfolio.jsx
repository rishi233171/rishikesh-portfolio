import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

// Mock data (simplified version)
const mockProfileData = {
  name: "Rishikesh Mohapatra",
  subtitle: "Lead Supply Chain Data Analyst | Supply Chain Analytics Expert",
  experience: "15+",
  projects_completed: "500+",
  cost_savings: "$5M+",
  accuracy_rate: "99.9%",
  location: "Bhubaneswar, Odisha",
  email: "rish233171@gmail.com",
  phone: "+91-7483532369",
  linkedin: "linkedin.com/in/rishikesh-mohapatra"
};

const mockSkills = [
  { id: 1, name: "Power BI", level: 95, category: "Data Visualization", color: "bg-indigo-500" },
  { id: 2, name: "SQL", level: 90, category: "Programming", color: "bg-purple-500" },
  { id: 3, name: "Python", level: 85, category: "Programming", color: "bg-cyan-500" },
  { id: 4, name: "Tableau", level: 92, category: "Data Visualization", color: "bg-emerald-500" },
  { id: 5, name: "Excel/VBA", level: 98, category: "Analysis", color: "bg-blue-600" },
  { id: 6, name: "SAP", level: 88, category: "ERP Systems", color: "bg-orange-500" },
  { id: 7, name: "Data Analysis", level: 96, category: "Analysis", color: "bg-green-600" },
  { id: 8, name: "Process Automation", level: 93, category: "Automation", color: "bg-red-500" },
];

const mockExperiences = [
  {
    id: 1,
    title: "Lead Supply Chain Data Analyst",
    company: "SGB Brandsafway Pvt Ltd",
    period: "July 2023 – Present",
    achievements: [
      "Conduct comprehensive PO/AP spend analysis and compliance tracking across multiple vendors and regions",
      "Developed Power BI dashboards for savings tracking and travel expense reporting, improving visibility by 40%",
      "Analyze vendor performance metrics and implement data-driven vendor management strategies",
      "Developed low-code apps using Power Apps for internal use cases including attendance tracking and QC audit processes"
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
      "Developed predictive models for demand forecasting achieving 92% accuracy rate"
    ]
  }
];

const mockProjects = [
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
  }
];

const DashboardPortfolio = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const { toast } = useToast();

  // Data state
  const [profileData, setProfileData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Data Analysis Project',
    message: ''
  });

  // Load all data on component mount
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setLoading(true);
    try {
      // Use mock data
      setProfileData(mockProfileData);
      setSkills(mockSkills);
      setExperiences(mockExperiences);
      setProjects(mockProjects);

      toast({
        title: "Portfolio Loaded",
        description: "All data loaded successfully from local data",
      });
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Loading Error", 
        description: "Failed to load portfolio data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Admin login function
  const handleAdminLogin = async () => {
    try {
      setUpdating(true);
      if (adminPassword === 'admin123') {
        setIsAdminMode(true);
        setShowAdminLogin(false);
        toast({
          title: "Admin Access Granted",
          description: "You can now edit content",
        });
      } else {
        toast({
          title: "Invalid Password",
          description: "Please enter correct admin password (admin123)",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Error during authentication",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setContactForm({ name: '', email: '', subject: 'Data Analysis Project', message: '' });
    } catch (error) {
      toast({
        title: "Send Failed",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  // Custom Progress Component
  const ColoredProgress = ({ value, color }) => {
    return (
      <div className="relative w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (!profileData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load portfolio data</p>
          <Button onClick={loadAllData}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-2xl border-r border-gray-200 z-40">
        <div className="p-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">👤</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
            <p className="text-sm text-indigo-600 font-medium mb-2">{profileData.subtitle}</p>
            
            {/* Admin Toggle */}
            <div className="mt-4">
              {isAdminMode ? (
                <div className="flex items-center gap-2 justify-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    ⚙️ Admin Mode
                  </Badge>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setIsAdminMode(false)}
                  >
                    👁️‍🗨️
                  </Button>
                </div>
              ) : (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => setShowAdminLogin(true)}
                >
                  👁️ Admin
                </Button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
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
                className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span>📞</span>
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>📧</span>
              <span className="truncate">{profileData.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Login Dialog */}
      <Dialog open={showAdminLogin} onOpenChange={setShowAdminLogin}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="adminPassword">Admin Password</Label>
              <Input
                id="adminPassword"
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password (admin123)"
              />
            </div>
            <Button onClick={handleAdminLogin} className="w-full" disabled={updating}>
              {updating && "⏳ "} Login as Admin
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <div className="ml-80 p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600 text-lg">Professional performance metrics and insights</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex items-center gap-2 border-2 hover:bg-gray-50">
                  📥 Resume
                </Button>
                <Button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg">
                  🔗 Share
                </Button>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-4 gap-6">
              <Card className="border-t-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">👤</span>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.experience}</div>
                  <div className="text-sm text-gray-600 mb-3">Years Experience</div>
                  <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">↗ Growing</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-cyan-400 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.projects_completed}</div>
                  <div className="text-sm text-gray-600 mb-3">Projects Completed</div>
                  <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">↗ 25% this year</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-emerald-400 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">💰</span>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.cost_savings}</div>
                  <div className="text-sm text-gray-600 mb-3">Cost Savings Generated</div>
                  <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">↗ ROI Impact</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-orange-400 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">📊</span>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.accuracy_rate}</div>
                  <div className="text-sm text-gray-600 mb-3">Accuracy Rate</div>
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">↗ Excellence</div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Distribution */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  📈 Skills Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.slice(0, 4).map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                          {skill.name}
                        </span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <ColoredProgress value={skill.level} color={skill.color} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Skills Analytics</h1>
                <p className="text-gray-600 text-lg">Technical expertise and proficiency levels</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <Card key={skill.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                        <Badge variant="secondary" className="text-xs mt-2">{skill.category}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-indigo-600">{skill.level}%</span>
                      </div>
                    </div>
                    <ColoredProgress value={skill.level} color={skill.color} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Experience</h1>
                <p className="text-gray-600 text-lg">15+ years career progression and key achievements</p>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.id} className="hover:shadow-xl transition-all duration-300 relative">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                        <p className="text-indigo-600 font-medium mt-1">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="text-sm px-3 py-1">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Key Projects</h1>
                <p className="text-gray-600 text-lg">Major initiatives and their business impact</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-xl transition-all duration-300 relative border-l-4 border-indigo-500">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 text-xl mb-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white">💻</span>
                          </div>
                          {project.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span>📈</span>
                        <span className="font-medium text-green-800 text-sm">Impact & Results</span>
                      </div>
                      <p className="text-green-700 font-medium">{project.impact}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-2 uppercase font-medium">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technology.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Get In Touch</h1>
              <p className="text-gray-600 text-lg">Let's discuss data analytics opportunities</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        value={contactForm.subject}
                        onValueChange={(value) => setContactForm({...contactForm, subject: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Data Analysis Project">Data Analysis Project</SelectItem>
                          <SelectItem value="Process Automation">Process Automation</SelectItem>
                          <SelectItem value="Dashboard Development">Dashboard Development</SelectItem>
                          <SelectItem value="Consultation">Consultation</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Your message..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 flex items-center gap-2" disabled={updating}>
                      {updating && "⏳ "} 📤 Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-600">{profileData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-600">{profileData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Location</p>
                      <p className="text-gray-600">{profileData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">LinkedIn</p>
                      <p className="text-gray-600">{profileData.linkedin}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      I'm passionate about transforming complex data into actionable business insights. 
                      Let's discuss how data analytics can drive your organization's success.
                    </p>
                    <Button variant="outline" className="w-full">
                      📥 Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPortfolio;
