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
    <h1>Settings</h1>
  )
}

export default AccountSetting;