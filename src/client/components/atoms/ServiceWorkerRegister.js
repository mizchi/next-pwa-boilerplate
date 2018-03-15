/* @flow */
import React from 'react'

let _doneOnce = false

export default class extends React.PureComponent<{}> {
  componentDidMount() {
    if ('serviceWorker' in navigator && navigator.serviceWorker) {
      if (_doneOnce) {
        return
      }

      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('service worker registration successful')
          _doneOnce = true
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }
  render() {
    return ''
  }
}
