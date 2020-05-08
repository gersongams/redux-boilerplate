import React from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "./store/actions/shared";
import Todos from "./components/Todos";
import Goals from "./components/Gloals";


class App extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <Todos/>
        <Goals/>
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)