import React from 'react'

class ChildTwo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.addToArrayTwo = this.addToArrayTwo.bind(this)
    this.trigger = this.props.trigger.bind(null, 'triggered by child two')
  }

  componentDidMount () {
    this.props.subscribe(this.addToArrayTwo)
  }

  render () {
    return (
      <div className='child-two'>
        <h2>Child two</h2>
        <button onClick={this.trigger}>Trigger</button>
        <ul>
          {this.state.list.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }

  addToArrayTwo (message) {
    this.setState({
      list: [...this.state.list, message]
    })
  }
}

export default ChildTwo

