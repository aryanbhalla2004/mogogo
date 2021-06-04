import { useEffect, useState } from "react"

const Dashboard = (props) => {
  const [userinfo, setUserInfo] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fair-sandbox-136923-default-rtdb.firebaseio.com/Users/${props.user.uid}.json`);
      const JSON = await response.json();
      setUserInfo(JSON.name);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome, {userinfo}</h1>
      <button onClick={(e) => props.logout(props.user)}>Logout</button>
    </>
  )
}

export default Dashboard