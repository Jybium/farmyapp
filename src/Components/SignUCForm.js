import React, {useState, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

// import loho from '../static/FARMY EMB green..png'

const SignUCForm = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const {setUserInfo} = useContext(UserContext);


  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: 5000,
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const displayError = (err) => {
    toastr.warning(err, "Sorry");
  };

  const handleSubmit = async (e) => {
        e.preventDefault()

        await axios({
        url: '/api/v1/user/',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
        data: JSON.stringify({name, email, phoneNumber, avatar, password, username})
        }).then(response => {
            axios({
              url: 'api/v1/user/profile',
              withCredentials: true,
              method: "GET",
            }).then(response => {
              const userInfoData = response.data;
              setUserInfo(userInfoData);
              // console.log(userInfoData);
              navigate('/myprofile');
            });
            // console.log(response)
            // setRedirect(true);
          })
          .catch( (err) => {
            // console.log(err)
            displayError(err.response)
          })
    
      }

  return (
    // <div className='signufform'>
    //   <img src={loho} alt='FarmyApp logo' className='lohosm'/>
    //   <div>Welcome to FarmyApp</div>
    //   <SignUTargetM/>
      <div className=''>
        <div className='sign_form'>
            <form className="post_sign" onSubmit={handleSubmit}>
                <div className="waitlist_post" >
                        <label className='form_label' >Full Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='form_input form_inp'
                            placeholder={"Your full name"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label' >Email</label>
                        <input 
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='form_input form_inp'
                            placeholder={"Enter your email address"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label' >Username</label>
                        <input 
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            className='form_input form_inp'
                            placeholder={"Enter your username"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Phone Number</label>
                        <input 
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            className='form_input form_inp'
                            placeholder={"Enter your correct phone number here"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Password</label>
                        <input 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='form_input form_inp'
                            placeholder={"Enter your password here"}
                        />
                </div>
                <div className="waitlist_post">
                    <label className='form_label'>Display Image</label>
                    <input 
                        type="file"
                        onChange={(e) => setAvatar(e.target.files)}
                        className='custom-file-input'
                        accept="image/*"
                    /><br/>

                    <div className='image-preview-container'>
                        {avatar && Array.from(avatar).map((image, index) => (
                        <div key={index} className='image-preview'>
                            <img src={URL.createObjectURL(image)} alt={`Images ${index}`} />
                        </div>
                        ))}
                    </div>
                </div>
                
                <button className="sign_bt" >Submit</button>

            </form>
            <div className='already1'>Already have an account? <Link to='/signin' className='signalt'>Log in</Link></div>
        </div>
      </div>
    // </div>
  )
}

export default SignUCForm