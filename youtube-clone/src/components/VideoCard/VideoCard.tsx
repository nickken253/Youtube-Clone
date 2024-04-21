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
    <div>
      <div className='aspect-video relative w-full'>
        <img className='object-cover h-full w-full rounded-xl' src={thumbnail} alt="Thumbnail" />
        <div>{duration}</div>
      </div>
      <div className='flex'>
        <div className='w-10 rounded-full'>
          <img className='rounded-full' src={avatar} alt="Avatar" />
        </div>
        <div>
          <div>{title}</div>
          <div>{channel}</div>
          <div>{views} • {timestamp}</div>
        </div>
      </div>
    </div>
  )
}
