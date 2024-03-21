import React, { useState, useEffect } from 'react';
import styles from "@/components/Contact.module.css";
import { FaRegCircleXmark } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      setClosing(false);
      onClose();
    }, 300);
  };

  return (
    <div className={styles.container} onClick={handleClose}>
      <div className={`${styles.maincont} ${show ? styles.show : ''} ${closing ? styles.closing : ''}`}>
      <div className={styles.gola}></div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <FaRegCircleXmark className={styles.closeButton} onClick={handleClose} size={25} style={{ cursor: 'pointer' }} />
        </div>
        <div className={styles.logo}>
          <span style={{ fontSize: '1.4rem' }}><i>Abhyudaya</i></span>
          <span style={{ color: '#9d00ff' }}>E</span>lite
        </div>
        <h2>Got something on your mind? <br /> Stay connected with us.</h2>
        <div className={styles.contactus}>
          <h2>Contact Us</h2>
          <h3> <BsFillTelephoneInboundFill size={14} style={{ marginRight: '0.5rem' }} /> +44 454 7800 112</h3>
          <h3><MdMarkEmailUnread size={16} style={{ marginRight: '0.5rem' }} /> infotech@abhyudaya.com</h3>
          <h3><ImLocation size={16} style={{ marginRight: '0.5rem' }} /> 50 Wall Street Suite, 44150
            Ohio, United States</h3>
        </div>
        <div className={styles.icon}>
          <FaInstagram size={25} style={{ marginRight: '1rem' }} />
          <FaGithub size={25} style={{ marginRight: '1rem' }} />
          <FaLinkedin size={25} style={{ marginRight: '1rem' }} />
        </div>
      </div>
    </div>
  )
}

export default Contact;