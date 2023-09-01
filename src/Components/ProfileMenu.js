import {useContext} from 'react'
import axios from 'axios'

import { UserContext } from '../context/UserContext'
import profback from '../static/back.jpg'

import '../styles/profile.css'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'

function ProfileMenu() {
  const {setUserInfo,userInfo} = useContext(UserContext);

  function logout() {
    userInfo.farmName && axios({
      url: 'api/v1/farm/logout',
      withCredentials: true,
      method: "POST",
    });
    setUserInfo(null);

    userInfo.storeName && axios({
      url: 'api/v1/store/logout',
      withCredentials: true,
      method: "POST",
    });
    setUserInfo(null);
    
  }


  return (
    <div className='profilemenu'>
      <img src={profback} alt='profile background' className='profback'/>
      <img src={userInfo.avatar ? userInfo.avatar : profback} alt='profile background' className='profimg'/>
      <div className='profName'>
      {userInfo.farmName && (
        <p className='profName'>{userInfo.farmName}</p>
      )}
      {userInfo.storeName && (
        <p className='profName'>{userInfo.storeName}</p>
      )}
      {userInfo.logisticsCompanyName && (
        <p className='profName'>{userInfo.logisticsCompanyName}</p>
      )}
        {/* <p className='profName'>{userInfo.farmName}</p> */}
        <p className='profName'>@{userInfo.username}</p>
      </div>
      <div className='manuopt'>
        <Link>
            <p className='manuopt'>My Market</p>
        </Link>
        <div className='subopt'>
            <Link>
                <p className='manuopt1'>My Products</p>
            </Link>
            <Link>
                <p className='manuopt1'>Notifications</p>
            </Link>
            <Link>
                <p className='manuopt1'>Orders</p>
            </Link>
            <Link>
                <p className='manuopt1'>Wallet</p>
            </Link>
        </div>
        <Link>
            <p className='manuopt'>Profile Settings</p>
        </Link>
        <Link onClick={logout} className='menuitemhere' to='/'>
            <p className='manuoptlog'>Logout</p>
            <BiLogOut />
        </Link>
      </div>
    </div>
  )
}

export default ProfileMenu
