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
        height: '330px',
        borderRadius: '16px',
        backgroundColor: 'var(--mui-palette-background-paper)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '8px 18px',
        position: 'relative',
        boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(254deg, rgba(140, 151, 189, 0.24) 4.22%, #CFD1DA 100%)',
          width: '253px',
          height: '70px',
          top: '18px',
          borderRadius: '16px',
          px: '4px',
        }}
      >
        {props.repositoryLink && (
          <Tooltip title='Github Repository' arrow>
            <IconButton onClick={() => urlNavigatorHandler(props.repositoryLink!)}>
              <GithubIcon />
            </IconButton>
          </Tooltip>
        )}
        {props.liveDemoLink && (
          <Tooltip title='Live Demo' arrow>
            <IconButton onClick={() => urlNavigatorHandler(props.liveDemoLink!)}>
              <EyeIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography component='h6' fontSize={22} fontWeight={400} lineHeight='28px'>
          {props.projectName}
        </Typography>
        <Typography
          fontSize={12}
          fontWeight={400}
          lineHeight='16px'
          py='18px'
          textAlign='justify'
          //   sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
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
