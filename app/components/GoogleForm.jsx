// components/GoogleForm.js
export default function GoogleFormEmbed({ url, height = '800px', className = '' }) {
  if (!url) return null

  // ensure embedded param
  const src = url.includes('embedded=true')
    ? url
    : url + (url.includes('?') ? '&' : '?') + 'embedded=true'

  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}
    >
      <iframe
        src={src}
        title="Google Form"
        height="100%"
        width="100%"
        frameBorder="0"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  )
}
