import { ProfileType } from '../types/types'
import { instance, APIResponseType } from "./API"


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
    const response = await instance.put<APIResponseType>(`profile/status`, { status });
    return response.data
  }
}
