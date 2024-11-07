import { Box, Typography } from '@mui/material';
import { SkillCardProps } from './SkillCard.types';
import Image from 'next/image';
import styles from './SkillCard.module.scss';

export default function SkillCard(props: SkillCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--mui-palette-background-paper)',
        width: '124px',
        height: '130px',
        position: 'relative',
        boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
        borderRadius: '16px',
      }}
    >
      {props.imageSrc !== '' && (
        <Image
          src={props.imageSrc}
          alt={props.title}
          width={props.width}
          height={props.height}
          className={styles.skillCardImg}
        />
      )}
      {props.imageSrc === '' && (
        <Box
          sx={{
            width: props.width,
            height: props.height,
          }}
          className={styles.skillCardImg}
        ></Box>
      )}
      <Box sx={{ paddingTop: '3.5rem' }}>
        <Typography component='h6' textAlign={'center'} px={'4px'}>
          {props.title}
        </Typography>
      </Box>
    </Box>
  );
}
