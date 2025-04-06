import Image from 'next/image';


export default function Header({settings}) {


  return (
    <header>
      {settings?.headingLogo && (
        <Image 
          src={settings.headingLogo.asset.url} 
          alt="Logo" 
          width={100} 
          height={50} 
        />
      )}
      <nav>
        <ul>
          {settings?.headingMenu?.map((item, index) => (
            <li key={index}>
              <a href={item.menuItemUrl}>{item.menuItemName}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
