import { Box, Button, Modal, Typography } from '@mui/material';
import { ProjectDetailModalProps } from './ProjectDetailModal.types';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons/SocialMedia';
import { EyeIcon } from '@/components/Icons/General';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '16px',
  //   width: 'max-content',
  //   minWidth: '280px',
  maxWidth: '733px',
};

export default function ProjectDetailModal(props: ProjectDetailModalProps) {
  return (
    <Modal open={props.open} onClose={() => props.onClose()}>
      <Box sx={style}>
        {props.screenShotImage && <Image src={props.screenShotImage} alt='screen-shot' width={250} height={250} />}
        <Box>
          <Typography component='h2' fontSize={22} fontWeight={400} lineHeight='28px'>
            {props.projectName}
          </Typography>
          <Typography fontSize={14} fontWeight={400} lineHeight='16px' py='20px' textAlign='justify'>
            {props.description}
          </Typography>
        </Box>
        <Box>
          <Typography component='h4' fontSize={16} fontWeight={400} lineHeight='28px' pb={2}>
            Technologies
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              pb: '16px',
            }}
          >
            {props.technologies?.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    background: 'linear-gradient(254deg, rgba(140, 151, 189, 0.24) 4.22%, #CFD1DA 100%)',
                    width: 'max-content',
                    padding: '4px 8px',
                    borderRadius: '16px',
                  }}
                >
                  <Image src={`/${item.tag}`} alt={item.name} width={50} height={50} />
                  <Typography fontSize={12} textAlign={'center'} fontWeight={400}>
                    {item.name}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              gap: '0.5rem',
              pt: '16px',
            }}
          >
            {/* TODO */}
            {props.repositoryLink && (
              <Button variant='contained' startIcon={<GithubIcon color='inherit' width={18} height={18} />}>
                Github Repository
              </Button>
            )}
            {props.liveDemoLink && (
              <Button variant='contained' startIcon={<EyeIcon color='inherit' width={18} height={18} />}>
                Live Demo
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
