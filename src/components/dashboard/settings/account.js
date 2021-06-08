const AccountSetting = () => {
  return (
    <div className="account-setting-form">
      <h1>General Settings</h1>
      <div className="profile-section">
        <h3>Profile</h3>
        <p>This information will be displayed publicly so be careful what you share.</p>
        <div className="flex-input-2">
          <div className="input-fields half-width">
            <label>Name</label>
            <input placeholder="John Smith" type="name"></input>
          </div>
          <div className="input-fields half-width">
            <label>Email</label>
            <input placeholder="Example@example.com" type="email"></input>
          </div>
        </div>
        <div className="flex-input-2">
          <div className="input-fields half-width">
            <label>Phone Number</label>
            <input placeholder="+1 (234)-567-8901" type="tel"></input>
          </div>
          <div className="input-fields half-width">
            <label>Country</label>
            <input placeholder="Canada" type="text"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSetting;