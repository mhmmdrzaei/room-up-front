'use client';
import './MembersTabs'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MembersLayout from './MembersLayout';
import MentorsStaffLayout from './MentorStaffLayout';
import './MembersTabs.scss'


const initialSearchTermValue = '';
const initialTabState = 'members';

export default function MembersTabs({ members, mentors, staff }) {
  const peopleMap = {
    members,
    mentors,
    staff,
  };

  const [selectedTab, setSelectedTab] = useState(initialTabState);
  const [peopleList, setPeopleList] = useState(peopleMap[selectedTab]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTermValue);
  const [filteredPeople, setFilteredPeople] = useState(peopleMap[selectedTab]);

  // Handle tab change, update the people list for each tab
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
  };

  // Handle tab change with active class handling
  const handleTabChange = (x) => {
    setSelectedTab(x.target.value);
  };

  return (
    <section className='members-container'>
      <div className="search-console">
        <form className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="border rounded py-2 w-full mb-2"
          />
          <Image src='assets/search.svg' width={40} height={40} alt='magnifying glass icon'/>
        </form>
        <div className='search-tabs'>
          <button
            className={` ${selectedTab === 'members' ? 'activeTab' : ''}`}
            onClick={handleTabChange}
            value="members"
          >
            Members
          </button>
          <button
            className={` ${selectedTab === 'mentors' ? 'activeTab' : ''}`}
            onClick={handleTabChange}
            value="mentors"
          >
            Mentors
          </button>
          <button
            className={` ${selectedTab === 'staff' ? 'activeTab' : ''}`}
            onClick={handleTabChange}
            value="staff"
          >
            Staff
          </button>
        </div>
      </div>
      <div className="members-list">
        {/* Render filtered people based on the selected tab */}
        {selectedTab === 'members' ? (
          <MembersLayout people={filteredPeople} />
        ) : (
          <MentorsStaffLayout people={filteredPeople} type={selectedTab} />
        )}
      </div>
    </section>
  );
}
