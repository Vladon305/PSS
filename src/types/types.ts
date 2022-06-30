import { Dispatch } from "redux"
import { AppStateType } from "../Redux/redux-store"

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type PhotosType = {
  small: string
  large: string
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
} | null

export type LinksType = {
  page: string
  link: string
}

export type PostType = {
  id: number
  title: string
  data: string
  category: string
  text: string
}

export type WorkType = {
  id: number
  title: string
  data: string
  category: string
  text: string
}

export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}
