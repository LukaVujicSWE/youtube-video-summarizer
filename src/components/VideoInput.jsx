import React from 'react'

export default function VideoInput({ videoUrl, setVideoUrl }) {
  return (
    <input className="bg-transparent placeholder-[#161311] text-center border-2 rounded-md border-[#161311]"
    type="text" 
    placeholder='Paste The Youtube URL'
    value={videoUrl}
    onChange={(e) => setVideoUrl(e.target.value)}/>
  )
}
