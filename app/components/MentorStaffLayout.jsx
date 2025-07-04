import Image from "next/image";
import { PortableText } from "next-sanity";

export default function MentorsStaffLayout({ people, type }) {
  return (
    <div className="staffContainer">
      <div className="staffPageBG"></div>
      <div className="staff">
      {people.map((person) => (
        <div key={person._id} className="staff-card">
          <h4>{person.name}</h4>
          <Image
            src={person.image?.asset?.url || "/placeholder.jpg"}
            alt={person.image?.alt || `${type} image for ${person.name}`}
            width={600}
            height={600}
          />
          <div className="staff-details">
            <h5 className="person-position">{person.position}</h5>
            {person.email && <a href={`mailto:${person.email}`}>Contact</a>}
            {person.bio && <PortableText value={person.bio} />}
            {person.website && (
              <a
              className="staff-site"
                href={person.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.website}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
