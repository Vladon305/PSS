import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "138ae5c5-e20d-4f0c-a00f-fd2a174e59e7"
    // "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
});

export const usersAPI = {
  getUsers: async (page = 1, pageSize = 10) => {
    const response = await instance.get(`users?page=${page}&count=${pageSize}`);
    return response.data;
  },
  getUserProfile: async (userId) => {
    console.warn('obsolete method. Please profileAPI object')
    return profileAPI.getUserProfile(userId);
  }
}

export const followAPI = {
  following: async (userId) => {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },
  unfollowing: async (userId) => {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  }
}

export const authAPI = {
  getAuthUser: async () => {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
  login: async (email, password, rememberMe = false) => {
    const response = await instance.post(`auth/login`, { email, password, rememberMe });
    return response.data;
  },

  logout: async () => {
    const response = await instance.delete(`auth/login`);
    return response.data;
  }
}

export const profileAPI = {
  getUserProfile: async (userId = 24521) => {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  getUserStatus: async (userId) => {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  updateStatus: async (status) => {
    const response = await instance.put(`profile/status`, { status });
    return response.data;
  }
}