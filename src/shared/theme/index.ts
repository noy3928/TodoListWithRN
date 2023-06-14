import { Appearance } from "react-native"

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
}

export const themeJson: ITheme = require("./theme.json")

interface ITheme {
  [theme: string]: ThemeInterface
}

export interface ThemeInterface {
  theme: string
  background: string
  surface: string
  primary: string
  primaryLight: string
}

class ThemeStore {
  defaultTheme = THEME.LIGHT

  constructor() {
    const deviceTheme = Appearance.getColorScheme()
    if (deviceTheme) {
      this.defaultTheme = deviceTheme
    }
  }
}

export const themeStore = new ThemeStore()
const theme = themeJson[themeStore.defaultTheme]
export default theme
