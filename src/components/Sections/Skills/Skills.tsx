'use client';

import Tab from '@/components/Tab/Tab';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import data from '@/Repository/content.json';
import SkillCard from '@/components/SkillCard/SkillCard';
import { Skill } from './Skills.types';
import { SearchIcon } from '@/components/Icons/General';

export default function Skills() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [filterData, setFilteredData] = useState<Skill[] | null>(null);

  const tabClickHandler = (index: number) => {
    setActiveTabIndex(index);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (activeTabIndex === 0) {
      const filteredData = data.skills.technical.filter((item) => item.name.toLowerCase().includes(event.target.value));
      setFilteredData(filteredData);
    } else {
      console.error(event.target.value);
    }
    if (event.target.value === '') {
      setFilteredData(null);
    }
  };

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
    >
      <Typography component='h1' fontWeight='600' fontSize={'28px'} lineHeight={'36px'} margin={'2rem'}>
        Skills
      </Typography>
      <Tab tabList={['Technical', 'Soft']} activeTabIndex={activeTabIndex} onClick={tabClickHandler} />
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <TextField
          id='filled-search'
          label='Search for specific skill'
          type='search'
          variant='filled'
          onChange={changeHandler}
          size='small'
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon color='var(--mui-palette-primary-main)' />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      {activeTabIndex === 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: '1rem',
            rowGap: '5rem',
            mt: '4rem',
          }}
        >
          {!filterData &&
            data.skills.technical.map((item) => {
              return <SkillCard key={item.id} imageSrc='' title={item.name} width={103} height={100} />;
            })}
          {filterData &&
            filterData.map((item) => {
              return <SkillCard key={item.id} imageSrc='' title={item.name} width={103} height={100} />;
            })}
        </Box>
      )}
      {activeTabIndex === 1 && <Typography>No data found for soft skills</Typography>}
    </Box>
  );
}
