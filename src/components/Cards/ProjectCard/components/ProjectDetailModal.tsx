import { Box, Button, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import { ProjectDetailModalProps } from './ProjectDetailModal.types';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons/SocialMedia';
import { CancelIcon, EyeIcon } from '@/components/Icons/General';

export default function ProjectDetailModal(props: ProjectDetailModalProps) {
  const urlNavigatorHandler = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

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
          width: '95%',
          maxWidth: { xs: '100%', md: '733px' },
          maxHeight: '90vh',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{ position: 'relative', width: '100%', height: '100%', maxHeight: '80vh', overflow: 'auto', px: '1rem' }}
        >
          {props.screenShotImage && <Image src={props.screenShotImage} alt='screen-shot' width={250} height={250} />}
          <Box sx={{ position: 'relative', width: '100%' }}>
            <Typography component='h2' fontSize={22} fontWeight={400} lineHeight='28px' mt={'1rem'}>
              {props.projectName}
            </Typography>
            <Typography fontSize={14} fontWeight={400} lineHeight='18px' py='20px' textAlign='justify'>
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
                      padding: '8px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    {item.tag && (
                      <Tooltip title={item.name} arrow>
                        <Image src={`/${item.tag}.svg`} alt={item.name} width={50} height={50} />
                      </Tooltip>
                    )}
                    {!item.tag && (
                      <Typography
                        fontSize={12}
                        textAlign={'center'}
                        fontWeight={400}
                        sx={{
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.name}
                      </Typography>
                    )}
                    {/* <Typography fontSize={12} textAlign={'center'} fontWeight={400}>
                    {item.name}
                  </Typography> */}
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
                gap: '0.5rem',
                pt: '16px',
              }}
            >
              {/* TODO */}
              {props.repositoryLink && (
                <Button
                  variant='contained'
                  startIcon={<GithubIcon color='inherit' width={18} height={18} />}
                  onClick={() => urlNavigatorHandler(props.repositoryLink!)}
                >
                  Github Repository
                </Button>
              )}
              {props.liveDemoLink && (
                <Button
                  variant='contained'
                  startIcon={<EyeIcon color='inherit' width={18} height={18} />}
                  onClick={() => urlNavigatorHandler(props.liveDemoLink!)}
                >
                  Live Demo
                </Button>
              )}
            </Box>
          </Box>
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
