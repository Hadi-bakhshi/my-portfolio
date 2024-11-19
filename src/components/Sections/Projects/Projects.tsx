import ProjectCard from '@/components/Cards/ProjectCard/ProjectCard';
import data from '@/Repository/content.json';
import { Box, Typography } from '@mui/material';

export default function Projects() {
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
      id='Projects'
    >
      <Typography component='h1' fontWeight='600' fontSize={'28px'} lineHeight={'36px'} my={'4rem'}>
        Projects
      </Typography>
      <Box>
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
