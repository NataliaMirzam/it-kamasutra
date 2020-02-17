import React from 'react';
import s from './Navbar.module.css';
console.log(s);
const Navbar = () => {
    return <nav className={s.nav}>
    <div><a href="s" className={`${s.item} ${s.active}`}>Profile</a></div>
    <div><a href="s" className={s.item}>Messages</a></div>
    <div><a href="s" className={s.item}>News</a></div>
    <div><a href="s" className={s.item}>Music</a></div>
    <div><a href="s" className={s.item}>Settings</a></div>
  </nav>
}

export default Navbar;