import Link from 'next/link';
import Image from 'next/image';

import styles from './style.module.css';

import MailIcon from '../../assets/icons/mail.png';
import LinkedInIcon from '../../assets/icons/linkedin.png';
import MaltIcon from '../../assets/icons/malt.png';
import CVIcon from '../../assets/icons/cv.png';

const mailConf: string = process.env.MAIL ? `mailto:${process.env.MAIL}` : '';
const linkedinConf: string = process.env.LINKEDIN || '';
const maltConf: string = process.env.MALT || '';
const CVConf: string = process.env.CV || '';

const ComingSoon = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Coming Soon</h1>
    <div className={styles.social}>
      <a href={mailConf} target="_blank" rel="noreferrer">
        <Image src={MailIcon} alt="Mail" layout="fixed" width="26" height="26" />
      </a>
      <a href={linkedinConf} target="_blank" rel="noreferrer">
        <Image src={LinkedInIcon} alt="Linkedin" layout="fixed" width="26" height="26" />
      </a>
      <a href={maltConf} target="_blank" rel="noreferrer">
        <Image src={MaltIcon} alt="Malt" layout="fixed" width="26" height="26" />
      </a>
      <a href={CVConf} target="_blank" rel="noreferrer">
        <Image src={CVIcon} alt="Curriculum Vitae" layout="fixed" width="26" height="26" />
      </a>
    </div>
  </div>
);

export default ComingSoon;
