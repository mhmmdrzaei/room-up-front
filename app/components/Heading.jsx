import { getRandomMembers } from "@/sanity/sanity.utils";
import Image from "next/image";
import './Heading.scss';

export default async function Heading({ headingText }) {

  const randomMemb = await getRandomMembers()
  const randomMemberr = randomMemb[0]
  console.log(randomMemberr)

  return (
    <div className="heading-container">
      <div className="background-headingBox"></div>
      {headingText && 
          <h1 className="heading-text">{headingText}</h1>
      }
      <div className="member-highlight">
        {
          randomMemberr.images? 
          <Image src={randomMemberr.images.asset.url} alt={`${randomMemberr.images.alt? randomMemberr.images.alt: 'Room Up Front Member portfolio piece'}`}
          width={1000} height={900}/>
          :
          <Image
            src="/assets/placeholder.png"
            alt="Member Image"
            width={500}
            height={500}
          />

        }
      <div className="heading-image-text-box">
              <p className="heading-image-name">{randomMemberr.name}</p>
              <p className="heading-image-location">{randomMemberr.location}</p>
      </div>

      </div>

    </div>


  );
}
