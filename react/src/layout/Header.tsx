import React from 'react'
import module from '../css/header.module.scss';
import { Share } from 'react-bootstrap-icons';

interface Props { }

function Header(props: Props) {
  const { } = props

  return (
    <header id={module.hd}>
      <h1>로고</h1>
      <ul>
        <li>OTT X HITE</li>
        <li>술알못이 추천</li>
        <li>혼맥믈리에 베스트</li>
        <li>같이가자! 맥주견학</li>
      </ul>
      <Share />
    </header>
  )
}

export default Header