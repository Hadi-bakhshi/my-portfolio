import { Box, Button } from '@mui/material';
import { TabProps } from './Tab.types';

export default function Tab(props: TabProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: 'var(--mui-palette-background-paper)',
        width: 'max-content',
        padding: '10px 16px',
        borderRadius: '100px',
      }}
    >
      {props.tabList?.map((item, index) => {
        if (!props.activeTabIndex) {
        }
        return (
          <Button
            key={index}
            variant={props.activeTabIndex === index ? 'contained' : 'text'}
            onClick={() => props.onClick(index)}
          >
            {item}
          </Button>
        );
      })}
    </Box>
  );
}
