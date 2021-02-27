import { createMuiTheme } from '@material-ui/core/styles'
import color from './color'
import font from './font'
import spacing from './spacing'
import sizes from './sizes'

const theme = {
  palette: {
    primary: {
      light: color.primary,
      main: color.primary,
      dark: color.primary,
    },
    secondary: {
      light: color.accent,
      main: color.accent,
      dark: color.accent,
    },
  },
}

export const materialTheme = createMuiTheme(theme)


export default {
  color,
  font,
  spacing,
  sizes,
}
