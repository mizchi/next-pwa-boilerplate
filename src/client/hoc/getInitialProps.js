/* @flow */
import React from 'react'

type NextContext = {}

export default (func: NextContext => any) => (Wrapped: any) =>
  class extends React.PureComponent<{}> {
    static getInitialProps(ctx: NextContext => any) {
      return func(ctx)
    }

    render() {
      return <Wrapped {...this.props} />
    }
  }
