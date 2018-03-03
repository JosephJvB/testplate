import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { connect } from 'react-redux'
import { showBadUrl } from '../../store/actions/bad-url'

// sends user back if they reach a bad url

const BadUrl = props => {
  // logs bad path name request

  const {
    history,
    dispatch,
    badUrl
  } = props

  const {
    goBack,
    location: { pathname }
  } = history

  const { log } = global.console

  badUrl && log('BAD_URL: ', badUrl)
  dispatch(showBadUrl(pathname))

  return (
    h(F, [
      h('h1', {
        className: 'button is-large is-danger',
        onClick: goBack
      }, 'ecape no'),
      `BAD URL: ${badUrl}`
    ])
  )
}

const mapStateToProps = ({ badUrl }) => ({
  badUrl
})

module.exports = connect(mapStateToProps)(BadUrl)

// shoes a number 4 or 5 beside the button.
// caused by the setTimeout I think. dont know why
