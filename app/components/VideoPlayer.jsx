import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer({ link }) {
  return (
    <ReactPlayer url={link} />
  );
}
