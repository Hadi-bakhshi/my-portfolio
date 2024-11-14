import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function HobbyCard() {
  return (
    <Box
      sx={{
        boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
        borderRadius: '16px',
        display: 'inline-flex',
        padding: '12px 10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <Box
        sx={{
          width: '42px',
          height: '42px',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100px',
        }}
      >
        <Image src={'/travel.svg'} alt='travel' width={28} height={28} />
      </Box>
      <Typography
        sx={{
          width: '100px',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '20px',
        }}
        component='span'
      >
        Traveling
      </Typography>
    </Box>
  );
}
