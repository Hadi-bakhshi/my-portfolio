import AboutMe from '@/components/Sections/AboutMe/AboutMe';
import Introduction from '@/components/Sections/Introduction/Introduction';
import { Container } from '@mui/material';
import Skills from '@/components/Sections/Skills/Skills';
import Experiences from '@/components/Sections/Experiences/Experiences';
import Projects from '@/components/Sections/Projects/Projects';
import HobbiesAndInterests from '@/components/Sections/HobbiesAndInterests/HobbiesAndInterests';

export default function Home() {
  return (
    <Container maxWidth='lg' component={'main'}>
      <Introduction />
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />
      <HobbiesAndInterests />
    </Container>
  );
}
  