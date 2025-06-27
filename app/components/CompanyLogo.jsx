import Image from 'next/image'; // if using next/image, or just use <img>

export default function StudioLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0.1rem', height: '26px', width: '26px' }}>
      <img
        src="/ruf.png"
        alt="Room Up Front"
        style={{  }}
      />
    </div>
  );
}
