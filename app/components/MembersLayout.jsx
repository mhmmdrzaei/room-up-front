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
  speed: 500,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,      // desktop only
  variableWidth: true,   // desktop only
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: false,      // ← turn off centering
        variableWidth: false,   // ← force full-width slides
        speed: 300,
        cssEase: 'ease',
      },
    },
  ],
}

      
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
