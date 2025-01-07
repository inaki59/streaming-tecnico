import React from 'react'
import { ContentList } from '../components/ContentList'
import data from '../data/sample.json';
export const Movies = () => {
  return (
    <ContentList data={data} type="movie" />

  )
}
