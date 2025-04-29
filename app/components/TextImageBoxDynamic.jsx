// pages/heading.js (or your appropriate component path)

import { getRandomMembers } from "@/sanity/sanity.utils";
import Image from "next/image";
import "./Heading.scss";
import { PortableText } from "next-sanity";
import CTAButton from "./CtaButton";

// This is a React Server Component, so data is fetched on the server
export default async function TextImageBoxDynamic({
  textContent = [],
  alignment = "textImage",
}) {
  const randomMemb = await getRandomMembers(); // Fetch random members on each request
  const randomMemberr = randomMemb[0]; // Get the first random member

  return (
    <div
      className="text-image-box"
      style={{
        flexDirection: alignment === "textImage" ? "row" : "row-reverse",
      }}
    >
      <div className="imgBox"style={{ flex: 1 }}>
        {randomMemberr?.images ? (
          <Image
            src={randomMemberr.images.asset.url}
            alt={
              randomMemberr.images.alt || "Room Up Front Member portfolio piece"
            }
            width={600}
            height={400}
          />
        ) : (
          <Image
            src="/assets/placeholder.png"
            alt="Member Image"
            width={500}
            height={500}
          />
        )}
        
          <p className="caption">{randomMemberr?.name} | {randomMemberr?.location} </p>
      
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <PortableText
          value={textContent.filter((item) => item._type === "block")}
        />
        {textContent
          .filter((item) => item._type === "ctaButton")
          .map((cta, index) => (
            <CTAButton key={index} {...cta} />
          ))}
      </div>
    </div>
  );
}
