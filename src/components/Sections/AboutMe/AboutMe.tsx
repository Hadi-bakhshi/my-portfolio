import { Box, Typography } from '@mui/material';
import data from '@/Repository/content.json';
import styles from './AboutMe.module.scss';
import Image from 'next/image';
import MyPhoto from '@/public/MyImage.webp';
import * as motion from 'motion/react-client';

export default function AboutMe() {
  return (
    <Box
      component={motion.section}
      className={styles.sectionWrapper}
      id='AboutMe'
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Typography component='h1' fontWeight='600' fontSize={'28px'} lineHeight={'36px'} margin={'2rem'}>
        About Me
      </Typography>
      <Box className={styles.aboutMe}>
        <Box className={styles.aboutMeWrapper}>
          <Box className={styles.titleAndDescription}>
            <Typography component='h2' fontWeight={'500'} lineHeight={'24px'}>
              A little about me
            </Typography>
            <Typography fontWeight={'400'} lineHeight={'22px'} textAlign={'justify'} fontSize={'14px'}>
              {data.aboutMe.description.map((item, index) => {
                return (
                  <span key={index}>
                    <br />
                    <br />
                    <>{item}</>
                  </span>
                );
              })}
            </Typography>
          </Box>
          <Image src={MyPhoto} width={200} height={200} alt='My-photo' className={styles.myPhoto} />
        </Box>
      </Box>
    </Box>
  );
}
