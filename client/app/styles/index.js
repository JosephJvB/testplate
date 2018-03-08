import { combineRules } from 'fela'

module.exports = {
  title: ({ theme: { heavy, light } }) => ({
    color: heavy.red,
    backgroundColor: heavy.white,
    height: '100vh'
  })
}
