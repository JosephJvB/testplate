import h from 'react-hyperscript'
import { Provider as reduxProvider } from 'react-redux'
import { Provider as felaProvider } from 'react-fela'
import { createRenderer } from 'fela'

import { store } from '../store'
import Routes from './routes'

const mountNode = document.getElementById('stylesheet')

const renderer = createRenderer({})

const App = () => {

  return (
    // make redux store available
    h(reduxProvider, { store }, [
      // make fela styles available
      h(felaProvider, { renderer, mountNode }, [
        h(Routes)
      ])
    ])
  )

}

export default App
