import ProjectCard from '@/components/Cards/ProjectCard/ProjectCard';
import data from '@/Repository/content.json';
import { Box, Typography } from '@mui/material';
import * as motion from 'motion/react-client';

export default function Projects() {
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
      }}
      id='Projects'
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Typography component='h1' fontWeight='600' fontSize={'28px'} lineHeight={'36px'} my={'4rem'}>
        Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '1rem',
          rowGap: '5rem',
          mt: '2rem',
        }}
      >
        {data.projects?.map((item) => {
          return (
            <ProjectCard
              description={item.description}
              liveDemoLink={item.liveDemoLink}
              projectName={item.projectName}
              repositoryLink={item.repositoryLink}
              screenShotImage={item.screenShotImage}
              summary={item.summary}
              technologies={item.technologies}
              key={item.id}
            />
          );
        })}
      </Box>
    </Box>
  );
}
