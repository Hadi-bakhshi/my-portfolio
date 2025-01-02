import Box from '@mui/material/Box';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import Me from '@/public/me2.webp';
import EmptyWhiteCircle from './EmptyWhiteCircle';
import { ReactIcon, CSharpIcon, DotnetIcon, NodeJsIcon, SqlServerIcon } from '@/components/Icons/Introduction';
import styles from './MyImage.module.scss';
import EmptyWhiteCircleWithShadow from './EmptyWhiteCircleWithShadow';

const animatedStyles = {
  initial: { scale: 0.5, rotate: 0, opacity: 0 },
  whileInView: { scale: 1, rotate: 360, opacity: 1 },
  transition: { duration: 1.5, ease: 'easeInOut' },
};

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
          zIndex: '9',
        }}
      >
        <Image className={styles.MyImage} src={Me} alt='my-photo' priority placeholder='blur' />
        <EmptyWhiteCircle className={styles.emptyLeftCircle} />
        <EmptyWhiteCircleWithShadow className={styles.emptyRightCircle} />

        {/* Animated Icons */}
        <motion.div
          initial={animatedStyles.initial}
          whileInView={animatedStyles.whileInView}
          transition={animatedStyles.transition}
          // viewport={{ once: true }}
          className={styles.reactIcon}
        >
          <ReactIcon />
        </motion.div>
        <motion.div
          initial={animatedStyles.initial}
          whileInView={animatedStyles.whileInView}
          transition={animatedStyles.transition}
          // viewport={{ once: true }}
          className={styles.cSharpIcon}
        >
          <CSharpIcon />
        </motion.div>
        <motion.div
          initial={animatedStyles.initial}
          whileInView={animatedStyles.whileInView}
          transition={animatedStyles.transition}
          // viewport={{ once: true }}
          className={styles.dotNetIcon}
        >
          <DotnetIcon />
        </motion.div>
        <motion.div
          initial={animatedStyles.initial}
          whileInView={animatedStyles.whileInView}
          transition={animatedStyles.transition}
          // viewport={{ once: true }}
          className={styles.nodeJsIcon}
        >
          <NodeJsIcon />
        </motion.div>
        <motion.div
          initial={animatedStyles.initial}
          whileInView={animatedStyles.whileInView}
          transition={animatedStyles.transition}
          // viewport={{ once: true }}
          className={styles.sqlServerIcon}
        >
          <SqlServerIcon />
        </motion.div>
      </Box>
    </Box>
  );
}
