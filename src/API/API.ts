import axios from "axios"

export enum ResultCodes {
  Success = 0,
  Error = 1
}

export enum ResultCodesWithCaptcha {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D,
  massages: Array<string>,
  resultCode: RC
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "138ae5c5-e20d-4f0c-a00f-fd2a174e59e7"
    // "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
})
