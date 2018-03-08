import h from 'react-hyperscript'
import { connect as connectFela } from 'react-fela'
import styles from '../styles'

const Home = connectFela(styles)(props => {

  const { styles } = props

  return (
    h('h1', {
      className: styles.title
    }, 'I am that which I am')
  )

})

module.exports = Home
