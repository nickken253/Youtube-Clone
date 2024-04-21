import React from 'react'
import { Header } from '../../components/Header/Header'
import { VideoCard } from '../../components/VideoCard/VideoCard'
import { homeIcon, subscriptionIcon, exploreIcon, libraryIcon, originalIcon, youtubeMusicIcon } from '../../assets'
// explore, library, original, subscription, youtube-music, home
export const HomePage = () => {
    const mockData = [
        { thumbnail: 'https://i.ytimg.com/vi/Wr-yzFVwAXo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5vLtF6gggaiecYwXTXEUyoaS0lA', title: 'Video 1', channel: 'Channel 1', views: '1M', timestamp: '1 day ago', duration: '10:00', avatar: 'https://yt3.ggpht.com/irZZ4tooERPf_JXnKA-oUOhOKP7-u4qjUEAaCHiVx7UF-Z2elopUm8O4E75WdVUsEePLe0SD=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/M5QY2_8704o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCEDQCh5uETjQQedkAdnWkI0_Rbg', title: 'Video 2', channel: 'Channel 2', views: '2M', timestamp: '2 day ago', duration: '20:00', avatar: 'https://yt3.ggpht.com/f_0nh3pN7GbYA1YwkuEQjX1_lRLD9ZUk3EjexYSPuOiqN298ScOcNVgGFU-AHZSmg1Yy4diG=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 3', channel: 'Channel 3', views: '3M', timestamp: '3 day ago', duration: '30:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3lXk6Q7sK0l3ZiXJ3X1J9t2l0JQ', title: 'Video 4', channel: 'Channel 4', views: '4M', timestamp: '4 day ago', duration: '40:00', avatar: 'https://yt3.ggpht.com/xukNZ7OMGIyK8fLNxAwR-uy214xfaZph7btgo5-HpBbT0o8tZuJ38LBkSI_UcQWYklg4P-tZvQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/7TdSEX4JFdw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLmTr4qzt6OhAxSXTpUTGFE4cpoQ', title: 'Video 5', channel: 'Channel 5', views: '5M', timestamp: '5 day ago', duration: '50:00', avatar: 'https://yt3.ggpht.com/l0KxOoFAzNiCyy7-v2hP3DbKnCUOO3zBV-1bfFOiTlWcIxkbFBtb2QA2zWzVdbVqK7-dMALbdQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 6', channel: 'Channel 6', views: '6M', timestamp: '6 day ago', duration: '60:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/Wr-yzFVwAXo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5vLtF6gggaiecYwXTXEUyoaS0lA', title: 'Video 1', channel: 'Channel 1', views: '1M', timestamp: '1 day ago', duration: '10:00', avatar: 'https://yt3.ggpht.com/irZZ4tooERPf_JXnKA-oUOhOKP7-u4qjUEAaCHiVx7UF-Z2elopUm8O4E75WdVUsEePLe0SD=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/M5QY2_8704o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCEDQCh5uETjQQedkAdnWkI0_Rbg', title: 'Video 2', channel: 'Channel 2', views: '2M', timestamp: '2 day ago', duration: '20:00', avatar: 'https://yt3.ggpht.com/f_0nh3pN7GbYA1YwkuEQjX1_lRLD9ZUk3EjexYSPuOiqN298ScOcNVgGFU-AHZSmg1Yy4diG=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 3', channel: 'Channel 3', views: '3M', timestamp: '3 day ago', duration: '30:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3lXk6Q7sK0l3ZiXJ3X1J9t2l0JQ', title: 'Video 4', channel: 'Channel 4', views: '4M', timestamp: '4 day ago', duration: '40:00', avatar: 'https://yt3.ggpht.com/xukNZ7OMGIyK8fLNxAwR-uy214xfaZph7btgo5-HpBbT0o8tZuJ38LBkSI_UcQWYklg4P-tZvQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/7TdSEX4JFdw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLmTr4qzt6OhAxSXTpUTGFE4cpoQ', title: 'Video 5', channel: 'Channel 5', views: '5M', timestamp: '5 day ago', duration: '50:00', avatar: 'https://yt3.ggpht.com/l0KxOoFAzNiCyy7-v2hP3DbKnCUOO3zBV-1bfFOiTlWcIxkbFBtb2QA2zWzVdbVqK7-dMALbdQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 6', channel: 'Channel 6', views: '6M', timestamp: '6 day ago', duration: '60:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/Wr-yzFVwAXo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5vLtF6gggaiecYwXTXEUyoaS0lA', title: 'Video 1', channel: 'Channel 1', views: '1M', timestamp: '1 day ago', duration: '10:00', avatar: 'https://yt3.ggpht.com/irZZ4tooERPf_JXnKA-oUOhOKP7-u4qjUEAaCHiVx7UF-Z2elopUm8O4E75WdVUsEePLe0SD=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/M5QY2_8704o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCEDQCh5uETjQQedkAdnWkI0_Rbg', title: 'Video 2', channel: 'Channel 2', views: '2M', timestamp: '2 day ago', duration: '20:00', avatar: 'https://yt3.ggpht.com/f_0nh3pN7GbYA1YwkuEQjX1_lRLD9ZUk3EjexYSPuOiqN298ScOcNVgGFU-AHZSmg1Yy4diG=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 3', channel: 'Channel 3', views: '3M', timestamp: '3 day ago', duration: '30:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3lXk6Q7sK0l3ZiXJ3X1J9t2l0JQ', title: 'Video 4', channel: 'Channel 4', views: '4M', timestamp: '4 day ago', duration: '40:00', avatar: 'https://yt3.ggpht.com/xukNZ7OMGIyK8fLNxAwR-uy214xfaZph7btgo5-HpBbT0o8tZuJ38LBkSI_UcQWYklg4P-tZvQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/7TdSEX4JFdw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLmTr4qzt6OhAxSXTpUTGFE4cpoQ', title: 'Video 5', channel: 'Channel 5', views: '5M', timestamp: '5 day ago', duration: '50:00', avatar: 'https://yt3.ggpht.com/l0KxOoFAzNiCyy7-v2hP3DbKnCUOO3zBV-1bfFOiTlWcIxkbFBtb2QA2zWzVdbVqK7-dMALbdQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 6', channel: 'Channel 6', views: '6M', timestamp: '6 day ago', duration: '60:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/Wr-yzFVwAXo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5vLtF6gggaiecYwXTXEUyoaS0lA', title: 'Video 1', channel: 'Channel 1', views: '1M', timestamp: '1 day ago', duration: '10:00', avatar: 'https://yt3.ggpht.com/irZZ4tooERPf_JXnKA-oUOhOKP7-u4qjUEAaCHiVx7UF-Z2elopUm8O4E75WdVUsEePLe0SD=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/M5QY2_8704o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCEDQCh5uETjQQedkAdnWkI0_Rbg', title: 'Video 2', channel: 'Channel 2', views: '2M', timestamp: '2 day ago', duration: '20:00', avatar: 'https://yt3.ggpht.com/f_0nh3pN7GbYA1YwkuEQjX1_lRLD9ZUk3EjexYSPuOiqN298ScOcNVgGFU-AHZSmg1Yy4diG=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 3', channel: 'Channel 3', views: '3M', timestamp: '3 day ago', duration: '30:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3lXk6Q7sK0l3ZiXJ3X1J9t2l0JQ', title: 'Video 4', channel: 'Channel 4', views: '4M', timestamp: '4 day ago', duration: '40:00', avatar: 'https://yt3.ggpht.com/xukNZ7OMGIyK8fLNxAwR-uy214xfaZph7btgo5-HpBbT0o8tZuJ38LBkSI_UcQWYklg4P-tZvQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/7TdSEX4JFdw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLmTr4qzt6OhAxSXTpUTGFE4cpoQ', title: 'Video 5', channel: 'Channel 5', views: '5M', timestamp: '5 day ago', duration: '50:00', avatar: 'https://yt3.ggpht.com/l0KxOoFAzNiCyy7-v2hP3DbKnCUOO3zBV-1bfFOiTlWcIxkbFBtb2QA2zWzVdbVqK7-dMALbdQ=s68-c-k-c0x00ffffff-no-rj' },
        { thumbnail: 'https://i.ytimg.com/vi/6fKJ7vxFc8M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAL1P2yHWLUFvZgCGq9fwryqy8HQ', title: 'Video 6', channel: 'Channel 6', views: '6M', timestamp: '6 day ago', duration: '60:00', avatar: 'https://yt3.ggpht.com/ytc/AIdro_lDJWGmW3qdpoh0AKz0zGEzkwKvqM9KthGfhi3fZgT66Ls=s68-c-k-c0x00ffffff-no-rj' },
        
    ]
    return (
        <div className='w-full'>
            <Header />
            <div className="relative flex w-full">
                <div className="drawer">
                    <div className="drawer-item">
                        <img src={homeIcon} alt="home" />
                        <span>Home</span>
                    </div>
                    <div className="drawer-item">
                        <img src={subscriptionIcon} alt="subscription" />
                        <span>Subscription</span>
                    </div>
                    <div className="drawer-item">
                        <img src={exploreIcon} alt="explore" />
                        <span>Explore</span>
                    </div>
                    <div className="drawer-item">
                        <img src={libraryIcon} alt="library" />
                        <span>Library</span>
                    </div>
                    <div className="drawer-item">
                        <img src={originalIcon} alt="original" />
                        <span>Original</span>
                    </div>
                    <div className="drawer-item">
                        <img src={youtubeMusicIcon} alt="youtube-music" />
                        <span>YouTube Music</span>
                    </div>
                </div>
                <div className="w-full lg:grid lg:grid-cols-5 gap-5">
                    {mockData.map((video, index) => (<VideoCard key={index} {...video} />))}
                </div>
            </div>
        </div>
    )
}
