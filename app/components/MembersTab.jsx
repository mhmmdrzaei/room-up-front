'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PortableText } from 'next-sanity';


const People = ({people, type}) => {
  if (!people?.length) return null;

  return (
    <div className={`members-list ${type}`}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div className="members">
        {people.map((person) => (
          <div key={person.slug.current} className="member-card">
            <Image
              src={
                person.images?.[0]?.asset?.url ||
                person.image?.asset?.url ||
                '/placeholder.jpg'
              }
              alt={
                person.images?.[0]?.alt ||
                person.image?.alt ||
                `${type} image`
              }
              width={150}
              height={150}
            />
            <h3>{person.name}</h3>
            <p>{person.location || person.position}</p>
            {person.email && <a href={`mailto:${person.email}`}>Email</a>}
            {person.website && (
              <a href={person.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            )}
            {
              person.bio && 
              <PortableText value={person.bio}/>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

const initialSearchTermValue =  '';
const initialTabState = 'members';


export default function MembersTabs({ members, mentors, staff }) {
  const peopleMap = {
    members,
    mentors,
    staff,
  }
  const [selectedTab, setSelectedTab] = useState(initialTabState);
  const [peopleList, setPeopleList] = useState(peopleMap[initialTabState]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTermValue);
  const [filteredPeople, setFilteredPeople] = useState(peopleMap[initialTabState]);
  
  useEffect(() => {
    setSearchTerm(initialSearchTermValue);
    setFilteredPeople(peopleMap[selectedTab]);
    setPeopleList(peopleMap[selectedTab]);
  }, [selectedTab]);

  // Filter people based on input search value
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
    const value = e.target.value.toLowerCase();
    
    const filteredByType = peopleList.filter((person) =>
      person.name.toLowerCase().includes(value)
    );

    // updates the filtered people list by tab type
    setFilteredPeople(filteredByType);
  }

  const handleTabChange = (x) => {
    setSelectedTab(x.target.value)
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <form  className="">
          <input
            type="name"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="border rounded py-2 w-full mb-2"
            />
        </form>
        <div>
          <button className="px-5" onClick={handleTabChange} value="members">Members</button>
          <button className="px-5" onClick={handleTabChange} value="mentors">Mentors</button>
          <button className="px-5" onClick={handleTabChange} value="staff">Staff</button>
        </div>
      </div>
      <div className="members-list">
        <People people={filteredPeople} type={selectedTab}/>
      </div>
    </div>
  );
}
