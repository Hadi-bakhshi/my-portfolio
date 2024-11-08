import { Box, Modal, Typography } from '@mui/material';
import { ExperienceDetailsModalProps } from './ExperienceDetailsModal.types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '16px',
  // border: '2px solid #000',
  // boxShadow: 24,
};

export default function ExperienceDetailsModal(props: ExperienceDetailsModalProps) {
  return (
    <Modal open={props.open} onClose={() => props.onClose()}>
      <Box sx={style}>
        {props.data.type === 'work' && <Typography>{props.data.location}</Typography>}
        {props.data.type === 'education' && <Typography>{props.data.startDate}</Typography>}
      </Box>
    </Modal>
  );
}
