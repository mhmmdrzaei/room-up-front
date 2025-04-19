import { PortableText } from '@portabletext/react';
import './Blocks.scss';


export default function BodyText({ width = '100', content, background = 'white' }) {
  return (

    <section className={`${background=== 'black' ? 'black-back':''} body-text`} style={{ width: `${width}%`, maxWidth: `${width === '49'? 'calc(700px - 1%': '1400px' }`,backgroundColor: background, color: background === 'black' ? 'white' : 'black' }}>
      <PortableText value={content} />
    </section>
  );
}
