'use client'
import Image from 'next/image';
import Link from 'next/link';
import './Header.scss';
import { useState } from 'react';


export default function Header({settings}) {
    const [mobileOpen, setMobileOpen] = useState(false);



  return (
    <header className='header-container container flex'>
      <button
  className={`hamburger ${mobileOpen ? 'active' : ''}`}
  onClick={() => setMobileOpen((prev) => !prev)}
  aria-label="Toggle menu"
>
  <span></span>
  <span></span>
  <span></span>
</button>


        <ul className={`heading-nav flex flex-wrap ${
            mobileOpen ? "openMenu" : "collapsed"
          }`}>
          {settings?.headingMenu?.map((item, index) => (
            <li key={index}>
              <a href={item.menuItemUrl}>{item.menuItemName}</a>
            </li>
          ))}
        </ul>
      {settings?.headingLogo && (
        <Link className='headingLogoLink' href={"/"}>        
        <Image 
        src={settings.headingLogo.asset.url} 
        alt="Room Up Front Logo" 
        width={500} 
        height={300} 
      />
      </Link>

      )}
    </header>
  );
}
