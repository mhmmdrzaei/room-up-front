import './Blocks.scss';
export default function HeadingText({ headingLevel = 'h1', width = '100', textAlign = 'left', text }) {
  if (!text) return null;

  const HeadingTag = headingLevel;

  return (
    <div className="container-blocks container">
    <div className="heading-level-text" style={{ width: `${width}%`, textAlign, margin: `${
          textAlign === 'left'
            ? '35px 0 0'
            : textAlign === 'center'
            ? '35px auto 0'
            : '0 0 0 auto'
        }` }}>
      <HeadingTag>{text}</HeadingTag>
    </div>
    </div>
  );
}
