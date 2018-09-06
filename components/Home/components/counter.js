import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../Actions'

class Counter extends Component {
  increment = () => {
    this.props.incrementCount();
  }

  decrement = () => {
    this.props.decrementCount();
  }

  reset = () => {
    this.props.resetCount();
  }

  render () {
    const { count } = this.props.HomeState
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
	HomeState: state.HomeReducer
  }
}

const mapDispatchToProps = dispatch => {
	return {
		incrementCount: () => dispatch(actions.incrementCount()),
		decrementCount: () => dispatch(actions.decrementCount()),
		resetCount: () => dispatch(actions.resetCount())
	};
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter)
