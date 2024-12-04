import { Box, Typography } from '@mui/material';
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
      <Link
        href={'https://github.com/Hadi-bakhshi'}
        target='_blank'
        className={styles.linkHover}
        aria-label='Github link'
      >
        <GithubIcon />
        <Typography component='span'>Github</Typography>
      </Link>
      <Link
        href={'https://www.linkedin.com/in/hadi-bakhshi-aa203221b'}
        target='_blank'
        className={styles.linkHover}
        aria-label='LinkedIn link'
      >
        <LinkedIn />
        <Typography component='span'>LinkedIn</Typography>
      </Link>
      <Link
        href={'mailto:hadi-bakhshi@outlook.com'}
        target='_blank'
        className={styles.linkHover}
        aria-label='Mail link'
      >
        <MailIcon />
        <Typography component='span'>Mail</Typography>
      </Link>
      <Link href={'tel:00989922615295'} target='_blank' className={styles.linkHover} aria-label='My phone number'>
        <SmartPhoneIcon />
        <Typography component='span'>Phone</Typography>
      </Link>
      <Link href={'https://t.me/Haamim27'} target='_blank' className={styles.linkHover} aria-label='Telegram link'>
        <TelegramIcon />
        <Typography component='span'>Telegram</Typography>
      </Link>
      <Link href={'https://skype.com'} target='_blank' className={styles.linkHover} aria-label='Skype link'>
        <SkypeIcon />
        <Typography component='span'>Skype</Typography>
      </Link>
    </Box>
  );
}
