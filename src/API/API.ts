import axios from "axios"
import { ProfileType, UserType } from '../types/types';

export enum ResultCodes {
  Success = 0,
  Error = 1
}

export enum ResultCodesWithCaptcha {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}


export type CommonResponseType = {
  resultCode: ResultCodes
  messages: Array<string>
  data: {}
}

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "138ae5c5-e20d-4f0c-a00f-fd2a174e59e7"
    // "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
})

type getUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: null | string
}

export const usersAPI = {
  getUsers: async (page = 1, pageSize = 10) => {
    const response = await instance.get<getUsersResponseType>(`users?page=${page}&count=${pageSize}`)
    return response.data
  },
  getUserProfile: async (userId: number) => {
    console.warn('obsolete method. Please profileAPI object')
    return profileAPI.getUserProfile(userId)
  }
}

export const followAPI = {
  following: async (userId: number) => {
    const response = await instance.post<CommonResponseType>(`follow/${userId}`)
    return response.data
  },
  unfollowing: async (userId: number) => {
    const response = await instance.delete<CommonResponseType>(`follow/${userId}`)
    return response.data
  }
}

type getAuthUserResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodes
  massages: Array<string>
}

type LoginResponseType = {
  data: {
    userId: number
    email: string
    login: string
  }
  resultCode: ResultCodes | ResultCodesWithCaptcha
  massages: Array<string>
}

export const authAPI = {
  getAuthUser: async () => {
    const response = await instance.get<getAuthUserResponseType>(`auth/me`)
    return response.data
  },
  login: async (email: string, password: string, rememberMe = false) => {
    const response = await instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe })
    return response.data
  },

  logout: async () => {
    const response = await instance.delete<CommonResponseType>(`auth/login`)
    return response.data
  }
}

export const profileAPI = {
  getUserProfile: async (userId: number) => {
    const response = await instance.get<ProfileType>(`profile/${userId}`)
    return response.data
  },
  getUserStatus: async (userId: number) => {
    const response = await instance.get<string>(`profile/status/${userId}`)
    return response.data
  },
  updateStatus: async (status: string) => {
    const response = await instance.put<CommonResponseType>(`profile/status`, { status })
    return response.data
  }
}