import { PortableText } from '@portabletext/react';
import CTAButton from './CtaButton';
import Image from 'next/image';
export default function TextImageBox({ image, textContent = [], alignment = 'textImage' }) {
  return (
    <div className="text-image-box"style={{ flexDirection: alignment === 'textImage' ? 'row' : 'row-reverse' }}>
      <div style={{ flex: 1 }}>
        <Image src={image?.asset?.url} alt={image?.alt || 'Image'} width={800} height={600}/>
        {image?.caption && <p>{image.caption}</p>}
      </div>
      <div style={{ flex: 1, padding: '20px 20px 0 0' }}>
        <PortableText value={textContent.filter(item => item._type === 'block')} />
        {textContent.filter(item => item._type === 'ctaButton').map((cta, index) => (
          <CTAButton key={index} {...cta} />
        ))}
      </div>
    </div>
  );
}
