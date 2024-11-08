import AboutMe from '@/components/Sections/AboutMe/AboutMe';
import Introduction from '@/components/Sections/Introduction/Introduction';
import { Container } from '@mui/material';
import Skills from '@/components/Sections/Skills/Skills';

export default function Home() {
  return (
    <Container maxWidth='lg' component={'main'}>
      <Introduction />
      <AboutMe />
      <Skills />
    </Container>
  );
}
