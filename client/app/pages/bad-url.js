import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { connect } from 'react-redux'
import { showBadUrl } from '../../store/actions/bad-url'

// sends user back if they reach a bad url
// TODO: connect to fela and use recompose's 'compose'

const BadUrl = props => {

  const {
    history,
    dispatch,
    badUrl
  } = props

  const {
    goBack,
    // destructure inside destructure
    location: { pathname }
  } = history

  const { log } = global.console

  // write bad url to console
  badUrl && log('BAD_URL: ', badUrl)
  
  // send bad url to redux store
  dispatch(showBadUrl(pathname))

  return (
    // todo: tidy this block.
    h(F, [
      h('h1', {
        className: 'button is-large is-danger',
        onClick: goBack
      }, 'ecape no'),
      `BAD URL: ${badUrl}`
    ])
  )

}

// destructure state & implicit return
const mapStateToProps = ({ badUrl }) => ({
  badUrl
})

module.exports = connect(mapStateToProps)(BadUrl)
