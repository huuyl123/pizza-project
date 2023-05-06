import React from 'react';
import Image from 'next/image';
import LogoImage from '../../../public/images/LargeLogoWhite.png';
import styles from './Logo.module.css'

function Logo() {
  return (
    <div>
        <Image className={styles.photoSize} src={LogoImage} alt='logo' />
    </div>
  )
}

export default Logo