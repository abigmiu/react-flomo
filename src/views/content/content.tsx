import Editor from '../../components/editor/editor'
import FlomoItem from '../../components/flomo-item/flomo-item'
import ContentHeader from '../../components/content-header/content-header'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import './style.css'
export default function Content() {
  const [itemsWrapperHeight, setItemsWrapperHeight] = useState(0)

  useEffect(() => {
    const mainTop = (
      document.querySelector('.main') as HTMLElement
    ).getBoundingClientRect().top
    const mainHeight = (
      document.querySelector('.main') as HTMLElement
    ).getBoundingClientRect().height
    const wrapperTop = (
      document.querySelector('.items-wrapper') as HTMLElement
    ).getBoundingClientRect().top
    const height = mainHeight - (wrapperTop - mainTop)

    setItemsWrapperHeight(height)
  }, [])

  return (
    <Fragment>
      <ContentHeader></ContentHeader>
      <Editor></Editor>
      <div
        className="mt-5 overflow-y-auto items-wrapper"
        style={{ height: `${itemsWrapperHeight}px` }}
      >
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
        <FlomoItem></FlomoItem>
      </div>
    </Fragment>
  )
}
