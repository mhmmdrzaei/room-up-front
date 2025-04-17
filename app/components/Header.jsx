import Image from 'next/image';
import Link from 'next/link';
import './Header.scss';


export default function Header({settings}) {


  return (
    <header className='header-container container flex'>

        <ul className='heading-nav flex flex-wrap'>
          {settings?.headingMenu?.map((item, index) => (
            <li key={index}>
              <a href={item.menuItemUrl}>{item.menuItemName}</a>
            </li>
          ))}
        </ul>
      {settings?.headingLogo && (
        <Link href={"/"}>        
        <Image 
        src={settings.headingLogo.asset.url} 
        alt="Logo" 
        width={500} 
        height={300} 
      />
      </Link>

      )}
    </header>
  );
}
