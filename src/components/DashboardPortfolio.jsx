            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-4 gap-6">
              {/* Purple Card - Experience */}
              <Card className="border-t-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <User className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.experience}</div>
                  <div className="text-sm text-gray-600 mb-3">Years Experience</div>
                  <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">↗ Growing</div>
                </CardContent>
              </Card>

              {/* Cyan Card - Projects */}
              <Card className="border-t-4 border-cyan-400 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.projects_completed}</div>
                  <div className="text-sm text-gray-600 mb-3">Projects Completed</div>
                  <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">↗ 25% this year</div>
                </CardContent>
              </Card>

              {/* Green Card - Cost Savings */}
              <Card className="border-t-4 border-emerald-400 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.cost_savings}</div>
                  <div className="text-sm text-gray-600 mb-3">Cost Savings Generated</div>
                  <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">↗ ROI Impact</div>
                </CardContent>
              </Card>

              {/* Orange/Coral Card - Accuracy */}
              <Card className="border-t-4 border-orange-400 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Activity className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.accuracy_rate}</div>
                  <div className="text-sm text-gray-600 mb-3">Accuracy Rate</div>
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">↗ Excellence</div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Timeline & Skills Distribution */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5" />
                    Performance Timeline
                    <select className="ml-auto text-sm border rounded px-2 py-1">
                      <option>Last 5 Years</option>
                    </select>
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                  <div className="text-center">
                    <div className="relative mb-6">
                      {/* Mock Chart Lines */}
                      <div className="flex items-end gap-4 justify-center h-32">
                        <div className="w-6 bg-gradient-to-t from-blue-400 to-blue-200 h-16 rounded-t"></div>
                        <div className="w-6 bg-gradient-to-t from-blue-400 to-blue-200 h-20 rounded-t"></div>
                        <div className="w-6 bg-gradient-to-t from-green-400 to-green-200 h-24 rounded-t"></div>
                        <div className="w-6 bg-gradient-to-t from-green-400 to-green-200 h-28 rounded-t"></div>
                        <div className="w-6 bg-gradient-to-t from-green-400 to-green-200 h-32 rounded-t"></div>
                      </div>
                      <div className="flex justify-center gap-4 text-xs text-gray-500 mt-2">
                        <span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2024</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium">Consistent growth in automation efficiency</p>
                    <p className="text-sm text-gray-500 mt-2">240+ hours saved annually through process optimization</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <PieChart className="w-5 h-5" />
                    Skills Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.slice(0, 4).map((skill, index) => (
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
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Skills Analytics</h1>
                <p className="text-gray-600 text-lg">Technical expertise and proficiency levels</p>
              </div>
              {isAdminMode && (
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Skill
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={skill.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                        <Badge variant="secondary" className="text-xs mt-2">{skill.category}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-indigo-600">{skill.level}%</span>
                        {isAdminMode && (
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                        )}
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
              {isAdminMode && (
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Experience
                </Button>
              )}
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
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-sm px-3 py-1">{exp.period}</Badge>
                        {isAdminMode && (
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
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
              {isAdminMode && (
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Project
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-xl transition-all duration-300 relative border-l-4 border-indigo-500">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 text-xl mb-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Code className="w-5 h-5 text-white" />
                          </div>
                          {project.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      </div>
                      {isAdminMode && (
                        <Button size="sm" variant="outline" className="ml-2">
                          <Edit className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
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

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8 relative z-10">
            {/* Awards & Recognition Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Awards & Recognition</h1>
                </div>
                {isAdminMode && (
                  <div className="flex gap-2">
                    <Button className="flex items-center gap-2" size="sm">
                      <Plus className="w-4 h-4" />
                      Add Award
                    </Button>
                    <Button className="flex items-center gap-2" size="sm" variant="outline">
                      <Plus className="w-4 h-4" />
                      Add Certification
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                {awards.map((award, index) => (
                  <Card key={award.id} className="hover:shadow-xl transition-all duration-300 relative bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        {isAdminMode && (
                          <Button size="sm" variant="outline" className="absolute -top-1 -right-1 w-6 h-6 p-0">
                            <Edit className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{award.title}</h3>
                        <p className="text-blue-600 font-medium text-xs mb-2">{award.year}</p>
                        <p className="text-gray-600 text-xs leading-relaxed">{award.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="pb-20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
                {isAdminMode && (
                  <Button className="flex items-center gap-2" size="sm" variant="outline">
                    <Plus className="w-4 h-4" />
                    Add
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => {
                  // Icon mapping
                  const iconMapping = {
                    'BarChart3': BarChart3,
                    'PieChart': PieChart,
                    'Database': Database,
                    'Zap': Zap
                  };
                  const IconComponent = iconMapping[cert.icon] || BarChart3;
                  
                  return (
                    <Card key={cert.id} className="hover:shadow-xl transition-all duration-300 relative bg-gradient-to-br from-white to-gray-50">
                      <CardContent className="p-6 text-center">
                        <div className="relative mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          {isAdminMode && (
                            <Button size="sm" variant="outline" className="absolute -top-1 -right-1 w-6 h-6 p-0">
                              <Edit className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
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
                      {updating && <Loader2 className="w-4 h-4 animate-spin" />}
                      <Send className="w-4 h-4" />
                      Send Message
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
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-600">{profileData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-600">{profileData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Location</p>
                      <p className="text-gray-600">{profileData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-blue-600" />
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
                    <Button variant="outline" className="w-full" onClick={handleResumeDownload}>
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
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
