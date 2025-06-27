'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function VideoPlayer({ link }) {
  return (
    // 16:9 aspect ratio wrapper
    <div className=" relative w-full pb-[56.25%]">
      <ReactPlayer
        url={link}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        controls
      />
    </div>
  )
}
