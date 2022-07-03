import { UserType } from "../types/types"
import { instance } from "./API"

export type getUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: null | string
}

export const usersAPI = {
  getUsers: async (page = 1, pageSize = 10) => {
    const response = await instance.get<getUsersResponseType>(`users?page=${page}&count=${pageSize}`)
    return response.data
  }
}
