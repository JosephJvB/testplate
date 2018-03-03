import h from 'react-hyperscript'

import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from './pages/home'
import BadUrl from './pages/bad-url'

const Routes = () => {
  return (
    h(Router, [
      h(Switch, [
        h(Route, {
          path: '/',
          exact: true,
          component: Home
        }),
        h(Route, {
          component: BadUrl
        })
      ])
    ])
  )
}

module.exports = Routes
