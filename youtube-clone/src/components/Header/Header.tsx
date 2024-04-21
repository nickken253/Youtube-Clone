import { faBars, faBell, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logo } from '../../assets'
import React from 'react'

export const Header = () => {
  // Header gồm có, thanh menu, logo, search bar, icon create new video, icon notification, icon user
  return (
    <div>
      <div className="header flex w-full justify-between">
        <div className='flex justify-center items-center'>

          <button><FontAwesomeIcon icon={faBars} /></button>
          <img className='h-[16px]' src={logo} alt="Logo" />
        </div>
        <div className='flex justify-center items-center'>
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className='flex justify-center items-center'>
          <button><FontAwesomeIcon icon={faVideo} /></button>
          <button><FontAwesomeIcon icon={faBell} /></button>
          <div className="icon-user">Icon User</div>
        </div>
      </div>
    </div>
  )
}
