import { Box, Typography } from '@mui/material';
import type { SoftSkillCardProps } from './SoftSkillCard.types';

export default function SoftSkillCard(props: SoftSkillCardProps) {
  return (
    <Box
      sx={{
        width: '124px',
        height: '130px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: props.borderRadius,
        backgroundColor: props.bgColor || '#ccc',
        // filter: 'drop-shadow(4px 2px 1px #8a8a8a)',
        filter: 'drop-shadow(2px 4px 3px #8a8a8a)',
        // padding:"0.5rem"
      }}
    >
      <Typography sx={{ fontWeight: 500, color: props.color || '#000', textAlign: 'center' }}>
        {props.caption}
      </Typography>
    </Box>
  );
}
