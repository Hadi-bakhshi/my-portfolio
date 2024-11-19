'use client';
import { Box, Button, Typography } from '@mui/material';
import ExperienceDetailsModal from './components/ExperienceDetailsModal';
import { useState } from 'react';
import { ExperienceCardProps } from './ExperienceCard.types';
import { EducationExperience, ExperienceDetailData, WorkExperience } from './components/ExperienceDetailsModal.types';
import { MoreDetailsIcon } from '@/components/Icons/General';

const getExperienceData = (type: 'work' | 'education', detail: Omit<ExperienceDetailData, 'type'>) => {
  return type === 'work'
    ? ({ ...detail, type: 'work' } as WorkExperience)
    : ({ ...detail, type: 'education' } as EducationExperience);
};

// TODO : refactor

export default function ExperienceCard(props: ExperienceCardProps) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  return (
    <Box
      sx={{
        backgroundColor: 'var(--mui-palette-background-paper)',
        width: '220px',
        height: '190px',
        position: 'relative',
        boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
        borderRadius: '16px',
        padding: '1rem',
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Typography
            component='h6'
            textAlign={'left'}
            px={'4px'}
            fontWeight='700'
            lineHeight={'20px'}
            letterSpacing={'0.1px'}
          >
            {props.type === 'education' && props.universityName}
            {props.type === 'work' && props.companyName}
          </Typography>
          <Typography fontSize={'12px'} fontWeight={'400'} lineHeight={'16px'}>
            {props.type === 'work' && props.role}
            {props.type === 'education' && props.degree}
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Button
            variant='contained'
            startIcon={<MoreDetailsIcon />}
            sx={{ width: '100%' }}
            onClick={() => setIsDetailModalOpen(true)}
          >
            More Details
          </Button>
        </Box>
      </Box>

      <ExperienceDetailsModal
        open={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        data={getExperienceData(props.type, props.detail)}
        title={props.type === 'work' ? props.role : props.degree}
      />
    </Box>
  );
}
