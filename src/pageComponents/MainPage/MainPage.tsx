import { TxtRotate } from '@/components/common/TxtRotate/TxtRotate';
import styles from './MainPage.module.scss';

export function MainPage() {
  return (
    <main id='mainPage' className={styles.mainPage}>
      <section id='wait' className={styles.wait}>
        <h1 className={styles.title}>Reinventing DeFi for RWAs</h1>
        <div className={styles.description}>
          The first ever <TxtRotate /> restake roll up L2 for RWAs
        </div>
        <div className={styles.soon}>Coming soon ...</div>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            preload='metadata'
            width={'100%'}
            height={'100%'}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={'/wait.mp4'} type='video/mp4' />
          </video>
        </div>
      </section>
    </main>
  );
}
