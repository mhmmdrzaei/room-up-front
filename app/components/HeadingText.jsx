import './Blocks.scss';
export default function HeadingText({ headingLevel = 'h1', width = '100', textAlign = 'left', text }) {
  if (!text) return null;

  const HeadingTag = headingLevel;

  return (
    <div className="container">
    <div className="heading-level-text" style={{ width: `${width}%`, textAlign, margin: `${
          textAlign === 'left'
            ? '0'
            : textAlign === 'center'
            ? '0 auto'
            : '0 0 0 auto'
        }` }}>
      <HeadingTag>{text}</HeadingTag>
    </div>
    </div>
  );
}
