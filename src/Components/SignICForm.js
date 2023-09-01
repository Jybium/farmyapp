import React, {useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

import { UserContext } from '../context/UserContext';

import Cookies from 'universal-cookie';


function SignICForm() {
    const navigate = useNavigate()

    const cookies = new Cookies();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserInfo } = useContext(UserContext);


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

      cookies.set('jwt', { path: '/' });
  
      await axios({
        url: 'api/v1/user/auth',
        withCredentials: true,
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({email, password})
      }).then(response => {
        axios({
          url: 'api/v1/user/profile',
          withCredentials: true,
          method: "GET",
        }).then(response => {
          const userInfoData = response.data;
          setUserInfo(userInfoData);
          console.log(response.data);
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
      <div className='signufform'>
        {/* <img src={loho} alt='FarmyApp logo' className='lohosm'/>
        <div>Welcome to FarmyApp</div>
        <SignITargetM/> */}
        <div className='sign_form'>
              <form className="post_sign" onSubmit={handleSubmit}>
                  
                  <div className="waitlist_post" >
                          <label className='form_label'>Email</label>
                          <input 
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              className='form_input form_inp'
                              placeholder={"Your email"}
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
                  
                  <button className="sign_bt" >Submit</button>
  
              </form>
              <div className='already1'>Don't have an account? <Link to='/signup' className='signalt'>Sign up</Link></div>
          </div>
      </div>
    )
  }

export default SignICForm
