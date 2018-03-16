/* @flow */
import React, { Fragment } from 'react'
import styled from 'styled-components'
import getInitialProps from '../hoc/getInitialProps'
import DefaultLayout from '../components/organisms/DefaultLayout'
import compose from 'recompose/compose'

async function getTopStoryIds() {
  const res = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  )
  return res.json()
}

async function getStory(id: string) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  )
  return res.json()
}

async function getStories(ids: string[]): Promise<any[]> {
  return Promise.all(ids.map(id => getStory(id)))
}

export default getInitialProps(
  async ctx => {
    console.time('HN:getInitialProps')
    const topStoryIds = await getTopStoryIds()
    const stories = await getStories(topStoryIds.slice(0, 10))
    console.timeEnd('HN:getInitialProps')
    return {
      topStoryIds: topStoryIds,
      stories
    }
  },
  {
    clientOnly: true
  }
)(props => {
  return (
    <DefaultLayout title="NextPWA - HackerNews" description="Hacker News">
      {props.__loading ? (
        'Loading...'
      ) : (
        <Fragment>
          <h1>Hacker News</h1>
          <ul>
            {props.stories.map(story => {
              return (
                <li key={story.id}>
                  <a href={story.url}>{story.title}</a>
                </li>
              )
            })}
          </ul>
        </Fragment>
      )}
    </DefaultLayout>
  )
})
