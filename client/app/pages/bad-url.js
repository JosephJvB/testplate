import h from 'react-hyperscript'
import { Fragment as F } from 'react'

// sends user back if they reach a bad url

const BadUrl = props => {
  // logs bad path name request
  global.console.log('BAD URL', props.history.location.pathname)
  return (
    h(F, [
      h('h1', {
        className: 'button is-large is-danger'
      }, 'ecape no'),
      setTimeout(() => props.history.goBack(), 3200)
    ])
  )
}

module.exports = BadUrl

// shoes a number 4 or 5 beside the button.
// caused by the setTimeout I think. dont know why
