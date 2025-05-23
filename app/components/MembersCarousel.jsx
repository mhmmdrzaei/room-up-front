import { getRandomMembers } from "@/sanity/sanity.utils";
import Image from "next/image";

// Since this is an async component, the data will be fetched on each render (server-side)
export default async function MembersCarousel({title}) {

  const members = await getRandomMembers(); // Dynamically fetch members

  if (!members.length) {
    return <div>No members found</div>; // Show message if no members are found
  }

  return (
    <div className="carousel-container container">
      <div className="membersBackground"></div>
      <h1>{title}</h1>
        {members.map((member) => (
          <div key={member.slug.current} className="member-card">
            {member.name && <h4>{member.name}</h4>}

            {member.images ? (
              <figure>
                <Image
                  src={member.images?.asset?.url}
                  alt={member.images?.alt || "Member Image"}
                  width={500}
                  height={500}
                />
              </figure>
            ) : (
              <Image
                src="/assets/placeholder.png"
                alt="Member Image"
                width={500}
                height={500}
              />
            )}

            {/* Conditional rendering for Location */}
            {member.location && <p>{member.location}</p>}

            {/* Conditional rendering for Website */}
            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer">
                {member.website}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            )}
          </div>
        ))}
      
    </div>
  );
}
