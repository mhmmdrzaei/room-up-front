import Image from 'next/image';
import './Footer.scss'
import { PortableText } from 'next-sanity';
import React from 'react';



export default  function Footer({settings}) {


  return (
    <footer>
    <div className="container">
      {settings?.footerLogo && (
        <Image 
          src={settings.footerLogo.asset.url} 
          alt="Footer Logo" 
          width={300} 
          height={50} 
        />
      )}
      <nav>
        <ul>
          {settings?.footerMenu?.map((item, index) => (
            <li key={index}>
              <a href={item.menuItemUrl}>{item.menuItemName}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {settings?.socialLinks?.map((social, index) => (
          <a key={index} href={social.socialLink} target="_blank" rel="noopener noreferrer">
               <div
      dangerouslySetInnerHTML={{ __html:  
        social.icon.svg
       }} // Inject the raw SVG string
    />
    
          </a>
        ))}
      </div>
      {settings?.email && (
        <p>
          <a href={`mailto:${settings.email.emailUrl}`}>{settings.email.emailLabel}</a>
        </p>
      )}
      </div>
    </footer>
  );
}
