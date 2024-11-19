import { Box, IconButton, Modal, Typography } from '@mui/material';
import { ExperienceDetailsModalProps } from './ExperienceDetailsModal.types';
import { CancelIcon } from '@/components/Icons/General';

export default function ExperienceDetailsModal(props: ExperienceDetailsModalProps) {
  return (
    <Modal open={props.open} onClose={() => props.onClose()}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: '16px',
          //   width: 'max-content',
          //   minWidth: '280px',
          width: '95%',
          maxWidth: { xs: '100%', md: '733px' },
          maxHeight: '90vh',
          overflow: 'auto',
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Typography fontWeight={700} lineHeight='24px' mt={'2rem'}>
            {props.title}
          </Typography>
          {props.data.type === 'education' && (
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.3rem', mt: '2rem' }}>
              <Typography fontWeight={400}>Start studying from</Typography>
              <Typography fontWeight={500}>{props.data.startDate}</Typography>
            </Box>
          )}
          {props.data.type === 'work' && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mt: '2rem' }}>
              <Typography fontWeight={600} lineHeight={'24px'} color='primary'>
                Location
              </Typography>
              <Typography ml={'1rem'}>{props.data.location}</Typography>
              <Typography fontWeight={600} lineHeight={'24px'} color='primary'>
                Achievements
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {props.data.achievements.map((item, index) => {
                  return (
                    <Box key={index + 1} sx={{ ml: '1rem' }}>
                      {index + 1}- {item}
                    </Box>
                  );
                })}
              </Box>
              <Typography fontWeight={600} lineHeight={'24px'} color='primary'>
                Duration
              </Typography>
              <Typography ml={'1rem'}>
                {props.data.startDate} - {props.data.endDate || 'Present'}
              </Typography>
            </Box>
          )}
        </Box>
        <IconButton
          sx={{ position: 'absolute', left: '8px', top: '8px' }}
          onClick={() => props.onClose()}
          color='error'
          size='small'
        >
          <CancelIcon color='inherit' />
        </IconButton>
      </Box>
    </Modal>
  );
}
