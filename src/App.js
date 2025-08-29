import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Tabs, TabsContent } from './components/ui/tabs';
import { 
  User, BarChart3, Award, Briefcase, Code, Mail, Phone, MapPin,
  Target, DollarSign, Activity, Download, Share, Eye
} from 'lucide-react';
import './App.css';

const DashboardPortfolio = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const profileData = {
    name: "Rishikesh Mohapatra",
    title: "Lead Supply Chain Data Analyst",
    experience: "15+",
    projectsCompleted: "500+",
    costSavings: "$5M+",
    accuracyRate: "99.9%",
    phone: "+91-7483532369",
    email: "rishi233171@gmail.com"
  };

  const skills = [
    { name: "Power BI", level: 95, color: "bg-indigo-500" },
    { name: "SQL", level: 90, color: "bg-purple-500" },
    { name: "Python", level: 85, color: "bg-cyan-500" },
    { name: "Tableau", level: 92, color: "bg-emerald-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-2xl border-r border-gray-200 z-10">
        <div className="p-6">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
            <p className="text-sm text-indigo-600 font-medium mb-2">Lead Supply Chain Data Analyst</p>
            <Button size="sm" variant="outline">
              <Eye className="w-3 h-3 mr-1" />
              Admin
            </Button>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'skills', label: 'Skills Analytics', icon: BarChart3 },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'projects', label: 'Projects', icon: Code },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'contact', label: 'Contact', icon: Mail }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span className="truncate">{profileData.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80 p-8">
        <Tabs value={activeTab} className="w-full">
          <TabsContent value="dashboard" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600 text-lg">Professional performance metrics and insights</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
                <Button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600">
                  <Share className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              <Card className="border-t-4 border-indigo-500">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.experience}</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-cyan-400">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.projectsCompleted}</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-emerald-400">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.costSavings}</div>
                  <div className="text-sm text-gray-600">Cost Savings Generated</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-orange-400">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.accuracyRate}</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Skills Analytics</h1>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-3xl font-bold text-indigo-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className={`${skill.color} h-full rounded-full`} style={{width: `${skill.level}%`}}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Get In Touch</h1>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-600">{profileData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">{profileData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-600">Bhubaneswar, Odisha</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPortfolio;
