import { ERROR_MESSAGE } from "../../shared/constants"

export function getErrorMessage(error: any): string {
  if (error.code === "ECONNABORTED") {
    return ERROR_MESSAGE.TIMEOUT_ERROR
  }
  if (error.message === "Network Error") {
    return ERROR_MESSAGE.NETWORK_ERROR
  }

  return ERROR_MESSAGE.REQUEST_FAILED
}
