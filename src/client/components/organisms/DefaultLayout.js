/* @flow */
import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../molecules/Header'
import ServiceWorkerRegister from '../atoms/ServiceWorkerRegister'

export default (props: {
  children: any,
  title?: string,
  description?: string
}) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title || 'Next PWA'}</title>
        {props.description && (
          <meta name="description" content={props.description} />
        )}
      </Head>
      <ServiceWorkerRegister />
      <Header />
      <hr />
      {props.children}
    </Fragment>
  )
}
