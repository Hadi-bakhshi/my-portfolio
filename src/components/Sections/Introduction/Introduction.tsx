import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyImage from './components/MyImage';

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
        mt: 6,
        rowGap: { xs: '2rem', md: 0 },
      }}
    >
      {/* left section */}
      <Box>
        <Typography fontSize={'36px'}>{"Hey, I'm"}</Typography>
        <Typography color='primary' fontSize={'45px'} fontWeight={'bold'}>
          Hadi Bakhshi👋
        </Typography>
        <Typography fontSize={'32px'}>A Software Engineer</Typography>
      </Box>
      {/* right section */}
      <Box>
        <MyImage />
      </Box>
    </Box>
  );
}
