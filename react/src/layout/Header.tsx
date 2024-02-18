import React, { useEffect } from 'react'
import module from '../css/header.module.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LuShare2 } from "react-icons/lu";
import { PiListFill } from "react-icons/pi";

interface Props { }

function Header(props: Props) {
  const { } = props


  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector("body");
      if (headerElement) {
        if (window.scrollY > 0) {
          headerElement?.classList.add(module.scrolled);
        } else {
          headerElement?.classList.remove(module.scrolled);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className='fixed-top'>
      <Navbar id="hd" className={`px-3 d-flex justify-content-center align-items-center bg-light position-relative ${module.hd}`}>
        <Nav>
          <Nav.Link className={module.gnb1} href="#mainbanner">
            <svg viewBox="0 0 93 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FF153C"><path d="M60.674 13.318l4.493 8.996h6.969V1.208h-6.661v8.786a.588.588 0 01-.458.57.598.598 0 01-.666-.307l-4.506-9.049H52.85v21.106h6.692v-8.736a.58.58 0 01.455-.572.579.579 0 01.678.312zM49.852 1.208h-7.316v21.106h7.316V1.208zM74.291 9.764v3.89c0 3.784 1.435 6.52 4.269 8.13 4.517 2.569 11.018.983 13.857-1.11V10.85H85.81v6.177l-.127.049c-.634.245-2.134.51-3.245-.248-.856-.582-1.294-1.626-1.294-3.104v-4.35c0-1.368.616-2.253 1.771-2.553 1.232-.306 2.424.365 2.913 1.638l6.403-3.407C90.203 1.545 86.892.667 84.09.667c-.43 0-.85.021-1.253.055-2.368.21-4.311.973-5.894 2.332-1.682 1.436-2.652 3.882-2.652 6.71zM18.494 1.208H.334v6.178H5.8v14.928h7.225V7.386h5.469V1.208zM33.485 1.208l-4.576 14.124a.573.573 0 01-.653.401.583.583 0 01-.502-.582V1.205h-6.932v21.121h13.119l7.178-21.105-7.634-.013z"></path></g></svg>
            <span>X</span> <img src="./img/logo/hite.png" alt="" className={module.hite} /></Nav.Link>
          <Nav.Link className={module.gnb2} href="#eventswiper">혼맥믈리에 베스트</Nav.Link>
          <h1 className={module.h1}><Navbar.Brand className={`${module.logo} position-absolute`} href="#home"></Navbar.Brand></h1>
          <Nav.Link className={module.gnb3} href="#mainswiper">술알못이 추천</Nav.Link>
          <Nav.Link className={module.gnb4} href="#eventbanner">같이가자! 맥주견학</Nav.Link>
        </Nav>
        <PiListFill className={`${module.listicon} position-absolute`} />
        <LuShare2 className={`${module.shareicon} position-absolute`} />
      </Navbar>
    </div>
  )
}

export default Header

