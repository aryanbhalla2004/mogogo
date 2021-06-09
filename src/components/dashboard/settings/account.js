import { useState } from "react";

const AccountSetting = (props) => {
  const [userinfo, setUserInfo] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Country: '',
    About: '',
    Facebook: '',
    Instagram: '',
    Twitter:'',
    Linked: ''
  });

  return (
    <div className="account-setting-form">
      <h1>General Settings</h1>
      <div className="profile-section">
        <h3>Personal Information</h3>
        <p>This information will be displayed publicly so be careful what you share.</p>
        <div className="flex-input-2">
          <div className="input-fields half-width">
            <label>Name</label>
            <div className="icon-row">
              <i class="fas fa-user"></i>
              <input placeholder="John Smith" type="text" value={props.user && props.user.Name}></input>
            </div>
          </div>
          <div className="input-fields half-width">
            <label>Email Address</label>
            <div className="icon-row">
              <i class="fas fa-envelope"></i>
              <input placeholder="Example@example.com" type="email" value={props.user && props.user.Email} readOnly></input>
            </div>   
          </div>
        </div>
        <div className="flex-input-2">
          <div className="input-fields half-width">
            <label>Phone Number</label>
            <div className="icon-row">
              <i class="fas fa-phone-alt"></i>
              <input placeholder="+1 (234)-567-8901" value={props.user && props.user.Phone} type="tel"></input>
            </div>
          </div>
          <div className="input-fields half-width">
            <label>Country</label>
            <div className="icon-row">
              <i class="fas fa-globe-americas"></i>
              <input placeholder="Canada" type="text" value={props.user && props.user.Country}></input>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-section mt-30">
        <h3>Profile Information</h3>
        <p>This information will be displayed publicly so be careful what you share.</p>
        <div className="input-fields">
          <label>About</label>
          <textarea placeholder="Your Message" type="name" wrap="off" cols="30" rows="5" value={props.user && props.user.about}></textarea>
        </div>
        <p>Brief description to your profile.</p>
        <div className="flex-input-2">
          <div className="input-fields half-width">
            <label>Facebook</label>
            <div className="icon-row">
              <i class="fab fa-facebook-f"></i>
              <input placeholder="Facebook @" type="text" value={props.user && props.user.facebook}></input>
            </div>
          </div>
          <div className="input-fields half-width">
            <label>Instagram</label>
            <div className="icon-row">
              <i class="fab fa-instagram"></i>
              <input placeholder="Instagram @" type="text" value={props.user && props.user.instagram}></input>
            </div>
          </div>
        </div>
        <div className="flex-input-2">
          <div className="input-fields half-width">
            <label>Twitter</label>
            <div className="icon-row">
              <i class="fab fa-twitter"></i>
              <input placeholder="Twitter @" type="text" value={props.user && props.user.twitter}></input>
            </div>
          </div>
          <div className="input-fields half-width">
            <label>Linked</label>
            <div className="icon-row">
              <i class="fab fa-linkedin-in"></i>
              <input placeholder="Linked @" type="text" value={props.user && props.user.Linked}></input>
            </div>
          </div>
        </div>
        <button className="save-changes-button button-hover">Save Changes</button>
      </div>
    </div>
  )
}

export default AccountSetting;