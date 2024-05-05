import { faBars, faBell, faMagnifyingGlass, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logo } from '../../assets'
import React from 'react'

export const Header = () => {
  // Header gồm có, thanh menu, logo, search bar, icon create new video, icon notification, icon user
  return (
    <div className='mb-3 mx-5 fixed w-full bg-white z-10 top-0 py-3'>
      <div className="header flex w-full justify-between">
        <div className='flex justify-center items-center ml-5 cursor-pointer'>
          <button><FontAwesomeIcon icon={faBars} size='xl'/></button>
          <img className='h-[24px] mx-5' src={logo} alt="Logo" />
        </div>
        <div className='flex justify-between items-center rounded-full w-[36rem] h-fit py-3 px-5 bg-white border border-solid border-[#000000]'>
          <input type="text" placeholder="Tìm kiếm" className='w-full mx-3 decoration-none outline-none text-black bg-white'/>
          <button className=''><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} /></button>
        </div>
        <div className='flex justify-center items-center gap-5 mx-10'>
          <button title='Create Video'><FontAwesomeIcon icon={faVideo} size='2xl'/></button>
          <button title='Alert'><FontAwesomeIcon icon={faBell} size='2xl'/></button>
          <div className="icon-user cursor-pointer" title='Account Settings'><FontAwesomeIcon icon={faUser} size='2xl'/></div>
        </div>
      </div>
    </div>
  )
}
