import React from 'react'

class ChildOne extends React.Component {
  constructor (props) {
    super(props)
    this.list = []
    this.state = {
      list: []
    }
    this.addToArrayOne = this.addToArrayOne.bind(this)
    this.trigger = this.props.trigger.bind(null, 'triggered by child one')
  }

  componentDidMount () {
    this.props.subscribe(this.addToArrayOne)
  }

  render () {
    return (
      <div className='child-one'>
        <h2>Child one</h2>
        <button onClick={this.trigger}>Trigger</button>
        <ul>
          {this.state.list.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }

  addToArrayOne (message) {
    this.setState({
      list: [...this.state.list, message]
    })
  }
}

export default ChildOne

