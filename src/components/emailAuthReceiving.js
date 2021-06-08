import { useEffect } from "react";
import {useHistory} from 'react-router-dom';

const EmailAuthReceiving = () => {
  const history = useHistory();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('oobCode');
  const mode = urlParams.get('mode');

  useEffect(() => {
    if(mode === 'verifyEmail') {
      history.push({
        pathname: '/user/confirm-account-activation',
        search: `code=${code}`
      });
    } else if (mode === 'resetPassword') {
      history.push({
        pathname: '/user/create-new-password/',
        search: `code=${code}`
      });
    }
  });

  return (
    <h1>Please Wait You Will Be Redirected Shortly...</h1>
  )
}

export default EmailAuthReceiving;