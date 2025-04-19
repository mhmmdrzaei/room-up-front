import Image from "next/image";
import { PortableText } from "next-sanity";
import "./MembersTabs";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function MembersLayout({ people }) {
    const settings = {
        infinite: true,
        autoplay: false,
        autoplaySpeed: 0, // Autoplay without delay between slides
        speed: 500, // Set the speed of the slide transition (8000ms)
        cssEase: 'linear', // Smooth and linear transition on desktop
        arrows: true, // No arrows for desktop (optional)
        dots: false, // No dots for desktop (optional)
        slidesToShow: 1, // Show one image at a time on mobile
        slidesToScroll: 1, // Scroll one image at a time
        centerMode: true, // Enable centering for better slide effect
        variableWidth: true,
        responsive: [
          {
            breakpoint: 768, // Mobile breakpoint
            settings: {
            speed: 300,
              autoplay: false, // Disable autoplay on mobile
              cssEase: 'ease', // Disable linear transition, use default easing
              slidesToShow: 1, // Show one image at a time on mobile
              slidesToScroll: 1, // Scroll one image at a time on mobile
              dots: true, // Show dots for navigation on mobile
              arrows: true, // Optional: show arrows for manual sliding on mobile
            },
          },
        ],
      };
      
  return (
    <div className="members">
      <div className="memberPageBG"></div>
      {people.map((person) => (
        <div key={person._id} className="member-card">
          <h4>{person.name}</h4>
          <div className="member-images">

          <Slider {...settings}>
              {/* Display all images for members in a looping carousel */}
              {person.images?.map((image, index) => (
                <div key={index} className="carousel-slide">
     
                    <Image
                    src={image.asset?.url || '/placeholder.jpg'}
                    alt={image.alt || `${person.name} image`}
                    width={900}
                    height={900}
                    className="carousel-image"
                    loading="lazy"
                  />

        

                </div>
              ))}
            </Slider>
   
            
          </div>
          <div className="member-details">
            <div className="details-header">
              <p className="member-location">{person.location}</p>
              {person.website && (
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              )}
              {person.email && <a href={`mailto:${person.email}`}>Contact</a>}
            </div>
            {person.bio && (
              <PortableText className="member-bio" value={person.bio} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
