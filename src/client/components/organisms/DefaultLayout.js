/* @flow */
import React from 'react'
import Header from '../molecules/Header'

export default (props: { children: any }) => {
  return (
    <div>
      <Header />
      <hr />
      {props.children}
    </div>
  )
}
