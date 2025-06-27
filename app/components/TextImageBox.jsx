import { PortableText } from '@portabletext/react';
import CTAButton from './CtaButton';
import Image from 'next/image';
export default function TextImageBox({ image, textContent = [], alignment = 'textImage' }) {
  return (
    <div className="text-image-box"style={{ flexDirection: alignment === 'textImage' ? 'row' : 'row-reverse' }}>
      <div className='imgBox'>
        <Image src={image?.asset?.url} alt={image?.alt || 'Image'} width={800} height={600}/>
        {image?.caption && <p>{image.caption}</p>}
      </div>
      <div className="textbox" style={{ padding: '20px' }}>
        <PortableText value={textContent.filter(item => item._type === 'block')} />
        {textContent.filter(item => item._type === 'ctaButton').map((cta, index) => (
          <CTAButton key={index} {...cta} />
        ))}
      </div>
    </div>
  );
}
