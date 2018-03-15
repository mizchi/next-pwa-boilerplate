/* @flow */
import React from 'react'
import DefaultLayout from '../components/organisms/DefaultLayout'
import getInitialProps from '../hoc/getInitialProps'

export default getInitialProps(async ctx => {
  await new Promise(r => setTimeout(r, 1000))
  return {
    now: Date.now()
  }
})(props => {
  return (
    <DefaultLayout title="NextPWA - Async">
      <h1>Async: {props.now}</h1>
    </DefaultLayout>
  )
})
