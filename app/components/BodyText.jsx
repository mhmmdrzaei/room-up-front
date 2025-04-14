import { PortableText } from '@portabletext/react';
import './Blocks.scss';


export default function BodyText({ width = '100', content, background = 'white' }) {
  return (
    <section className='body-text' style={{ width: `${width}%`, backgroundColor: background, color: background === 'black' ? 'white' : 'black' }}>
      <PortableText value={content} />
    </section>
  );
}
