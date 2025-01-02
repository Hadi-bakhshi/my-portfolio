'use client';
import Tab from '@/components/Tab/Tab';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import data from '@/Repository/content.json';
import ExperienceCard from '@/components/Cards/ExperienceCard/ExperienceCard';
import { motion } from 'motion/react';

export default function Experiences() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabClickHandler = (index: number) => {
    setActiveTabIndex(index);
  };
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
      id='Experiences'
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        component='h1'
        fontWeight='600'
        fontSize={'28px'}
        lineHeight={'36px'}
        my={'4rem'}
        textAlign={'center'}
      >
        Work and Education Experiences
      </Typography>
      <Tab tabList={['Work', 'Education']} activeTabIndex={activeTabIndex} onClick={tabClickHandler} />
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
        {activeTabIndex === 0 &&
          data.experiences.work.map((item) => {
            return (
              <ExperienceCard
                key={item.id}
                type='work'
                companyName={item.companyName}
                role={item.role}
                detail={item.detail}
              />
            );
          })}

        {activeTabIndex === 1 &&
          data.experiences.education.map((item) => {
            return (
              <ExperienceCard
                key={item.id}
                type='education'
                universityName={item.universityName}
                degree={item.degree}
                detail={item.detail}
              />
            );
          })}
      </Box>
    </Box>
  );
}
