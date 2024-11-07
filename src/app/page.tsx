import AboutMe from '@/components/Sections/AboutMe/AboutMe';
import Introduction from '@/components/Sections/Introduction/Introduction';
import { Box, Container } from '@mui/material';
import data from '@/Repository/content.json';
import SkillCard from '@/components/SkillCard/SkillCard';
export default function Home() {
  return (
    <Container maxWidth='lg' component={'main'}>
      <>
        <Introduction />
        <AboutMe />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            columnGap: '1rem',
            rowGap: '5rem',
            mt: '4rem',
          }}
        >
          {data.skills.technical.map((item) => {
            return <SkillCard key={item.id} imageSrc='' title={item.name} width={103} height={100} />;
          })}
        </Box>
      </>
    </Container>
  );
}
