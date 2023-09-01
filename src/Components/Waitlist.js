import React, {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

import '../styles/waitlist.css';


function Waitlist() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('');
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: 5000,
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const notify = () => {
    toastr.success("Record submitted successfully", "Thank you");
  };

  const displayError = () => {
    toastr.warning("All fields need to be filled.", "Sorry");
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if ( name === '' || email === '' || 
        phone === '' || city === '' || 
        role === ''  ) {
      displayError()
      return 
    }


    axios.post('/api/v1/waitlist',{name, email, phone, city, role})
        .then( (response) => {
            notify();
            setName('');
            setEmail('');
            setPhone('');
            setCity('');
            setRole('');
            navigate('');
        })
        .catch( (err) => {
            displayError();
            console.log(err.response.data);
        })
}

  return (
    <div>
      <div className='container'>
            <h1>JOIN FarmyApp WAIT LIST NOW</h1>
            <form className="post_blog" onSubmit={handleSubmit}>
                <div className="waitlist_post" >
                        <label className='form_label' >Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='form_input'
                            placeholder={"Your full name"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Email</label>
                        <input 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='form_input'
                            placeholder={"Your email"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Phone number</label>
                        <input 
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            className='form_input'
                            placeholder={"Your correct phone number"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>City</label>
                        <input 
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            className='form_input'
                            placeholder={"Your current city of residence or work"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Role</label>
                        <input 
                            type="text"
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            className='form_input'
                            placeholder={"Will you be a Farmer, seller, buyer or render logistics services"}
                        />
                </div>
                <button type='submit' className="pos_bt" >Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Waitlist
