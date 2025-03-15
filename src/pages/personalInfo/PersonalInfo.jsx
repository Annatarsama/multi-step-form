import { useState,useRef, useContext} from 'react';
import ForwardButton from '../../buttons/ForwardButton';
import BackButton from '../../buttons/BackButton';
import {Context} from '../../app_content/AppContent';
import './personalInfo.css';

function PersonalInfo() {

  let[ pageNumber,SetPageNumber] = useContext(Context);
  const errorName = useRef(null);
  const errorMail = useRef(null); 
  const errorPhone = useRef(null);
  const nameInput = useRef(null);
  const mailInput = useRef(null); 
  const phoneInput = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if(name === 'email') {
      if(!value.includes('@')) {
        errorMail.current.style.visibility = 'visible';
        mailInput.current.classList.add('error');
      } else {
        errorMail.current.style.visibility = 'hidden';
        mailInput.current.classList.remove('error');
        ;
      }
    } else if(name === 'phone') {
      if(value.length < 10) {
        errorPhone.current.style.visibility = 'visible';
        phoneInput.current.classList.add('error');
      } else {
        errorPhone.current.style.visibility = 'hidden';
        phoneInput.current.classList.remove('error');
      }
    } else if(name === 'name') {
      if(value.length < 3) {
        errorName.current.style.visibility = 'visible';
        nameInput.current.classList.add('error');
      } else {
        errorName.current.style.visibility = 'hidden';
        nameInput.current.classList.remove('error');
      }
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

    
  const handleSubmit = () => {
    if(formData.name.length > 3 && formData.email.includes('@') && formData.phone.length >= 10) {
      SetPageNumber(pageNumber + 1);
    } else {
      console.log('Please fill out the form');
    }
  };

  return (
    <div className="personalInfo">
      <h2 className="title">Personal Info</h2>
      <div className="description">Please provide your name, email address, and phone number</div>
      <form>
        <div className='inputContainer'>
          <div className="label">
          <label htmlFor="name">Name</label>
          <div ref={errorName} className='errorText'>This name is invalid</div>
          </div>
          <input
            ref={nameInput}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <div className="label">
          <label htmlFor="email">Email Address</label>
          <div ref={errorMail} className='errorText'>This email is invalid</div>
          </div>
          <input
            ref={mailInput}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <div className="label">
          <label htmlFor="phone">Phone Number</label>
          <div ref={errorPhone} className='errorText'>This phone is invalid</div>
          </div>
          <input
            ref={phoneInput}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="buttonSection">
          <ForwardButton value={handleSubmit}/>

        </div>
    </div>
  );
}

export default PersonalInfo;