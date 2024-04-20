"use client";

import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <header>
        <Link href="/" className={styles.titleH1Link}><h1 className={styles.titleH1}>子供と一緒に電車デビュー</h1></Link>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)} className={styles.titleH1Nav}><MenuIcon /></IconButton>
      </header>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button key={'HOME'}>
            <Link href="/">
              <ListItemText primary={'HOME'} />
            </Link>
          </ListItem>
          <ListItem button key={'電車スポット'}>
            <Link href="/map">
              <ListItemText primary={'電車スポット'} />
            </Link>
          </ListItem>
          <ListItem button key={'管理者'}>
            <Link href="/introduction">
              <ListItemText primary={'管理者'} />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};


export default Header;
