import { Box } from '@mui/material';
import Link from 'next/link';
import { GithubIcon, SkypeIcon, TelegramIcon, LinkedIn, MailIcon, SmartPhoneIcon } from '../Icons/SocialMedia';
import { ISocialMediaProps } from './SocialMedia.types';
import styles from './SocialMedia.module.scss';

export default function SocialMediaLinks(props: ISocialMediaProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: props.direction || 'row',
        gap: '1rem',
        maxWidth: props.direction === 'row' ? '270px' : 'max-content',
      }}
    >
      <Link href={'https://github.com/Hadi-bakhshi'} target='_blank' className={styles.linkHover}>
        <GithubIcon />
      </Link>
      <Link href={'https://www.linkedin.com/in/hadi-bakhshi-aa203221b'} target='_blank' className={styles.linkHover}>
        <LinkedIn />
      </Link>
      <Link href={'mailto:hadi-bakhshi@outlook.com'} target='_blank' className={styles.linkHover}>
        <MailIcon />
      </Link>
      <Link href={'tel:00989922615295'} target='_blank' className={styles.linkHover}>
        <SmartPhoneIcon />
      </Link>
      <Link href={'https://t.me/Haamim27'} target='_blank' className={styles.linkHover}>
        <TelegramIcon />
      </Link>
      <Link href={'https://skype.com'} target='_blank' className={styles.linkHover}>
        <SkypeIcon />
      </Link>
    </Box>
  );
}
