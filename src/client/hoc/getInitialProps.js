/* @flow */
import React from 'react'

type NextContext = {
  pathname: string,
  query: Object
}

export default (func: NextContext => any, opts?: { clientOnly?: boolean }) => (
  Wrapped: any
) =>
  opts && opts.clientOnly
    ? class extends React.Component<any, any> {
        static getInitialProps(ctx: any) {
          const { pathname, query } = ctx
          return { pathname, query }
        }
        constructor() {
          super()
          this.state = {
            __loading: true
          }
        }
        async componentDidMount() {
          const state = await func(this.props)
          this.setState({ ...state, __loading: false })
        }

        render() {
          return <Wrapped {...this.state} />
        }
      }
    : class extends React.PureComponent<{}> {
        static getInitialProps(ctx: NextContext => any) {
          const { pathname, query } = ctx
          return func({ pathname, query })
        }

        render() {
          return <Wrapped {...this.props} />
        }
      }
