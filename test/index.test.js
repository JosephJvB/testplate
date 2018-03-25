import test from 'tape'
import { shallow } from 'enzyme'
import h from 'react-hyperscript'

import Home from '../client/app/pages/home'

test('h(Home)', (t) => {
  const expected = 'I am that which I am'
  const wrapper = shallow(h(Home))
  t.equal(wrapper.text(), expected)
  t.end()
})
