'use client';

import Tab from '@/components/Tab/Tab';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import data from '@/Repository/content.json';
import SkillCard from '@/components/Cards/SkillCard/SkillCard';
import { Skill } from './Skills.types';
import { SearchIcon } from '@/components/Icons/General';
import SoftSkillCard from '@/components/Cards/SoftSkillCard/SoftSkillCard';
import { motion } from 'motion/react';

export default function Skills() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [filterData, setFilteredData] = useState<Skill[] | null>(null);

  const tabClickHandler = (index: number) => {
    setActiveTabIndex(index);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setFilteredData(null);
      return;
    }
    if (activeTabIndex === 0) {
      const filteredData = data.skills.technical.filter((item) => item.name.toLowerCase().includes(event.target.value));
      setFilteredData(filteredData);
    }
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
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      id='Skills'
    >
      <Typography component='h1' fontWeight='600' fontSize={'28px'} lineHeight={'36px'} my={'4rem'}>
        Skills
      </Typography>
      <Tab tabList={['Technical', 'Soft']} activeTabIndex={activeTabIndex} onClick={tabClickHandler} />
      {activeTabIndex === 0 && (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <TextField
            id='filled-search'
            label='Search for specific skill'
            type='search'
            variant='outlined'
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
      )}
      {activeTabIndex === 0 && (
        <Box>
          {!filterData &&
            data.categories.map((category) => {
              return (
                <Box
                  key={category.categoryId}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Typography mt={'4rem'} fontWeight={'bold'} color='#404040' textAlign={"center"}>
                    {category.category}
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
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
                    {data.skills.technical.map((skill) => {
                      if (skill.categoryId === category.categoryId) {
                        return (
                          <SkillCard
                            key={skill.id}
                            imageSrc={`/${skill.tag}.svg`}
                            title={skill.name}
                            width={103}
                            height={100}
                          />
                        );
                      }
                      return null;
                    })}
                  </Box>
                </Box>
              );
            })}
          <Box
            sx={{
              width: '100%',
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
            {filterData &&
              filterData.map((item) => {
                return (
                  <SkillCard key={item.id} imageSrc={`/${item.tag}.svg`} title={item.name} width={103} height={100} />
                );
              })}
          </Box>
        </Box>
      )}
      {activeTabIndex === 1 && (
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
          {data.skills.soft.map((item) => {
            return (
              <SoftSkillCard
                key={item.id}
                id={item.id}
                bgColor={item.bgColor}
                color={item.color}
                borderRadius={item.borderRadius}
                caption={item.caption}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}
