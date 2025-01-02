import HobbyCard from '@/components/Cards/HobbyCard/HobbyCard';
import data from '@/Repository/content.json';
import { Box, Typography } from '@mui/material';
import * as motion from 'motion/react-client';

export default function HobbiesAndInterests() {
  return (
    <Box
      component={motion.section}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        mb: 4,
      }}
      id='Interests'
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        component='h1'
        fontWeight='600'
        fontSize={'28px'}
        lineHeight={'36px'}
        my={'4rem'}
        textAlign={'center'}
      >
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
