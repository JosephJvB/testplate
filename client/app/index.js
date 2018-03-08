import h from 'react-hyperscript'
import { Provider as reduxProvider } from 'react-redux'
import { Provider as felaProvider, ThemeProvider as felaThemeProvider } from 'react-fela'
import { createRenderer } from 'fela'

import { store } from '../store'
import Routes from './routes'
import theme from './theme'

const mountNode = document.getElementById('stylesheet')

const renderer = createRenderer({})

const App = () => {

  return (
    // make redux store available
    h(reduxProvider, { store }, [
      // make fela styles available
      h(felaProvider, { renderer, mountNode }, [
        // makes theme avaliable
        h(felaThemeProvider, { theme }, [
          // renders routes
          h(Routes)
        ])
      ])
    ])
  )

}

export default App
