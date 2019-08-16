import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import JssProvider from 'react-jss'
import getPageContext from './getPageContext'

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props)
      this.muiPageContext = getPageContext()
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.muiPageContext.theme}
          sheetsManager={this.muiPageContext.sheetsManager}
        >
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

  return WithRoot
}

export default withRoot
