import { instance, APIResponseType } from "./API"

export type getAuthUserResponseDataType = {
  id: number
  email: string
  login: string
}

export type LoginResponseDataType = {
  userId: number
  email: string
  login: string
}

export const authAPI = {
  getAuthUser: async () => {
    const response = await instance.get<APIResponseType<getAuthUserResponseDataType>>(`auth/me`)
    return response.data
  },
  login: async (email: string, password: string, rememberMe = false) => {
    const response = await instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, { email, password, rememberMe })
    return response.data
  },

  logout: async () => {
    const response = await instance.delete<APIResponseType>(`auth/login`)
    return response.data
  }
}
