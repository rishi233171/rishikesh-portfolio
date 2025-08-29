import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Admin authentication helper
let adminPassword = null;

export const setAdminPassword = (password) => {
  adminPassword = password;
};

export const getAdminAuth = () => {
  return adminPassword ? { password: adminPassword } : null;
};

// Auth API
export const authAPI = {
  adminLogin: async (password) => {
    const response = await apiClient.post('/auth/admin', { password });
    if (response.data.access_granted) {
      setAdminPassword(password);
    }
    return response.data;
  },
};

// Profile API
export const profileAPI = {
  getProfile: async () => {
    const response = await apiClient.get('/profile');
    return response.data;
  },
  
  updateProfile: async (profileData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.put('/profile', profileData, {
      data: auth
    });
    return response.data;
  },
};

// Skills API
export const skillsAPI = {
  getSkills: async () => {
    const response = await apiClient.get('/skills');
    return response.data;
  },
  
  createSkill: async (skillData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.post('/skills', skillData, {
      data: auth
    });
    return response.data;
  },
  
  updateSkill: async (skillId, skillData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.put(`/skills/${skillId}`, skillData, {
      data: auth
    });
    return response.data;
  },
  
  deleteSkill: async (skillId) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.delete(`/skills/${skillId}`, {
      data: auth
    });
    return response.data;
  },
};

// Experience API
export const experienceAPI = {
  getExperience: async () => {
    const response = await apiClient.get('/experience');
    return response.data;
  },
  
  createExperience: async (expData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.post('/experience', expData, {
      data: auth
    });
    return response.data;
  },
  
  updateExperience: async (expId, expData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.put(`/experience/${expId}`, expData, {
      data: auth
    });
    return response.data;
  },
  
  deleteExperience: async (expId) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.delete(`/experience/${expId}`, {
      data: auth
    });
    return response.data;
  },
};

// Projects API
export const projectsAPI = {
  getProjects: async () => {
    const response = await apiClient.get('/projects');
    return response.data;
  },
  
  createProject: async (projectData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.post('/projects', projectData, {
      data: auth
    });
    return response.data;
  },
  
  updateProject: async (projectId, projectData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.put(`/projects/${projectId}`, projectData, {
      data: auth
    });
    return response.data;
  },
  
  deleteProject: async (projectId) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.delete(`/projects/${projectId}`, {
      data: auth
    });
    return response.data;
  },
};

// Awards API
export const awardsAPI = {
  getAwards: async () => {
    const response = await apiClient.get('/awards');
    return response.data;
  },
  
  createAward: async (awardData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.post('/awards', awardData, {
      data: auth
    });
    return response.data;
  },
  
  updateAward: async (awardId, awardData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.put(`/awards/${awardId}`, awardData, {
      data: auth
    });
    return response.data;
  },
  
  deleteAward: async (awardId) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.delete(`/awards/${awardId}`, {
      data: auth
    });
    return response.data;
  },
};

// Certifications API
export const certificationsAPI = {
  getCertifications: async () => {
    const response = await apiClient.get('/certifications');
    return response.data;
  },
  
  createCertification: async (certData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.post('/certifications', certData, {
      data: auth
    });
    return response.data;
  },
  
  updateCertification: async (certId, certData) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.put(`/certifications/${certId}`, certData, {
      data: auth
    });
    return response.data;
  },
  
  deleteCertification: async (certId) => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.delete(`/certifications/${certId}`, {
      data: auth
    });
    return response.data;
  },
};

// Contact API
export const contactAPI = {
  sendMessage: async (contactData) => {
    const response = await apiClient.post('/contact', contactData);
    return response.data;
  },
  
  getMessages: async () => {
    const auth = getAdminAuth();
    if (!auth) throw new Error('Admin authentication required');
    
    const response = await apiClient.get('/contacts', {
      data: auth
    });
    return response.data;
  },
};

// Error handling interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
);
