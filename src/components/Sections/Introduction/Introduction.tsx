import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyImage from './components/MyImage';
import SocialMediaLinks from '@/components/SocialMediaLinks/SocialMediaLinks';

export default function Introduction() {
  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        mt: 15,
        rowGap: { xs: '2rem', md: 0 },
      }}
    >
      {/* left section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        <Box>
          <Typography sx={{ fontSize: { xs: '28px', md: '36px' } }}>{"Hey, I'm"}</Typography>
          <Typography
            color='primary'
            // fontSize={'45px'}
            fontWeight={'bold'}
            sx={{ fontSize: { xs: '38px', md: '45px' } }}
          >
            Hadi Bakhshi👋
          </Typography>
          <Typography sx={{ fontSize: { xs: '26px', md: '32px' } }}>A Software Engineer</Typography>
        </Box>
        <SocialMediaLinks direction='row' />
      </Box>
      {/* right section */}
      <Box>
        <MyImage />
      </Box>
    </Box>
  );
}
