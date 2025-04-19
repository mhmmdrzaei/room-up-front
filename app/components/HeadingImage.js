import Image from 'next/image';
import './Blocks.scss';
export default function HeadingImage({ imageHeading, headingText }) {
  return (
    <div className="heading-Image">
      <div className='headingImgBG'></div>
        
        <Image src={imageHeading?.asset?.url} alt={imageHeading?.alt || 'Image'} width={1400} height={1400}/>
        {imageHeading?.caption && <p>{imageHeading.caption}</p>}
      <div className='headingText'>
       <h2>{headingText}</h2>
      </div>
    </div>
  );
}


