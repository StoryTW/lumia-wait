'use client';
import React, { FC } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href='/'>
          <Image src='/logo.svg' alt='logo' width={150} height={40} quality={100} priority />
        </Link>
      </div>
    </header>
  );
};
