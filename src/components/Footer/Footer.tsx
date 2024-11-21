import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.copyRight}>© 2024 Hadi Bakhshi</div>
        <div className={styles.mediaLinks}>
          <SocialMediaLinks direction='row' />
        </div>
      </div>
    </footer>
  );
}
