
export default function CTAButton({ 
  buttonLabel, 
  buttonUrl, 
  openInNewWindow = false, 
  buttonColor = 'black', 
  buttonAlignment
}) {
  if (!buttonLabel || !buttonUrl) return null;

  return (
    <div className="button-container" >
      <a 
        href={buttonUrl} 
        target={openInNewWindow ? '_blank' : '_self'} 
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        style={{ backgroundColor: buttonColor, color: 'white', margin: `${
          buttonAlignment === 'left'
            ? '0'
            : buttonAlignment === 'center'
            ? '0 auto'
            : '0 0 0 auto'
        }` }}
      >
        <img src="assets/button.png" alt="button icon"  width={20} height={20}/>
        <span>{buttonLabel}</span>

        <img src="assets/arrow.png" alt="arrow" width={20} height={15}/>
      </a>
    </div>
  );
}
