/* @flow */
import React from 'react'
import DefaultLayout from '../components/organisms/DefaultLayout'
import styled from 'styled-components'

export default () => {
  return (
    <DefaultLayout
      title="NextPWA - Index"
      description="This is top page of NextPWA"
    >
      <h1>Index</h1>
      <Layout>
        <Preview />
        <Edit />
      </Layout>
    </DefaultLayout>
  )
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'preview edit';
`

const Preview = styled.div`
  grid-area: preview;
`
const Edit = styled.div`
  grid-area: edit;
`
