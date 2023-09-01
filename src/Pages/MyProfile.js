

import ProfileMenu from '../Components/ProfileMenu'
import ProfileProducts from '../Components/ProfileProducts'
import Navbar from '../Components/Navbar'

function FarmProfile() {
  

  return (
    <div>
        <Navbar/>
        <div className='profile'>
            <ProfileMenu />
            <ProfileProducts/>
        </div>
    </div>
  )
}

export default FarmProfile
