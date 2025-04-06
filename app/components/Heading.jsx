import { getRandomMember } from "@/sanity/sanity.utils";
import Image from "next/image";

export default async function Heading({ headingText }) {
  const [randomMember] = await getRandomMember()

  return (
    <div>
      {headingText && <h2>{headingText}</h2>}

      <div className="">
        <Image src={randomMember.image.asset.url} alt={`${randomMember.image.alt? randomMember.image.alt: 'Room Up Front Member portfolio piece'}`}
        width={800} height={800}/>
      <p>{randomMember.name}</p>
      <p>{randomMember.location}</p>
    </div>

    </div>
  );
}
