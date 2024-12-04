import Box from '@mui/material/Box';
import Image from 'next/image';
// import MyPhoto from '@/public/hb.png';
import Me from '@/public/me2.webp';
import EmptyWhiteCircle from './EmptyWhiteCircle';
import { ReactIcon, CSharpIcon, DotnetIcon, NodeJsIcon, SqlServerIcon } from '@/components/Icons/Introduction';
import styles from './MyImage.module.scss';
import EmptyWhiteCircleWithShadow from './EmptyWhiteCircleWithShadow';

export default function MyImage() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          width: { xs: '290px', md: '350px' },
          height: { xs: '290px', md: '350px' },
          borderRadius: '200px',
          background: 'linear-gradient(150deg, #FEFBFF 9.69%, #2151DA 84.71%)',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          // padding: '74px 4px 13px 39px',
          zIndex: '9',
        }}
      >
        <Image className={styles.MyImage} src={Me} alt='my-photo' priority placeholder='blur' />
        <EmptyWhiteCircle className={styles.emptyLeftCircle} />
        <EmptyWhiteCircleWithShadow className={styles.emptyRightCircle} />
        <ReactIcon className={styles.reactIcon} />
        <CSharpIcon className={styles.cSharpIcon} />
        <DotnetIcon className={styles.dotNetIcon} />
        <NodeJsIcon className={styles.nodeJsIcon} />
        <SqlServerIcon className={styles.sqlServerIcon} />
        <Box component='span'></Box>
      </Box>
    </Box>
  );
}
