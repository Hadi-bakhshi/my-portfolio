import HobbyCard from '@/components/Cards/HobbyCard/HobbyCard';
import data from '@/Repository/content.json';
import { Box, Typography } from '@mui/material';

export default function HobbiesAndInterests() {
  return (
    <Box
      component='section'
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Typography component='h1' fontWeight='600' fontSize={'28px'} lineHeight={'36px'} margin={'2rem'}>
        Hobbies and Interests
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '33px',
        }}
      >
        {data.interestsAndHobbies?.map((item) => {
          return <HobbyCard key={item.id} bgColor={item.bgColor} imageSrc={item.img} name={item.name} />;
        })}
      </Box>
    </Box>
  );
}
