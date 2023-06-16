import axios from "axios"
import Constants from "expo-constants"

const axiosInstance = axios.create({
  baseURL: Constants?.expoConfig?.extra?.apiUrl,
})

export default axiosInstance
