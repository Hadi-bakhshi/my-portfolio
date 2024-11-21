'use client';
import Image from 'next/image';
import styles from './NavigationBar.module.scss';
// import CodeLabIcon from '@/public/codelab.svg';
import HLogo from '@/public/hLogo.png';
import {
  BodyPartMuscleIcon,
  CodeFolderIcon,
  DocumentIcon,
  FavoriteSquareIcon,
  HomeIcon,
  // SidebarLeftIcon,
  UserListIcon,
  WorkIcon,
} from '@/components/Icons/General';
import Link from 'next/link';
import { Button, IconButton, Tooltip } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

const sections = [
  { name: 'Home', icon: <HomeIcon color='inherit' /> },
  { name: 'AboutMe', icon: <UserListIcon color='inherit' /> },
  { name: 'Projects', icon: <CodeFolderIcon color='inherit' /> },
  { name: 'Skills', icon: <BodyPartMuscleIcon color='inherit' /> },
  { name: 'Experiences', icon: <WorkIcon color='inherit' /> },
  { name: 'Interests', icon: <FavoriteSquareIcon color='inherit' /> },
];

function NavigationBar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.sideBar}>
          <Sidebar list={sections} />
        </div>
        <div className={styles.logoWrapper}>
          <Image src={HLogo} alt='hadi-bakhshi-portfolio-icon' width={38} height={38} />
          {/* <Typography component='h1' color='#3A0099' fontWeight={500}>
            Code Lab
          </Typography> */}
        </div>
        <div className={styles.sectionsWrapper}>
          {sections.map((item, index) => {
            return (
              <div key={index + 1}>
                <Link href={item.name !== 'Home' ? `#${item.name}` : ''}>
                  <Button startIcon={item.icon} color='primary'>
                    {item.name}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.emptyElement}>
          <Tooltip title='Download Resume' arrow>
            <IconButton color='primary'>
              <DocumentIcon color='inherit' />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
export default NavigationBar;
