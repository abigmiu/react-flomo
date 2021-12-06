import Editor from '../../components/editor/editor'
import FlomoItem from '../../components/flomo-item/flomo-item'
import ContentHeader from "../../components/content-header/content-header";
import React from "react";
export default function Content () {
    return (
        <div>
            <ContentHeader></ContentHeader>
            <Editor></Editor>
            <FlomoItem></FlomoItem>
            <FlomoItem></FlomoItem>
            <FlomoItem></FlomoItem><FlomoItem></FlomoItem>
            <FlomoItem></FlomoItem><FlomoItem></FlomoItem><FlomoItem></FlomoItem>
            <FlomoItem></FlomoItem>
            <FlomoItem></FlomoItem>
        </div>
    )
}