
import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

export default class App extends Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option alreday exists'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }
    ))
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {

    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    const subtitle = 'Put your hands in the life of a computer'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <div className='widget'>
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}

App.defaultProps = {
  options: []
}

// import React, { Component } from 'react'
// import Header from './Header'
// import Action from './Action'
// import Options from './Options'
// import AddOption from './AddOption'
//
// export default class App extends Component {
//   constructor (props) {
//     super(props)
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
//     this.handlePick = this.handlePick.bind(this)
//     this.handleAddOption = this.handleAddOption.bind(this)
//     this.handleDeleteOption = this.handleDeleteOption.bind(this)
//     this.state = {
//       options: props.options
//     }
//   }
//
//   componentDidMount () {
//     const json = localStorage.getItem('options')
//     const options = JSON.parse(json)
//
//     this.setState(() => ({ options: options }))
//   }
//
//   componentDidUpdate (prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options)
//       localStorage.setItem('options', json)
//     }
//   }
//
//   componentWillUnmount () {
//     console.log('componentWillUnmount')
//   }
//
//   handleDeleteOptions () {
//     this.setState(() => ({ options: [] }))
//   }
//
//   handleDeleteOption (optionToRemove) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => optionToRemove !== option)
//     }))
//   }
//
//   handlePick () {
//     const randomNum = Math.floor(Math.random() * this.state.options.length)
//     const option = this.state.options[randomNum]
//     alert(option)
//   }
//
//   handleAddOption (option) {
//     if (!option) {
//       return 'Enter valid value'
//     } else if (this.state.options.indexOf(option) > -1) {
//       return 'This option alreday exists'
//     }
//     this.setState((prevState) => ({
//       options: prevState.options.concat([option])
//     }
//     ))
//   }
//
//   render () {
//     const subtitle = 'Put your hands in the life of a computer'
//     return (
//       <div>
//         <Header subtitle={subtitle} />
//         <Action
//           hasOptions={this.state.options.length > 0}
//           handlePick={this.handlePick}
//         />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//           handleDeleteOption={this.handleDeleteOption}
//         />
//         <AddOption
//           handleAddOption={this.handleAddOption}
//         />
//       </div>
//     )
//   }
// }
//
// App.defaultProps = {
//   options: []
// }
// constructor (props) {
//   super(props)
//   this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
//   this.handlePick = this.handlePick.bind(this)
//   this.handleAddOption = this.handleAddOption.bind(this)
//   this.handleDeleteOption = this.handleDeleteOption.bind(this)
//   this.state = {
//     options: []
//   }
// }
