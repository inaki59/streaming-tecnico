import React from 'react'
import data from '../data/sample.json';
import { ContentList } from '../components/ContentList';
export const Series = () => {
  return (
    <ContentList data={data} type="series" />
  )
}
