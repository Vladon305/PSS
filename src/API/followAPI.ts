import { instance, APIResponseType } from "./API"

export const followAPI = {
  following: async (userId: number) => {
    const response = await instance.post<APIResponseType>(`follow/${userId}`)
    return response.data
  },
  unfollowing: async (userId: number) => {
    const response = await instance.delete<APIResponseType>(`follow/${userId}`)
    return response.data
  }
}
