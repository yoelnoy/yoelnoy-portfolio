import React from 'react'
import './Footer.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer({ fotterScroll, setFooterScroll }) {

  const scrollToTop = () => {
    setFooterScroll(fotterScroll => !fotterScroll)
  }
  return (
    <div className="footer__container">
      <div onClick={scrollToTop} className="footer__scroll-up">
        <MdKeyboardArrowUp />
      </div>
      <div className="footer__social-links">
        <a target="_blank" href="https://www.linkedin.com/in/yoelnoy/"> <FaLinkedinIn /></a>
        <a target="_blank" href="https://github.com/yoelnoy"> <AiFillGithub /></a>
      </div>
    </div>
  )
}
