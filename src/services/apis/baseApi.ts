import axios, { AxiosResponse } from "axios"
import Constants from "expo-constants"
import { getErrorMessage } from "./errorHandler"
import { ERROR_MESSAGE } from "../../shared/constants"

const axiosInstance = axios.create({
  baseURL: Constants?.expoConfig?.extra?.apiUrl,
  timeout: 5000,
})

axiosInstance.interceptors.response.use((_: AxiosResponse) => {
  return _
}, onResponseRejected)

function onResponseRejected(error: any) {
  const errorMessage = getErrorMessage(error)

  if (errorMessage === ERROR_MESSAGE.TIMEOUT_ERROR) {
    console.error("Timeout error: ", error.message)
  } else if (errorMessage === ERROR_MESSAGE.NETWORK_ERROR) {
    console.error("Network error: ", error.message)
  }

  throw new Error(errorMessage)
}

export default axiosInstance
