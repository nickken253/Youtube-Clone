import React from 'react'

interface VideoCardProps {
  thumbnail: string
  title: string
  channel: string
  views: string
  timestamp: string
  duration: string
  avatar: string
}

export const VideoCard = (props: VideoCardProps) => {
  const { thumbnail, title, channel, views, timestamp, duration, avatar } = props
  return (
    <div className='a hover:shadow-2xl rounded-2xl p-4 cursor-pointer transition-all ease-in-out duration-250'>
      <div className='aspect-video relative w-full'>
        <img className='object-cover h-full w-full rounded-xl' src={thumbnail} alt="Thumbnail" />
        <div className='absolute top-[9rem] right-4 bg-[#00000083] text-white p-1 font-bold rounded-md'>{duration}</div>
      </div>
      <div className='flex mt-5'>
        <div className='w-10 rounded-full'>
          <img className='rounded-full' src={avatar} alt="Avatar" />
        </div>
        <div className='pl-4'>
          <div className='font-bold'>{title}</div>
          <div className='text-sm'>{channel}</div>
          <div className='text-sm'>{views} • {timestamp}</div>
        </div>
      </div>
    </div>
  )
}
