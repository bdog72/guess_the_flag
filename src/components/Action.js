import React, { Component } from 'react'

export default class Action extends Component {
  render () {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
            What should i do
        </button>
      </div>
    )
  }
}
