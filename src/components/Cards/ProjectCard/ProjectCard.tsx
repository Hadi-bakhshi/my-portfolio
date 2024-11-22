'use client';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import ProjectDetailModal from './components/ProjectDetailModal';
import { ProjectCardProps } from './ProjectCard.types';
import { GithubIcon } from '@/components/Icons/SocialMedia';
import { EyeIcon } from '@/components/Icons/General';

export default function ProjectCard(props: ProjectCardProps) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  const urlNavigatorHandler = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        width: '280px',
        height: '280px',
        borderRadius: '16px',
        backgroundColor: 'var(--mui-palette-background-paper)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8px 12px',
        boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(254deg, rgba(140, 151, 189, 0.24) 4.22%, #00579255 100%)',
          width: '100%',
          minHeight: '40px',
          borderRadius: '16px',
        }}
      >
        {props.repositoryLink && (
          <Tooltip title='Github Repository' arrow>
            <IconButton onClick={() => urlNavigatorHandler(props.repositoryLink!)} size='small'>
              <GithubIcon />
            </IconButton>
          </Tooltip>
        )}
        {props.liveDemoLink && (
          <Tooltip title='Live Demo' arrow>
            <IconButton onClick={() => urlNavigatorHandler(props.liveDemoLink!)} size='small'>
              <EyeIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1rem',
        }}
      >
        <Typography
          component='h6'
          fontSize={18}
          fontWeight={400}
          lineHeight='28px'
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', pt: '1rem' }}
        >
          {props.projectName}
        </Typography>
        <Typography fontSize={12} fontWeight={400} lineHeight='16px' textAlign={'justify'}>
          {props.summary}
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Button variant='contained' sx={{ width: '100%' }} onClick={() => setIsDetailModalOpen(true)}>
          More about this project
        </Button>
      </Box>
      <ProjectDetailModal
        open={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        projectName={props.projectName}
        description={props.description}
        liveDemoLink={props.liveDemoLink}
        repositoryLink={props.repositoryLink}
        screenShotImage={props.screenShotImage}
        technologies={props.technologies}
      />
    </Box>
  );
}
